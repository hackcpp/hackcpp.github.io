import{a as h}from"./array-DEnAxiAM.js";import{w as d,c as o}from"./path-CbwjOpE9.js";import{n as v}from"./mermaid.core-B_ToHXdS.js";import{x as w,y as b}from"./point-DWREGWZc.js";function S(e,u){var m=o(!0),i=null,l=v,r=null,g=d(t);e=typeof e=="function"?e:e===void 0?w:o(e),u=typeof u=="function"?u:u===void 0?b:o(u);function t(n){var f,a=(n=h(n)).length,p,c=!1,s;for(i==null&&(r=l(s=g())),f=0;f<=a;++f)!(f<a&&m(p=n[f],f,n))===c&&((c=!c)?r.lineStart():r.lineEnd()),c&&r.point(+e(p,f,n),+u(p,f,n));if(s)return r=null,s+""||null}return t.x=function(n){return arguments.length?(e=typeof n=="function"?n:o(+n),t):e},t.y=function(n){return arguments.length?(u=typeof n=="function"?n:o(+n),t):u},t.defined=function(n){return arguments.length?(m=typeof n=="function"?n:o(!!n),t):m},t.curve=function(n){return arguments.length?(l=n,i!=null&&(r=l(i)),t):l},t.context=function(n){return arguments.length?(n==null?i=r=null:r=l(i=n),t):i},t}export{S as l};
