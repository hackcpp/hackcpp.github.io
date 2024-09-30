import{T as g,a as b,L as _}from"./LeftRightLayout-M7wjPOc3.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as p,t as y,n as h,d as t,w as e,a as l,b as o}from"./app-_gqPeUcd.js";const m={name:"ColorSpan",props:{data:{type:String,default:""},color:{type:String,default:"blue"}},computed:{style(){return{color:this.color}}}};function C(s,r,a,n,u,i){return d(),p("span",{style:h(i.style)},y(a.data),5)}const f=c(m,[["render",C],["__file","ColorSpan.vue"]]),T={__name:"01 fundamental_types.html",setup(s,{expose:r}){r();const a={get ToggleContent(){return g},get TopToggleContent(){return b},get LeftRightLayout(){return _},get ColorSpan(){return f}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},S=l("div",null,[l("span",{style:{color:"blue"}},"type"),o(" variable = "),l("span",{style:{color:"rgb(54, 194, 54)"}},"value"),o("; "),l("br"),l("br"),l("span",{style:{color:"blue"}},"type"),o(" variable {"),l("span",{style:{color:"rgb(54, 194, 54)"}},"value"),o("}; C++11 "),l("br"),l("br")],-1),x=l("div",null,[l("span",{style:{color:"dimgray"}},`// declare & initialize 'i'"`),l("br"),l("span",{style:{color:"blue"}},"int"),o(" i = "),l("span",{style:{color:"rgb(54, 194, 54)"}},"1"),o("; "),l("br"),l("br"),l("span",{style:{color:"dimgray"}},"// print i's value: "),l("br"),o(" cout << i << '\\n'; "),l("br"),l("br"),l("span",{style:{color:"blue"}},"int"),o(" j {"),l("span",{style:{color:"rgb(54, 194, 54)"}},"5"),o("}; "),l("br"),o(" cout << j << '\\n'; "),l("br")],-1),v=l("div",null,[l("img",{src:"https://hackingcpp.com/cpp/lang/variables_crop.svg"})],-1),L=l("hr",null,null,-1),z=l("pre",null,[l("span",{style:{color:"blue"}},"bool"),o(" b1 = "),l("span",{style:{color:"rgb(54, 194, 54)"}},"true"),o(`;
`),l("span",{style:{color:"blue"}},"bool"),o(" b2 = "),l("span",{style:{color:"rgb(54, 194, 54)"}},"false"),o(";")],-1),w=l("hr",null,null,-1),N=l("li",null,[l("i",null,"最小的整数类型,通常只有1字节")],-1),O=l("li",null,[l("i",null," on x86/x86-64 values ∈ [-128,127]")],-1),k=l("pre",null,[l("span",{style:{color:"blue"}},"char"),o(` c = 'A';  // character literal
`),l("span",{style:{color:"blue"}},"char"),o(" a = 65;   // same as above")],-1),R=l("hr",null,null,-1),A=l("span",null," n bits ⇒ values ∈ [-2(n-1), 2(n-1)-1] ",-1),B=l("pre",null,[l("span",{style:{color:"blue"}},"short"),o(` s = 7;  
`),l("span",{style:{color:"blue"}},"int"),o(`   i = 12347;
`),l("span",{style:{color:"blue"}},"long"),o(`  l1 = -7856974990L;
`),l("span",{style:{color:"blue"}},"long long"),o(`  l2 = 89565656974990LL; 
`),l("span",{style:{color:"dimgray"}},"// ' digit separator C++14"),o(`
`),l("span",{style:{color:"blue"}},"long"),o(" l3 = 512'232'697'499;")],-1),E=l("hr",null,null,-1),q=l("span",null," n bits ⇒ values ∈ [0, 2n-1] ",-1),D=l("pre",null,[l("span",{style:{color:"blue"}},"unsigned"),o(` u1 = 12347U; 
`),l("span",{style:{color:"blue"}},"unsigned long "),o(`u2 = 123478912345UL;  
`),l("span",{style:{color:"blue"}},"unsigned long long"),o(` u3 = 123478912345ULL;  
`),l("span",{style:{color:"dimgray"}},"// non-decimal literals"),o(`
`),l("span",{style:{color:"blue"}},"unsigned "),o("x = 0x4A;        "),l("span",{style:{color:"dimgray"}},"  // hexadecimal"),o(`
`),l("span",{style:{color:"blue"}},"unsigned "),o(" b = 0b10110101;  "),l("span",{style:{color:"dimgray"}},"  // binary C++14")],-1),I=l("hr",null,null,-1),j=l("li",null,[l("i",null,"float: IEEE 754 32 bit")],-1),M=l("li",null,[l("i",null,"double: IEEE 754 64 bit")],-1),U=l("li",null,[l("i",null,"long double: 80-bit on x86/x86-64")],-1),V=l("pre",null,[l("span",{style:{color:"blue"}},"float "),o(`      f  = 1.88f;
`),l("span",{style:{color:"blue"}},"double  "),o(`    d1 = 3.5e38;
`),l("span",{style:{color:"blue"}},"long double "),o(` d2 = 3.5e38L; C++11
`),l("span",{style:{color:"dimgray"}},"// ' digit separator C++14"),o(`
`),l("span",{style:{color:"blue"}},"double "),o(" d3 = 512'232'697'499.052;")],-1),H=l("hr",null,null,-1),P=l("img",{src:"https://hackingcpp.com/cs/number_representations_crop.png"},null,-1),Z=l("hr",null,null,-1),F=l("pre",null,[o(`cout << sizeof(char);   // 1
cout << sizeof(bool);   // 1
cout << sizeof(short);  // 2
cout << sizeof(int);    // 4
cout << sizeof(long);   // 8
          `),l("br"),o(`
