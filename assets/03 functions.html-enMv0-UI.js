import{T as c,a as d,L as s,C as u,b as p}from"./CodeBox-BNp7Ci3R.js";import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as _,d as o,w as e,a as n,o as m,b as l}from"./app-Dd_Bxp1d.js";const h={__name:"03 functions.html",setup(i,{expose:a}){a();const r={get ToggleContent(){return c},get TopToggleContent(){return d},get LeftRightLayout(){return s},get ColorSpan(){return u},get CodeBox(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},f=n("li",null,"函数体：函数具体的执行逻辑",-1),C=n("hr",null,null,-1),b=n("li",null,"隐藏实现细节",-1),y=n("li",null,"避免为常见任务重复编写代码",-1),T=n("li",null,"将问题分解为单独的功能，更容易测试",-1),x=n("img",{src:"https://hackingcpp.com/cpp/lang/function_terminology.svg"},null,-1),B=n("hr",null,null,-1),S=n("strong",null,"mean",-1),v=n("hr",null,null,-1),A=n("strong",null,"main",-1),R=n("br",null,null,-1),L=n("strong",null,"square",-1),k=n("strong",null,"max",-1),P=n("br",null,null,-1),N=n("strong",null,"print_squares",-1),D=n("li",null,"void",-1),O=n("br",null,null,-1),w=n("pre",null,`int foo (int a, int const b) {
  a += 5;   // 
  b += 10;  //  COMPILER ERROR: can't modify const parameter
  return (a + b);
}
// calling foo:
foo(2,9);  // const has no effect here`,-1),E=n("br",null,null,-1),F=n("pre",null,`double f (double a, double b = 1.5) {
  return (a * b);
}
int main () {
  cout <<  f(2);     // 1 argument  → 3.0
  cout <<  f(2, 3);  // 2 arguments → 6.0
}
void foo (int i = 0);  
void foo (int n, double x = 2.5);  
void foo (int a, int b = 1, float c = 3.5f);  
void foo (int a, int b = 1, int c ); `,-1);function M(i,a,r,t,j,q){return m(),_("div",null,[o(t.TopToggleContent,{title:"函数定义(Function Declarations)"},{toggle:e(()=>[o(t.LeftRightLayout,{leftBottom:"hidden"},{right:e(()=>[n("li",null,[o(t.ColorSpan,{data:"返回值： 函数执行后的结果",color:"red"})]),n("li",null,[o(t.ColorSpan,{data:"参数列表：函数执行所需要的数据"})]),f,C,b,y,T]),"left-top":e(()=>[x]),_:1}),B,o(t.ToggleContent,{title:"示例"},{toggle:e(()=>[o(t.CodeBox,{link:"https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0A%20double%20mean%20(double%20a%2C%20double%20b)%20%7B%0A%20%20return%20(a%20%2B%20b)%20%2F%202%3B%0A%7D%0A%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20mean(2%2C%206)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:e(()=>[n("pre",null,[o(t.ColorSpan,{data:"double",color:"red"}),l(),S,l(" ("),o(t.ColorSpan,{data:"double a"}),l(", "),o(t.ColorSpan,{data:"double b"}),l(`) {
  return (a + b) / 2;
}
`),v,l(`
int `),A,l(` () {
  std::cout << mean(2, 6) <<'\\n';  `),o(t.ColorSpan,{data:"// prints 4",color:"dimgray"}),l(` 
  return 0;
}`)])]),_:1})]),_:1})]),_:1}),R,o(t.TopToggleContent,{title:"返回值(Return Types)"},{toggle:e(()=>[o(t.ToggleContent,{title:"有返回值"},{toggle:e(()=>[o(t.CodeBox,null,{code:e(()=>[n("pre",null,[o(t.ColorSpan,{data:"double",color:"red"}),l(),L,l(` (double x) {
  `),o(t.ColorSpan,{data:"return"}),l(` (x * x);
}
`),o(t.ColorSpan,{data:"int",color:"red"}),l(),k,l(` (int x, int y) {
  if (x > y) `),o(t.ColorSpan,{data:"return"}),l(" x; else "),o(t.ColorSpan,{data:"return"}),l(` y;
}`)])]),_:1})]),display:e(()=>[n("li",null,[o(t.ColorSpan,{data:"return"}),l(" int, double, …")])]),_:1}),P,o(t.ToggleContent,{title:"无返回值"},{toggle:e(()=>[o(t.CodeBox,null,{code:e(()=>[n("pre",null,[o(t.ColorSpan,{data:"void",color:"red"}),l(),N,l(` (int n) {
  for (int i = 1; i <= n; ++i)
    cout << square(i) << '\\n';
}`)])]),_:1})]),display:e(()=>[D]),_:1})]),_:1}),O,o(t.TopToggleContent,{title:"参数(Parameters)"},{toggle:e(()=>[o(t.ToggleContent,{title:"常量参数(const Parameters)"},{toggle:e(()=>[o(t.CodeBox,null,{code:e(()=>[w]),_:1})]),_:1}),E,o(t.ToggleContent,{title:"默认参数(default Parameters)"},{toggle:e(()=>[o(t.CodeBox,null,{code:e(()=>[F]),_:1})]),_:1})]),_:1})])}const H=g(h,[["render",M],["__file","03 functions.html.vue"]]),I=JSON.parse('{"path":"/coding/cpp/03%20functions.html","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","order":2,"category":["cpp教程"],"tag":["c++"],"head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/coding/cpp/03%20functions.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-02T03:25:16.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:modified_time","content":"2024-10-02T03:25:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-02T03:25:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[],"git":{"createdTime":1727839516000,"updatedTime":1727839516000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"coding/cpp/03 functions.md","localizedDate":"2024年10月2日","excerpt":""}');export{H as comp,I as data};
