!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,s,i=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy-B-41oukK.js","./index-legacy-DPflTDoN.js","./index-legacy-CNf0pbBM.js"],(function(n,t){"use strict";var r,a,o,s,i,c;return{setters:[function(e){r=e.r,a=e.j,o=e.B},function(e){s=e.u,i=e.F},function(e){c=e.T}],execute:function(){n("Component",(function(){var n=e(r.useState(0),2),l=n[0],u=n[1],d=[{title:"Name",width:300,dataIndex:"name",key:"name",minConstraints:20,render:function(e){return a.jsx("a",{children:e})}},{title:"Age",dataIndex:"age",key:"age",width:100},{title:"Address",dataIndex:"address",key:"address",width:100},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e,n){var t=n.tags;return a.jsx(a.Fragment,{children:t.map((function(e){var n=e.length>5?"geekblue":"green";return"loser"===e&&(n="volcano"),a.jsx(c,{color:n,children:e.toUpperCase()},e)}))})},width:300},{title:"Action",key:"action",render:function(e,n){return a.jsxs("div",{className:"w-full truncate space-x-1",children:[a.jsx("span",{children:n.name}),a.jsx("a",{onClick:function(){u((function(e){return e+1}))},children:"Render"}),a.jsx("span",{children:l})]})}}],f=s({columns:r.useMemo((function(){return d}),[l]),columnsState:{persistenceKey:"basic",persistenceType:"sessionStorage"}}),m=f.components,y=f.resizableColumns,g=f.tableWidth,h=f.resetColumns;return a.jsxs("div",{className:"App",children:[a.jsx(i,{columns:y,components:m,dataSource:t,scroll:{x:g}}),a.jsx(o,{onClick:function(){h()},children:"重置"})]})}));var t=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}]}}}))}();