`),l("span",{style:{color:"dimgray"}},"// number of bits in a char"),o(`
cout << CHAR_BIT;       // 8
`),l("span",{style:{color:"orange"}},"char   c = 'A';"),o(`
`),l("span",{style:{color:"red"}},"bool   b = true;"),o(`
`),l("span",{style:{color:"blue"}},"int    i = 1234;"),o(`
`),l("span",{style:{color:"purple"}},"long   l = 12;"),o(`
`),l("span",{style:{color:"green"}},"short  s = 8;")],-1),J=l("img",{src:"https://hackingcpp.com/cpp/lang/fundamental_type_sizes.svg"},null,-1),W=l("br",null,null,-1),X=l("img",{src:"https://hackingcpp.com/cpp/std/numeric_limits.png"},null,-1),G=l("br",null,null,-1),K=l("li",null,[l("i",null,[o(" a "),l("span",{style:{color:"red"}},"⊕"),o(" b: 返回 a ⊕ b 的运算结果 ")])],-1),Q=l("li",null,[l("i",null,[o(" a "),l("span",{style:{color:"blue"}},"⊕="),o(" b: a ⊕ b 的运算结果赋值给 a")])],-1),Y=l("pre",null,[o(`int a = 4;          设置变量 a 值为 4
int b = 3;          设置变量 b 值为 3
`),l("br"),o(`
a = a `),l("span",{style:{color:"red"}},"+"),o(` b;          a: 7    add
a `),l("span",{style:{color:"red"}},"+="),o(` b;             a: 10
a = a `),l("span",{style:{color:"red"}},"-"),o(` b;          a: 7    subtract
a `),l("span",{style:{color:"blue"}},"-="),o(` b;             a: 4
a = a `),l("span",{style:{color:"red"}},"*"),o(` b;          a: 12   multiply
a `),l("span",{style:{color:"blue"}},"*="),o(` b;             a: 36
a = a `),l("span",{style:{color:"red"}},"/"),o(` b;          a: 12   divide
a `),l("span",{style:{color:"blue"}},"/="),o(` b;             a: 4
a = a `),l("span",{style:{color:"red"}},"%"),o(" b;          a: 1    remainder of division (modulo)")],-1),$=l("hr",null,null,-1),ll=l("li",null,[l("i",null,"变量值自增/自减1")],-1),ol=l("li",null,[l("i",null,[o("前置表达式 "),l("span",{style:{color:"red"}},"++"),o("x / "),l("span",{style:{color:"red"}},"--"),o("x 返回自增/自减后的值")])],-1),nl=l("li",null,[l("i",null,[o("后置表达式 x"),l("span",{style:{color:"blue"}},"++"),o(" / x"),l("span",{style:{color:"blue"}},"--"),o(" 返回自增/自减前的值")])],-1),tl=l("pre",null,[o(`int a = 4;    a: 4           
int b = 3;            b: 3
`),l("br"),o(`
b = a`),l("span",{style:{color:"blue"}},"++"),o(`;      a: 5    b: 4
b = `),l("span",{style:{color:"red"}},"++"),o(`a;      a: 6    b: 6
b = `),l("span",{style:{color:"red"}},"--"),o(`a;      a: 5    b: 5
b = a`),l("span",{style:{color:"blue"}},"--"),o(";      a: 4    b: 5")],-1),el=l("br",null,null,-1),al=l("br",null,null,-1),rl=l("hr",null,null,-1),sl=l("br",null,null,-1),il=l("pre",null,[o("bool a = "),l("span",{style:{color:"blue"}},"true"),o(`;
bool b = `),l("span",{style:{color:"blue"}},"false"),o(`;
`),l("br"),o(`
bool c = a `),l("span",{style:{color:"red"}},"&& "),o("b;      "),l("span",{style:{color:"dimgray"}},"// false    logical AND"),o(`
bool d = a `),l("span",{style:{color:"red"}},"||"),o(" b;      "),l("span",{style:{color:"dimgray"}},"// true     logical OR"),o(`
bool e = `),l("span",{style:{color:"red"}},"!"),o("a;          "),l("span",{style:{color:"dimgray"}},"// false    logical NOT"),o(`
`),l("br"),o(`
`),l("span",{style:{color:"dimgray"}},"Alternative Spellings:"),o(`
bool x = a `),l("span",{style:{color:"red"}},"and"),o(" b;     "),l("span",{style:{color:"dimgray"}},"// false"),o(`
bool y = a `),l("span",{style:{color:"red"}},"or"),o(" b;     "),l("span",{style:{color:"dimgray"}}," // true"),o(`
bool z = `),l("span",{style:{color:"red"}},"not"),o(" a;       "),l("span",{style:{color:"dimgray"}},"// false")],-1),cl=l("hr",null,null,-1),dl=l("li",null,[l("i",null,[l("span",{style:{color:"blue"}},"0"),o(" is always false;")])],-1),pl=l("li",null,[l("i",null,[o("everything else is "),l("span",{style:{color:"blue"}},"true"),o(";")])],-1),ul=l("pre",null,[o("bool f = 12;   "),l("span",{style:{color:"dimgray"}},"// true   (int → bool)"),o(`
bool g = 0;    `),l("span",{style:{color:"dimgray"}},"// false  (int → bool)"),o(`
bool h = 1.2;  `),l("span",{style:{color:"dimgray"}},"// true   (double → bool)")],-1),gl=l("br",null,null,-1),bl=l("br",null,null,-1),_l=l("br",null,null,-1),yl=l("br",null,null,-1),hl=l("hr",null,null,-1),ml=l("br",null,null,-1),Cl=l("br",null,null,-1),fl=l("br",null,null,-1);function Tl(s,r,a,n,u,i){return d(),p("div",null,[t(n.TopToggleContent,{title:"变量定义(Variable Declarations)"},{toggle:e(()=>[t(n.LeftRightLayout,null,{"left-top":e(()=>[S]),"left-bottom":e(()=>[x]),right:e(()=>[v]),_:1})]),_:1}),L,t(n.TopToggleContent,{title:"数据类型(Fundamental Types)"},{toggle:e(()=>[t(n.ToggleContent,{title:"布尔类型(Booleans)"},{toggle:e(()=>[z]),_:1}),w,t(n.ToggleContent,{title:"字符类型(Characters)"},{display:e(()=>[N,O]),toggle:e(()=>[k]),_:1}),R,t(n.ToggleContent,{title:"有符号整数(Signed Integers)"},{display:e(()=>[A]),toggle:e(()=>[B]),_:1}),E,t(n.ToggleContent,{title:"无符号整数(Unsigned Integers)"},{display:e(()=>[q]),toggle:e(()=>[D]),_:1}),I,t(n.ToggleContent,{title:"浮点类型"},{display:e(()=>[j,M,U]),toggle:e(()=>[V]),_:1})]),_:1}),H,t(n.TopToggleContent,{title:"数字表示法(Number Representations)"},{toggle:e(()=>[P]),_:1}),Z,t(n.TopToggleContent,{title:"类型的内存大小(Memory Sizes of Types)"},{toggle:e(()=>[t(n.LeftRightLayout,null,{"left-top":e(()=>[o(" 所有类型的大小都是 sizeof(char) 的整数倍 ")]),"left-bottom":e(()=>[F]),right:e(()=>[J]),_:1})]),_:1}),W,t(n.TopToggleContent,{title:"数值限制(std::numeric_limits)"},{toggle:e(()=>[X]),_:1}),G,t(n.TopToggleContent,{title:"算数运算(Arithmetic Operations )"},{toggle:e(()=>[t(n.ToggleContent,{title:"Operators"},{display:e(()=>[K,Q]),toggle:e(()=>[Y]),_:1}),$,t(n.ToggleContent,{title:"自增/自减(Increment/Decrement )"},{display:e(()=>[ll,ol,nl]),toggle:e(()=>[tl]),_:1})]),_:1}),el,t(n.TopToggleContent,{title:"比较运算(Comparisons)"},{toggle:e(()=>[t(n.ToggleContent,{title:"2路比较(2-way Comparisons)"},{display:e(()=>[o(" 比较结果为 "),t(n.ColorSpan,{data:"true"}),o(" 或者 "),t(n.ColorSpan,{data:"false"})]),toggle:e(()=>[l("div",null,[l("pre",null,[o(`int x = 10;                       
int y = 5;                 result  operator
`),al,o(`
bool b1 =  x `),t(n.ColorSpan,{data:"==",color:"red"}),o(` 5;         false   equals     
bool b2 = (x `),t(n.ColorSpan,{data:"!=",color:"red"}),o(` 6);        true    not equal       
bool b3 = x `),t(n.ColorSpan,{data:">",color:"red"}),o(` y;           true    greater     
bool b4 = x `),t(n.ColorSpan,{data:"<",color:"red"}),o(` y;           false   smaller     
bool b5 = y `),t(n.ColorSpan,{data:">=",color:"red"}),o(` 5;          true    greater/equal    
bool b6 = x `),t(n.ColorSpan,{data:"<=",color:"red"}),o(" 30;         true    smaller/equal")])])]),_:1}),rl,t(n.ToggleContent,{title:"3路比较(3-Way Comparisons)"},{display:e(()=>[o(" 比较 2 个对象的相对顺序 ")]),toggle:e(()=>[l("div",null,[l("pre",null,[o("(a "),t(n.ColorSpan,{data:"<==>",color:"red"}),o(` b) < 0	if a < b 
(a `),t(n.ColorSpan,{data:"<==>",color:"red"}),o(` b) > 0	if a > b  
(a `),t(n.ColorSpan,{data:"<==>",color:"red"}),o(` b) == 0	if a and b are equal/equivalent  
`)])])]),_:1})]),_:1}),sl,t(n.TopToggleContent,{title:"布尔逻辑(Boolean Logic)"},{toggle:e(()=>[t(n.ToggleContent,{title:"操作符(Operators)"},{toggle:e(()=>[il]),_:1}),cl,t(n.ToggleContent,{title:"转化成bool(Conversion to bool)"},{display:e(()=>[dl,pl]),toggle:e(()=>[ul]),_:1})]),_:1}),gl,t(n.TopToggleContent,{title:"位运算(Bitwise Operations)"},{toggle:e(()=>[t(n.ToggleContent,{title:"位逻辑运算(Bitwise Logic)"},{display:e(()=>[l("li",null,[l("i",null,[o("a "),t(n.ColorSpan,{data:"&",color:"red"}),o(" b bitwise AND")])]),l("li",null,[l("i",null,[o("a "),t(n.ColorSpan,{data:"|",color:"red"}),o(" b bitwise OR")])]),l("li",null,[l("i",null,[o("a "),t(n.ColorSpan,{data:"^",color:"red"}),o(" b bitwise XOR")])]),l("li",null,[l("i",null,[t(n.ColorSpan,{data:"~",color:"red"}),o("a bitwise NOT (one's complement)")])])]),toggle:e(()=>[l("div",null,[l("pre",null,[o(`                                      memory bits:
`),bl,o(`
std::uint8_t a = 6;                   0000 0110
std::uint8_t b = 0b00001011;          0000 1011
`),_l,o(`
std::uint8_t c1 = (a `),t(n.ColorSpan,{data:"&",color:"red"}),o(` b);  // 2      0000 0010
std::uint8_t c2 = (a `),t(n.ColorSpan,{data:"|",color:"red"}),o(` b);  // 15     0000 1111
std::uint8_t c3 = (a `),t(n.ColorSpan,{data:"^",color:"red"}),o(` b);  // 13     0000 1101
std::uint8_t c4 = `),t(n.ColorSpan,{data:"~",color:"red"}),o(`a;       // 249    1111 1001
std::uint8_t c5 = `),t(n.ColorSpan,{data:"~",color:"red"}),o(`b;       // 244    1111 0100
`),yl,o(`
// test if int is even/odd:           result:
bool a_odd  = a & 1;                  0 ⇒ false
bool a_even = !(a & 1);               1 ⇒ true`)])])]),_:1}),hl,t(n.ToggleContent,{title:"位移运算(Bitwise Shifts)"},{display:e(()=>[l("li",null,[l("i",null,[o("x "),t(n.ColorSpan,{data:"<<"}),o(" n: 返回变量x的比特(bits)向左移动n位后的值")])]),l("li",null,[l("i",null,[o("x "),t(n.ColorSpan,{data:">>"}),o(" n: 返回变量x的比特(bits)向右移动n位后的值")])]),l("li",null,[l("i",null,[o("x "),t(n.ColorSpan,{data:"<<=",color:"red"}),o(" n: x的比特(bits)向左移动n位后的值赋值给x")])]),l("li",null,[l("i",null,[o("x "),t(n.ColorSpan,{data:">>=",color:"red"}),o(" n: x比特(bit)向右移动n位后的值赋值给x")])])]),toggle:e(()=>[l("div",null,[l("pre",null,[o(`                                        memory bits:
std::uint8_t a = 1;                     0000 0001
`),ml,o(`
a `),t(n.ColorSpan,{data:"<<=",color:"red"}),o(` 6;  // 64                         0100 0000
a `),t(n.ColorSpan,{data:">>=",color:"red"}),o(` 4;  // 4                          0000 0100
`),Cl,o(`
std::uint8_t b1 = (1 `),t(n.ColorSpan,{data:"<<"}),o(` 1);  // 2       0000 0010
std::uint8_t b2 = (1 `),t(n.ColorSpan,{data:"<<"}),o(` 2);  // 4       0000 0100
std::uint8_t b3 = (1 `),t(n.ColorSpan,{data:"<<"}),o(" 4);  // 16      0001 0000")])])]),_:1})]),_:1}),fl])}const Ll=c(T,[["render",Tl],["__file","01 fundamental_types.html.vue"]]),zl=JSON.parse('{"path":"/coding/cpp/01%20fundamental_types.html","title":"基本数据类型","lang":"zh-CN","frontmatter":{"title":"基本数据类型","order":2,"category":["cpp教程"],"tag":["c++"],"head":[["meta",{"property":"og:url","content":"https://hackcpp.github.io/coding/cpp/01%20fundamental_types.html"}],["meta",{"property":"og:site_name","content":"程序员的白粥馆"}],["meta",{"property":"og:title","content":"基本数据类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T12:31:24.000Z"}],["meta",{"property":"article:author","content":"Mr.Hackcpp"}],["meta",{"property":"article:tag","content":"c++"}],["meta",{"property":"article:modified_time","content":"2024-09-30T12:31:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T12:31:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hackcpp\\",\\"url\\":\\"/portfolio.html\\"}]}"]]},"headers":[],"git":{"createdTime":1727699484000,"updatedTime":1727699484000,"contributors":[{"name":"hackcpp","email":"liuheng2015@gmail.com","commits":1}]},"readingTime":{"minutes":6.56,"words":1969},"filePathRelative":"coding/cpp/01 fundamental_types.md","localizedDate":"2024年9月30日","excerpt":""}');export{Ll as comp,zl as data};
