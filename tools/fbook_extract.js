// Formula Book data (run by tools/build_tf.py):
//   node tools/fbook_extract.js <repo root>        -> fbook/data.js      (Thermofluids, from .tfsrc/notes + .tfsrc/diagrams)
//   node tools/fbook_extract.js <repo root> esa    -> fbook/data_esa.js  (Eng Sci A, from the notes inside .src/template.html)
// Stable ids = topic + hash of the equation source, so new weeks / edited notes never break saved books.
const fs=require('fs'),path=require('path');
const root=process.argv[2], subj=process.argv[3]||'tf';
const R=String.raw;
const boxed=(tex)=>{const i=tex.indexOf('\\boxed{'); if(i<0) return null; let d=0,j=i+7; for(;j<tex.length;j++){ if(tex[j]=='{')d++; else if(tex[j]=='}'){ if(d==0)break; d--; } } return tex.slice(i+7,j);};
const clean=(x)=>String(x).replace(/\\tag\{[^}]*\}/g,'').trim();
const strip=(h)=>String(h||'').replace(/<[^>]+>/g,'').replace(/\*\*/g,'').replace(/\$([^$]*)\$/g,'$1').trim();

// ---- load the subject's notes + a diagram renderer: dia(kind, key) -> svg string or '' ----
let notes, dia, FBM={};
if(subj==='esa'){
  const t=fs.readFileSync(path.join(root,'.src/template.html'),'utf8');
  const a=t.indexOf('class Component extends DCLogic {'), b=t.indexOf('</script>',a);
  const store={getItem:()=>null,setItem(){},removeItem(){},key:()=>null,length:0};
  Object.assign(global,{window:global,localStorage:store,sessionStorage:store,location:{hash:'',search:'',href:''},document:{documentElement:{getAttribute:()=>null,setAttribute(){}},querySelector:()=>null,querySelectorAll:()=>[]}});
  const C=new Function('DCLogic','return ('+t.slice(a,b).trim().replace(/;\s*$/,'')+')')(class{constructor(p){this.props=p||{};this.state={};}setState(){}forceUpdate(){}});
  const x=new C({}); x.state=x.state||{}; x._subject=()=>'esa';
  const AREAS=[['mech',x._mechTopicKeys()],['elec',x._elecTopicKeys()],['struct',x._structTopicKeys()]];
  notes=[]; AREAS.forEach(([area,keys])=>{ const defs=x._subjDefs(area); keys.forEach((k,i)=>{ const d=defs.find((q)=>q.key===k)||{name:k}; notes.push({key:k,area,num:'',name:d.name,sections:x._richNote(k)||[]}); }); });
  const real=(s)=>s&&!/^<div style="font-family:'JetBrains Mono'[^>]*>\[/.test(s);   // the renderers return a "[ key ]" placeholder for unknown keys
  dia=(kind,key)=>{ try{ const s=kind==='esvg'?x._edia(key):kind==='dgm'?x._fdia(key):x._t3dia(key,true); return real(s)?s:''; }catch(e){ console.error('dia fail',key,e.message); return ''; } };
  FBM=new Function('R','return ('+fs.readFileSync(path.join(root,'.esasrc/formula_book.js'),'utf8')+')')(R);
  // topics with no website note yet (e.g. Electric Machines): equations only, placed after their `after` topic
  (FBM.extraTopics||[]).forEach((xt)=>{ const i=notes.findIndex((n)=>n.key===xt.after); const n={key:xt.key,area:xt.area,num:'',name:xt.name,sections:[]}; FBM[xt.key]=xt; notes.splice(i<0?notes.length:i+1,0,n); });
  ['mech','elec','struct'].forEach((a)=>notes.filter((n)=>n.area===a).forEach((n,i)=>{ n.num=a[0].toUpperCase()+(i+1); }));   // M1… E1… S1… (topic numbers restart per area)
}else{
  const nd=path.join(root,'.tfsrc/notes'), dd=path.join(root,'.tfsrc/diagrams');
  notes=fs.readdirSync(nd).filter(f=>f.endsWith('.js')).sort().map(f=>{ let s=fs.readFileSync(path.join(nd,f),'utf8').trim(); s=s.replace(/\[\s*'@img'\s*,\s*'([A-Za-z0-9_\-]+)'\s*\]/g,"['para','']"); return new Function('R','return ('+s+')')(R); });
  const D=new Function(fs.readdirSync(dd).filter(f=>f.endsWith('.js')).sort().map(f=>fs.readFileSync(path.join(dd,f),'utf8')).join('\n')+'\n;return D;').call({});
  dia=(kind,key)=>{ if(kind!=='svg'||!D[key]) return ''; try{ return D[key](); }catch(e){ console.error('dia fail',key,e.message); return ''; } };
  try{ FBM=new Function('return ('+fs.readFileSync(path.join(root,'.tfsrc/formula_book.js'),'utf8')+')')(); }catch(e){}
}

