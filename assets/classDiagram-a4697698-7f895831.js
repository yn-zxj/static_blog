import{b as X,B as w,y as W}from"./styles-7ff74f5d-ec081774.js";import{$,M as n,X as l,c as v}from"./mermaid.esm.min-94abd002.js";import{A as H,a as S}from"./index-7f531408-5562a889.js";import{F as k}from"./svgDraw-1c03c25e-42a6f30a.js";import"./app-d47a62c1.js";import"./framework-96bec801.js";import"./isPlainObject-0b348591-d1b7027a.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";let m={};const g=20,p=function(e){const o=Object.entries(m).find(u=>u[1].label===e);if(o)return o[0]},Y=function(e){e.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),e.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},Z=function(e,o,u,a){const f=$().class;m={},n.info("Rendering diagram "+e);const L=$().securityLevel;let b;L==="sandbox"&&(b=l("#i"+o));const y=L==="sandbox"?l(b.nodes()[0].contentDocument.body):l("body"),d=y.select(`[id='${o}']`);Y(d);const r=new H({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});const h=a.db.getClasses(),N=Object.keys(h);for(const t of N){const i=h[t],s=k.drawClass(d,i,f,a);m[s.id]=s,r.setNode(s.id,s),n.info("Org height: "+s.height)}a.db.getRelations().forEach(function(t){n.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),r.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")}),a.db.getNotes().forEach(function(t){n.debug(`Adding note: ${JSON.stringify(t)}`);const i=k.drawNote(d,t,f,a);m[i.id]=i,r.setNode(i.id,i),t.class&&t.class in h&&r.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),S(r),r.nodes().forEach(function(t){t!==void 0&&r.node(t)!==void 0&&(n.debug("Node "+t+": "+JSON.stringify(r.node(t))),y.select("#"+(a.db.lookUpDomId(t)||t)).attr("transform","translate("+(r.node(t).x-r.node(t).width/2)+","+(r.node(t).y-r.node(t).height/2)+" )"))}),r.edges().forEach(function(t){t!==void 0&&r.edge(t)!==void 0&&(n.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r.edge(t))),k.drawEdge(d,r.edge(t),r.edge(t).relation,f,a))});const c=d.node().getBBox(),x=c.width+g*2,E=c.height+g*2;v(d,E,x,f.useMaxWidth);const M=`${c.x-g} ${c.y-g} ${x} ${E}`;n.debug(`viewBox ${M}`),d.attr("viewBox",M)},B={draw:Z},G={parser:X,db:w,renderer:B,styles:W,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,w.clear()}};export{G as diagram};