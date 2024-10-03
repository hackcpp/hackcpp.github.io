import{T as d,a as c,L as s,C as g,b as u}from"./CodeBox-9NT0lrhD.js";import{R as p}from"./RightSpan-DSpWTEYl.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,d as t,w as l,a as e,o as m,b as o}from"./app-GRfOnDvo.js";const C={__name:"03 functions.html",setup(i,{expose:a}){a();const r={get ToggleContent(){return d},get TopToggleContent(){return c},get LeftRightLayout(){return s},get ColorSpan(){return g},get CodeBox(){return u},get RightSpan(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},f=e("li",null,"函数体：函数具体的功能实现逻辑",-1),y=e("hr",null,null,-1),S={style:{"list-style-type":"none"}},A=e("img",{src:"https://hackingcpp.com/cpp/lang/function_terminology.svg"},null,-1),b=e("hr",null,null,-1),B=e("strong",null,"mean",-1),x=e("hr",null,null,-1),v=e("strong",null,"main",-1),R=e("br",null,null,-1),T=e("strong",null,"square",-1),D=e("strong",null,"max",-1),k=e("br",null,null,-1),L=e("strong",null,"print_squares",-1),P=e("li",null,"void",-1),F=e("hr",null,null,-1),N=e("li",null,"当调用函数时没有接收返回值时编译器报警告⚠️",-1),q=e("strong",null,"prime",-1),w=e("hr",null,null,-1),E=e("hr",null,null,-1),O=e("hr",null,null,-1),I=e("li",null,"函数返回局部变量的引用会导致未定义行为,需要避免",-1),j=e("strong",null,"square",-1),J=e("br",null,null,-1),M=e("strong",null,"main",-1),z=e("br",null,null,-1),V=e("li",null," 用const 修饰的参数在函数体无法对其做修改",-1),Z=e("strong",null,"foo",-1),H=e("hr",null,null,-1),G=e("br",null,null,-1),U=e("li",null," 避免函数参数时产生对象的拷贝",-1),W=e("li",null," 明确函数内不会修改参数",-1),K=e("hr",null,null,-1),Q=e("strong",null,"median",-1),X=e("strong",null,"median",-1),Y=e("br",null,null,-1),$=e("strong",null,"f",-1),oo=e("hr",null,null,-1),no=e("strong",null,"main",-1),to=e("hr",null,null,-1),eo=e("strong",null,"foo",-1),lo=e("strong",null,"foo",-1),ro=e("strong",null,"foo",-1),ao=e("strong",null,"foo",-1),io=e("hr",null,null,-1),co=e("strong",null,"在第一个默认参数之后的每个参数都必须是默认参数!",-1);function so(i,a,r,n,go,uo){return m(),h("div",null,[t(n.TopToggleContent,{title:"函数定义(Function Declarations)"},{toggle:l(()=>[t(n.LeftRightLayout,{leftBottom:"hidden"},{right:l(()=>[e("li",null,[t(n.ColorSpan,{data:"返回值： 函数执行后的结果",color:"red"})]),e("li",null,[t(n.ColorSpan,{data:"参数列表：函数执行所需要的数据"})]),f,y,e("ul",S,[e("li",null,[t(n.RightSpan),o("隐藏功能实现细节")]),e("li",null,[t(n.RightSpan),o("避免为常见任务重复编写代码")]),e("li",null,[t(n.RightSpan),o("将问题分解为单独的功能，更容易测试")])])]),"left-top":l(()=>[A]),_:1}),b,t(n.ToggleContent,{title:"示例"},{toggle:l(()=>[t(n.CodeBox,{link:"https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0A%20double%20mean%20(double%20a%2C%20double%20b)%20%7B%0A%20%20return%20(a%20%2B%20b)%20%2F%202%3B%0A%7D%0A%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20mean(2%2C%206)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:l(()=>[e("pre",null,[t(n.ColorSpan,{data:"double",color:"red"}),o(),B,o(" ("),t(n.ColorSpan,{data:"double a"}),o(", "),t(n.ColorSpan,{data:"double b"}),o(`) {
  return (a + b) / 2;
}
`),x,o(`
int `),v,o(` () {
  std::cout << mean(2, 6) <<'\\n';  `),t(n.ColorSpan,{data:"// prints 4",color:"dimgray"}),o(` 
  return 0;
}`)])]),_:1})]),_:1})]),_:1}),R,t(n.TopToggleContent,{title:"返回值(Return Types)"},{toggle:l(()=>[t(n.ToggleContent,{title:"有返回值"},{toggle:l(()=>[t(n.CodeBox,{link:"https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0Adouble%20square%20(double%20x)%20%7B%0A%20%20return%20(x%20*%20x)%3B%0A%7D%0Aint%20max%20(int%20x%2C%20int%20y)%20%7B%0A%20%20if%20(x%20%3E%20y)%20return%20x%3B%20else%20return%20y%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20square(2)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%0A%20%20std%3A%3Acout%20%3C%3C%20max(2%2C%204)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:l(()=>[e("pre",null,[t(n.ColorSpan,{data:"double",color:"red"}),o(),T,o(` (double x) {
  `),t(n.ColorSpan,{data:"return"}),o(` (x * x);
}
`),t(n.ColorSpan,{data:"int",color:"red"}),o(),D,o(` (int x, int y) {
  if (x > y) `),t(n.ColorSpan,{data:"return"}),o(" x; else "),t(n.ColorSpan,{data:"return"}),o(` y;
}`)])]),_:1})]),display:l(()=>[e("li",null,[t(n.ColorSpan,{data:"return"}),o(" int, double, …")])]),_:1}),k,t(n.ToggleContent,{title:"无返回值"},{toggle:l(()=>[t(n.CodeBox,{link:"https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0Adouble%20square%20(double%20x)%20%7B%0A%20%20return%20(x%20*%20x)%3B%0A%7D%0A%0Avoid%20print_squares%20(int%20n)%20%7B%0A%20%20for%20(int%20i%20%3D%201%3B%20i%20%3C%3D%20n%3B%20%2B%2Bi)%0A%20%20%20%20std%3A%3Acout%20%3C%3C%20square(i)%20%3C%3C%20'%5Cn'%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20print_squares(2)%3B%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:l(()=>[e("pre",null,[t(n.ColorSpan,{data:"void",color:"red"}),o(),L,o(` (int n) {
  for (int i = 1; i <= n; ++i)
    cout << square(i) << '\\n';
}`)])]),_:1})]),display:l(()=>[P]),_:1}),F,t(n.ToggleContent,{title:"Attribute [[nodiscard]]"},{display:l(()=>[N]),toggle:l(()=>[e("pre",null,[t(n.ColorSpan,{data:"[[nodiscard]]",color:"red"}),o(" bool "),q,o(` (int i) { … }
        `),w,o(`