// Eng Sci A: a derivation/example title becomes the equation's label: text before any inline maths, cut at a word, no dangling bracket
const shortLabel=(t)=>{ let x=String(t||'').split('—').pop().split('$')[0].replace(/\*\*/g,'').replace(/<[^>]+>/g,'').trim(); if(x.length>56){ x=x.slice(0,56); x=x.slice(0,x.lastIndexOf(' ')>20?x.lastIndexOf(' '):56); } if((x.match(/\(/g)||[]).length>(x.match(/\)/g)||[]).length) x=x.slice(0,x.lastIndexOf('(')); return x.replace(/[\s,:;+\-–=(]+$/,'').trim(); };
// Eng Sci A: a boxed worked-example ANSWER ("1266 m", "T_A = 1.28 kNm") is not a formula
const numericAnswer=(tex)=>{ const r=String(tex).split(/=|\\approx/).pop()
  .replace(/\\(text|mathrm)\{[^}]*\}(\^\{?-?\d+\}?)?|\^\\circ|\\degree|\\%|\\(up|down)arrow|\\[,;!:]|\\quad|\\qquad|\s|\\ |°/g,'');   // drop units
  return /^[-+−]?[\d.,{}]+(\\times10\^\{?-?\d+\}?)?$/.test(r) && !/^0$/.test(r); };
const lhs=(tex)=>String(tex).split('=')[0].replace(/\\(left|right|,|;|!|tfrac|dfrac|frac|text|mathrm|mathbf|boldsymbol)|[\s{}()]/g,'');
const out={subject:subj,topics:[],diagrams:{}}; const usedIds={};
for(const n of notes){
  const M=FBM[n.key]||{};
  const T={key:n.key,area:n.area,num:n.num,name:n.name,triggers:n.triggers||M.triggers||'',assume:M.assume||'',spot:M.spot||'',groups:[],dias:[]}; const seenD={}, seenT={}, seenL={};
  for(const s of n.sections||[]){
    const g={num:s.num||'',title:String(s.title||'').split(':')[0],eqs:[]}; const seen={};
    let isSum=false;
    const push=(label,raw,units,desc,minor,fromEx)=>{const k=String(raw); if(!k||seen[k])return; seen[k]=1;
      if(subj==='esa'){ const nt=clean(raw).replace(/\s+/g,''); if(seenT[nt]) return; seenT[nt]=1; if(fromEx&&numericAnswer(clean(raw))){ if(process.env.FB_DEBUG) console.error('drop',n.key,'|',clean(raw).slice(0,90)); return; } const l=lhs(clean(raw)); if(isSum&&l&&seenL[l]) minor=true; if(l&&!isSum) seenL[l]=1; } const tex=clean(raw); let id=n.key+'_'+Math.abs([...k].reduce((a,c)=>(a*31+c.charCodeAt(0))|0,7)).toString(36); while(usedIds[id]) id+='x'; usedIds[id]=1; g.eqs.push({k,minor:!!minor,id,label:label||'',tex,units:units||'',desc:strip(desc)});};
    const addDia=(kind,key,cap)=>{ if(!key||seenD[key])return; const svg=out.diagrams[key]||dia(kind,key); if(!svg)return; seenD[key]=1; out.diagrams[key]=svg; T.dias.push({key,cap:strip(cap).slice(0,140),sec:g.num}); };
    const walk=(blocks)=>{ for(const b of blocks||[]){ if(!Array.isArray(b))continue; const k=b[0];
      if((k==='eq'||k==='eqplain')&&Array.isArray(b[1])) b[1].forEach(r=>push(r[0],r[1],r[2],r[3],false));
      else if(k==='disp'){ (Array.isArray(b[1])?b[1]:[b[1]]).forEach(tx=>{ if(String(tx).includes('\\begin{array}'))return; const bx=boxed(String(tx)); const tg=(String(tx).match(/\\tag\{([^}]*)\}/)||[])[1]; push(tg?'('+tg+')':'',bx||tx,'','',!bx,!!bx); }); }
      else if(k==='svg'||k==='esvg'||k==='dgm') addDia(k,b[1],b[2]||'');
      else if(k==='deriv'||k==='ex'){ (b[2]||[]).forEach(ln=>{ if(!Array.isArray(ln))return; if(ln[0]==='m'){ const bx=boxed(String(ln[1])); if(bx) push(subj==='esa'?shortLabel(b[1]):String(b[1]||'').split('—').pop().trim().slice(0,50),bx,'','',false,true); } else if((ln[0]==='svg'||ln[0]==='dgm')&&subj==='esa') addDia(ln[0],ln[1],ln[2]||b[1]||''); }); }
    } };
    isSum=subj==='esa'&&/key formula|summary/i.test(String(s.title||''));
    walk(s.blocks);
    if(g.eqs.length) T.groups.push(g);
  }
  // course equations the notes only give in prose / tables (see .esasrc/formula_book.js `extra`)
  for(const x of (M.extra||[])){ const g={num:'',title:x.title,src:x.src||'',eqs:[]}; const seen={}; for(const r of x.eqs){ const k=String(r[1]); if(seen[k])continue; seen[k]=1; let id=n.key+'_'+Math.abs([...k].reduce((a,c)=>(a*31+c.charCodeAt(0))|0,7)).toString(36); while(usedIds[id]) id+='x'; usedIds[id]=1; g.eqs.push({k,minor:false,id,label:r[0]||'',tex:clean(k),units:r[2]||'',desc:strip(r[3])}); } if(g.eqs.length) T.groups.push(g); }
  out.topics.push(T);
}
const ne=out.topics.reduce((a,t)=>a+t.groups.reduce((x,g)=>x+g.eqs.length,0),0);
console.error(subj,'topics',out.topics.length,'eqs',ne,'dias',Object.keys(out.diagrams).length,'KB',Math.round(JSON.stringify(out).length/1024));
fs.writeFileSync(path.join(root,'fbook',subj==='esa'?'data_esa.js':'data.js'),'window.FB_DATA='+JSON.stringify(out)+';');
