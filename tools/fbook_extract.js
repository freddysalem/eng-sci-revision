// Formula Book data: node tools/fbook_extract.js <repo root>  ->  fbook/data.js (run by tools/build_tf.py) (stable ids = topic + hash of the equation source, so new weeks never break saved books)
const fs=require('fs'),path=require('path');
const root=process.argv[2];
const nd=path.join(root,'.tfsrc/notes'), dd=path.join(root,'.tfsrc/diagrams');
const R=String.raw;
const notes=fs.readdirSync(nd).filter(f=>f.endsWith('.js')).sort().map(f=>{ let s=fs.readFileSync(path.join(nd,f),'utf8').trim(); s=s.replace(/\[\s*'@img'\s*,\s*'([A-Za-z0-9_\-]+)'\s*\]/g,"['para','']"); return new Function('R','return ('+s+')')(R); });
const dia=fs.readdirSync(dd).filter(f=>f.endsWith('.js')).sort().map(f=>fs.readFileSync(path.join(dd,f),'utf8')).join('\n');
const D=new Function(dia+'\n;return D;').call({});
const boxed=(tex)=>{const i=tex.indexOf('\\boxed{'); if(i<0) return null; let d=0,j=i+7; for(;j<tex.length;j++){ if(tex[j]=='{')d++; else if(tex[j]=='}'){ if(d==0)break; d--; } } return tex.slice(i+7,j);};
const clean=(x)=>String(x).replace(/\\tag\{[^}]*\}/g,'').trim();
const strip=(h)=>String(h||'').replace(/<[^>]+>/g,'').replace(/\$([^$]*)\$/g,'$1').trim();
const out={topics:[],diagrams:{}}; const usedIds={}; let FBM={}; try{ FBM=new Function('return ('+fs.readFileSync(path.join(root,'.tfsrc/formula_book.js'),'utf8')+')')(); }catch(e){}
for(const n of notes){
  const T={key:n.key,area:n.area,num:n.num,name:n.name,triggers:n.triggers||'',assume:(FBM[n.key]||{}).assume||'',spot:(FBM[n.key]||{}).spot||'',groups:[],dias:[]}; const seenD={};
  for(const s of n.sections||[]){
    const g={num:s.num||'',title:String(s.title||'').split(':')[0],eqs:[]}; const seen={};
    const push=(label,raw,units,desc,minor)=>{const k=String(raw); if(!k||seen[k])return; seen[k]=1; const tex=clean(raw); let id=n.key+'_'+Math.abs([...k].reduce((a,c)=>(a*31+c.charCodeAt(0))|0,7)).toString(36); while(usedIds[id]) id+='x'; usedIds[id]=1; g.eqs.push({k,minor:!!minor,id,label:label||'',tex,units:units||'',desc:strip(desc)});};
    const walk=(blocks)=>{ for(const b of blocks||[]){ if(!Array.isArray(b))continue; const k=b[0];
      if((k==='eq'||k==='eqplain')&&Array.isArray(b[1])) b[1].forEach(r=>push(r[0],r[1],r[2],r[3],false));
      else if(k==='disp'){ (Array.isArray(b[1])?b[1]:[b[1]]).forEach(tx=>{ if(String(tx).includes('\\begin{array}'))return; const bx=boxed(String(tx)); const tg=(String(tx).match(/\\tag\{([^}]*)\}/)||[])[1]; push(tg?'('+tg+')':'',bx||tx,'','',!bx); }); }
      else if(k==='svg'&&D[b[1]]&&!seenD[b[1]]){ seenD[b[1]]=1; T.dias.push({key:b[1],cap:strip(b[2]).slice(0,140),sec:g.num}); if(!out.diagrams[b[1]]){ try{ out.diagrams[b[1]]=D[b[1]](); }catch(e){ console.error('dia fail',b[1],e.message); } } }
      else if(k==='deriv'||k==='ex'){ (b[2]||[]).forEach(ln=>{ if(Array.isArray(ln)&&ln[0]==='m'){ const bx=boxed(String(ln[1])); if(bx) push(String(b[1]||'').split('—').pop().trim().slice(0,50),bx); } }); }
    } };
    walk(s.blocks);
    if(g.eqs.length) T.groups.push(g);
  }
  out.topics.push(T);
}
const ne=out.topics.reduce((a,t)=>a+t.groups.reduce((x,g)=>x+g.eqs.length,0),0);
console.error('topics',out.topics.length,'eqs',ne,'dias',Object.keys(out.diagrams).length, 'KB', Math.round(JSON.stringify(out).length/1024));
fs.writeFileSync(path.join(root,'fbook/data.js'),'window.FB_DATA='+JSON.stringify(out)+';');
