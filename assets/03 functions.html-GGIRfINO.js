import{T as c,a as d,L as s,C as g,b as _}from"./CodeBox-BdV9451O.js";import{R as p}from"./RightSpan-DJurDf3a.js";import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,d as n,w as l,a as e,o as m,b as o}from"./app-BzcQBFlv.js";const C={__name:"03 functions.html",setup(i,{expose:a}){a();const r={get ToggleContent(){return c},get TopToggleContent(){return d},get LeftRightLayout(){return s},get ColorSpan(){return g},get CodeBox(){return _},get RightSpan(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},f=e("li",null,"函数体：函数具体的执行逻辑",-1),S=e("hr",null,null,-1),y=e("li",null,"隐藏实现细节",-1),b=e("li",null,"避免为常见任务重复编写代码",-1),T=e("li",null,"将问题分解为单独的功能，更容易测试",-1),x=e("img",{src:"https://hackingcpp.com/cpp/lang/function_terminology.svg"},null,-1),B=e("hr",null,null,-1),R=e("strong",null,"mean",-1),v=e("hr",null,null,-1),A=e("strong",null,"main",-1),L=e("br",null,null,-1),k=e("strong",null,"square",-1),P=e("strong",null,"max",-1),N=e("br",null,null,-1),w=e("strong",null,"print_squares",-1),D=e("li",null,"void",-1),O=e("br",null,null,-1),E=e("li",null," 用const 修饰的参数在函数体无法对其做修改",-1),F=e("strong",null,"foo",-1),M=e("hr",null,null,-1),j=e("br",null,null,-1),q=e("strong",null,"f",-1),z=e("hr",null,null,-1),V=e("strong",null,"main",-1),Z=e("hr",null,null,-1),H=e("strong",null,"foo",-1),I=e("strong",null,"foo",-1),J=e("strong",null,"foo",-1),G=e("strong",null,"foo",-1),K=e("hr",null,null,-1),Q=e("strong",null,"在第一个默认参数之后的每个参数都必须是默认参数!",-1);function U(i,a,r,t,W,X){return m(),h("div",null,[n(t.TopToggleContent,{title:"函数定义(Function Declarations)"},{toggle:l(()=>[n(t.LeftRightLayout,{leftBottom:"hidden"},{right:l(()=>[e("li",null,[n(t.ColorSpan,{data:"返回值： 函数执行后的结果",color:"red"})]),e("li",null,[n(t.ColorSpan,{data:"参数列表：函数执行所需要的数据"})]),f,S,y,b,T]),"left-top":l(()=>[x]),_:1}),B,n(t.ToggleContent,{title:"示例"},{toggle:l(()=>[n(t.CodeBox,{link:"https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0A%20double%20mean%20(double%20a%2C%20double%20b)%20%7B%0A%20%20return%20(a%20%2B%20b)%20%2F%202%3B%0A%7D%0A%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20mean(2%2C%206)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:l(()=>[e("pre",null,[n(t.ColorSpan,{data:"double",color:"red"}),o(),R,o(" ("),n(t.ColorSpan,{data:"double a"}),o(", "),n(t.ColorSpan,{data:"double b"}),o(`) {
  return (a + b) / 2;
}
`),v,o(`
int `),A,o(` () {
  std::cout << mean(2, 6) <<'\\n';  `),n(t.ColorSpan,{data:"// prints 4",color:"dimgray"}),o(` 
  return 0;
}`)])]),_:1})]),_:1})]),_:1}),L,n(t.TopToggleContent,{title:"返回值(Return Types)"},{toggle:l(()=>[n(t.ToggleContent,{title:"有返回值"},{toggle:l(()=>[n(t.CodeBox,null,{code:l(()=>[e("pre",null,[n(t.ColorSpan,{data:"double",color:"red"}),o(),k,o(` (double x) {
  `),n(t.ColorSpan,{data:"return"}),o(` (x * x);
}
`),n(t.ColorSpan,{data:"int",color:"red"}),o(),P,o(` (int x, int y) {
  if (x > y) `),n(t.ColorSpan,{data:"return"}),o(" x; else "),n(t.ColorSpan,{data:"return"}),o(` y;
}`)])]),_:1})]),display:l(()=>[e("li",null,[n(t.ColorSpan,{data:"return"}),o(" int, double, …")])]),_:1}),N,n(t.ToggleContent,{title:"无返回值"},{toggle:l(()=>[n(t.CodeBox,null,{code:l(()=>[e("pre",null,[n(t.ColorSpan,{data:"void",color:"red"}),o(),w,o(` (int n) {
  for (int i = 1; i <= n; ++i)
    cout << square(i) << '\\n';
}`)])]),_:1})]),display:l(()=>[D]),_:1})]),_:1}),O,n(t.TopToggleContent,{title:"参数(Parameters)"},{toggle:l(()=>[n(t.ToggleContent,{title:"常量参数(const Parameters)"},{display:l(()=>[E]),toggle:l(()=>[n(t.CodeBox,null,{code:l(()=>[e("pre",null,[o("int "),F,o(" (int a, int "),n(t.ColorSpan,{data:"const",color:"red"}),o(` b) {
  a += 5;   //`),n(t.RightSpan),o(`
  b += 10;  //`),n(t.RightSpan,{type:"wrong"}),o(),n(t.ColorSpan,{data:"COMPILER ERROR: can't modify const parameter",color:"red"}),o(`
  return (a + b);
}
`),M,o(`
`),n(t.ColorSpan,{color:"dimgray",data:"// calling foo:"}),o(`
foo(2,9);  `),n(t.ColorSpan,{color:"dimgray",data:"// const has no effect here"})])]),_:1})]),_:1}),j,n(t.ToggleContent,{title:"默认参数(default Parameters)"},{toggle:l(()=>[n(t.CodeBox,null,{code:l(()=>[e("pre",null,[o("double "),q,o(" (double a, double b "),n(t.ColorSpan,{data:"= 1.5",color:"red"}),o(`) {
  return (a * b);
}
`),z,o(`
int `),V,o(` () {
  cout <<  f(2);     `),n(t.ColorSpan,{color:"dimgray",data:"// 1 argument  → 3.0"}),o(`
  cout <<  f(2, `),n(t.ColorSpan,{data:"3",color:"red"}),o(");  "),n(t.ColorSpan,{color:"dimgray",data:"// 2 arguments → 6.0"}),o(`
}
`),Z,o(`
void `),H,o(" (int i "),n(t.ColorSpan,{color:"green",data:"= 0"}),o(");  "),n(t.RightSpan),o(`
void `),I,o(" (int n, double x "),n(t.ColorSpan,{color:"green",data:"= 2.5"}),o(");  "),n(t.RightSpan),o(`
void `),J,o(" (int a, int b "),n(t.ColorSpan,{color:"green",data:"= 1"}),o(", float c "),n(t.ColorSpan,{color:"green",data:"= 3.5f"}),o(");  "),n(t.RightSpan),o(`
void `),G,o(" (int a, int b "),n(t.ColorSpan,{color:"red",data:"= 1"}),o(", int c ); "),n(t.RightSpan,{type:"wrong"}),K,o(`
❗ `),Q])]),_:1})]),_:1})]),_:1})])}const no=u(C,[["render",U],["__file","03 functions.html.vue"]]),eo=JSON.parse('{"path":"/coding/cpp/03%20functions.html","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","order":2,"category":["cpp教程"],"tag":["c++"],"head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/coding/cpp/03%20functions.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-02T05:06:53.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:modified_time","content":"2024-10-02T05:06:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-02T05:06:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[],"git":{"createdTime":1727839516000,"updatedTime":1727845613000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":2}]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"coding/cpp/03 functions.md","localizedDate":"2024年10月2日","excerpt":""}');export{no as comp,eo as data};