`),t(n.ColorSpan,{data:"// return value(s) used:",color:"dimgray"}),o(`
bool const yes = prime(47); `),t(n.RightSpan),o(`
if (prime(47)) { … }
        `),E,o(`
`),t(n.ColorSpan,{data:"// return value discarded/ignored:",color:"dimgray"}),o(`
prime(47);  //  `),t(n.ColorSpan,{data:"COMPILER WARNING",color:"#f90"})])]),_:1}),O,t(n.ToggleContent,{title:"不要返回局部变量的引用"},{display:l(()=>[I]),toggle:l(()=>[e("pre",null,[t(n.ColorSpan,{data:"double&",color:"red"}),o(),j,o(` (double x) {
  double r = (x * x);
  `),t(n.ColorSpan,{data:"return"}),o(` r;
}
`),J,o(`
int `),M,o(` () {
  double r = square(3);  // `),t(n.ColorSpan,{data:"Undefined Behavior",color:"#f90"}),o(`
  return 0;
}`)])]),_:1})]),_:1}),z,t(n.TopToggleContent,{title:"参数(Parameters)"},{toggle:l(()=>[t(n.ToggleContent,{title:"常量参数(const Parameters)"},{display:l(()=>[V]),toggle:l(()=>[e("pre",null,[o("int "),Z,o(" (int a, int "),t(n.ColorSpan,{data:"const",color:"red"}),o(` b) {
  a += 5;   //`),t(n.RightSpan),o(`
  b += 10;  //`),t(n.RightSpan,{type:"wrong"}),o(),t(n.ColorSpan,{data:"COMPILER ERROR: can't modify const parameter",color:"red"}),o(`
  return (a + b);
}
`),H,o(`
`),t(n.ColorSpan,{color:"dimgray",data:"// calling foo:"}),o(`
foo(2,9);  `),t(n.ColorSpan,{color:"dimgray",data:"// const has no effect here"})])]),_:1}),G,t(n.ToggleContent,{title:"常量引用参数(const Reference Parameters)"},{display:l(()=>[U,W]),toggle:l(()=>[e("pre",null,[o(""),e("strong",null,[t(n.RightSpan,{type:"wrong"}),o("pass by "),t(n.ColorSpan,{data:"value",color:"red"}),o(" ⇒ copy")]),o("              "),e("strong",null,[t(n.RightSpan),o("pass by "),t(n.ColorSpan,{data:"const&",color:"green"}),o(" ⇒ no copy")]),o(`
`),K,o(`
int `),Q,o(" ("),t(n.ColorSpan,{data:"vector <int>",color:"red"}),o(");            int "),X,o(" ("),t(n.ColorSpan,{data:"const vector <int> &",color:"green"}),o(`);
auto v = get_samples("huge.dat");     auto v = get_samples("huge.dat");
auto m = median(`),t(n.ColorSpan,{data:"v",color:"green"}),o(");                   auto m = median("),t(n.ColorSpan,{data:"v",color:"green"}),o(`);  
`),t(n.ColorSpan,{data:"// runtime & memory overhead!",color:"red"}),o("         "),t(n.ColorSpan,{data:"// no copy ⇒ no overhead!",color:"green"})])]),_:1}),Y,t(n.ToggleContent,{title:"默认参数(default Parameters)"},{toggle:l(()=>[t(n.CodeBox,{link:"https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Adouble%20f%20(double%20a%2C%20double%20b%20%3D%201.5)%20%7B%0A%20%20return%20(a%20*%20b)%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20%20f(2)%3B%20%20%20%20%20%2F%2F%201%20argument%20%20%E2%86%92%203.0%0A%20%20std%3A%3Acout%20%3C%3C%20%20f(2%2C%203)%3B%20%20%2F%2F%202%20arguments%20%E2%86%92%206.0%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false"},{code:l(()=>[e("pre",null,[o("double "),$,o(" (double a, double b "),t(n.ColorSpan,{data:"= 1.5",color:"red"}),o(`) {
  return (a * b);
}
`),oo,o(`
int `),no,o(` () {
  cout <<  f(2);     `),t(n.ColorSpan,{color:"dimgray",data:"// 1 argument  → 3.0"}),o(`
  cout <<  f(2, `),t(n.ColorSpan,{data:"3",color:"red"}),o(");  "),t(n.ColorSpan,{color:"dimgray",data:"// 2 arguments → 6.0"}),o(`
}
`),to,o(`
void `),eo,o(" (int i "),t(n.ColorSpan,{color:"green",data:"= 0"}),o(");  "),t(n.RightSpan),o(`
void `),lo,o(" (int n, double x "),t(n.ColorSpan,{color:"green",data:"= 2.5"}),o(");  "),t(n.RightSpan),o(`
void `),ro,o(" (int a, int b "),t(n.ColorSpan,{color:"green",data:"= 1"}),o(", float c "),t(n.ColorSpan,{color:"green",data:"= 3.5f"}),o(");  "),t(n.RightSpan),o(`
void `),ao,o(" (int a, int b "),t(n.ColorSpan,{color:"red",data:"= 1"}),o(", int c ); "),t(n.RightSpan,{type:"wrong"}),io,o(`
❗ `),co])]),_:1})]),_:1})]),_:1})])}const Co=_(C,[["render",so],["__file","03 functions.html.vue"]]),fo=JSON.parse('{"path":"/coding/cpp/03%20functions.html","title":"c++ 教程：函数的使用","lang":"zh-CN","frontmatter":{"title":"c++ 教程：函数的使用","order":2,"category":["cpp教程"],"tag":["c++"],"description":"c++ 中函数的使用教程，函数定义、返回值等","sticky":707,"head":[["meta",{"name":"keywords","content":"c++ function"}],["meta",{"property":"og:url","content":"https://hackcpp.github.io/coding/cpp/03%20functions.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"c++ 教程：函数的使用"}],["meta",{"property":"og:description","content":"c++ 中函数的使用教程，函数定义、返回值等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-03T03:01:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:modified_time","content":"2024-10-03T03:01:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++ 教程：函数的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T03:01:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[],"git":{"createdTime":1727839516000,"updatedTime":1727924507000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":4}]},"readingTime":{"minutes":4.95,"words":1486},"filePathRelative":"coding/cpp/03 functions.md","localizedDate":"2024年10月2日","excerpt":""}');export{Co as comp,fo as data};
