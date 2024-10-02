---
title: c++ 教程：执行分支控制
order: 2
category:
  - cpp教程
tag:
  - c++
description: "c++ 中基本的控制语句，if 语句块和三元条件操作符，switch 条件操作符，while 循环和 for 循环。"  
sticky: 708
head:
  - - meta
    - name: keywords
      content: c++ Conditional Branching 条件分支 if 语句块 switch 条件操作符三元条件操作符
---

<TopToggleContent title="分支结构(Conditional Branching)">
  <template v-slot:toggle>
    <ToggleContent title="if 语句块">
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Ausing%20namespace%20std%3B%0Aint%20main()%20%7B%0A%20%20if%20(true)%20%20%7B%20cout%20%3C%3C%20%22yes%5Cn%22%3B%20%7D%20%20%2F%2F%20yes%0A%20%20if%20(false)%20%7B%20cout%20%3C%3C%20%22yes%5Cn%22%3B%20%7D%20%20%2F%2F%20%E2%80%93%0A%20%20if%20(23)%20%20%20%20%7B%20cout%20%3C%3C%20%22yes%5Cn%22%3B%20%7D%20%20%2F%2F%20yes%20(23%20%E2%86%92%20true)%0A%20%20if%20(0)%20%20%20%20%20%7B%20cout%20%3C%3C%20%22yes%5Cn%22%3B%20%7D%20%20%2F%2F%20%E2%80%93%20(0%20%E2%86%92%20false)%0A%0A%0A%20%20int%20i%20%3D%200%3B%0A%20%20%2F%2Fcin%20%3E%3E%20i%3B%0A%20%20if%20(i%20%3C%200)%20%7B%20%0A%20%20%20%20cout%20%3C%3C%20%22negative%5Cn%22%3B%20%0A%20%20%7D%20else%20if%20(i%20%3D%3D%200)%20%7B%0A%20%20%20%20cout%20%3C%3C%20%22zero%5Cn%22%3B%20%0A%20%20%7D%20else%20%7B%0A%20%20%20%20cout%20%3C%3C%20%22positive%5Cn%22%3B%20%0A%20%20%7D%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
      <template v-slot:code>
      <pre><ColorSpan data="if" color="red"/> (true)  { cout << "yes\n"; }  <ColorSpan data="// yes" color="dimgray"/>
<ColorSpan data="if" color="red"/> (false) { cout << "yes\n"; }  <ColorSpan data="// –" color="dimgray"/>
<ColorSpan data="if" color="red"/> (23)    { cout << "yes\n"; }  <ColorSpan data="// yes (23 → true)"color="dimgray"/>
<ColorSpan data="if" color="red"/> (0)     { cout << "yes\n"; }  <ColorSpan data="// – (0 → false)"color="dimgray"/>
<br/>
int i = 0;
cin >> i;
<ColorSpan data="if" color="red"/> (i < 0) { 
  cout << "negative\n"; 
} <ColorSpan data="if else" color="red"/> (i == 0) {
  cout << "zero\n"; 
} <ColorSpan data="else" color="red"/> {
  cout << "positive\n"; 
}</pre>
      </template>
      </CodeBox>
      </template>
      <template v-slot:display>
<pre><ColorSpan data="if" color="red"/> (condition1) {
  <ColorSpan data="// do this if condition1 is true" color="dimgray"/>
}
<ColorSpan data="else if" color="red"/> (condition2) {
  <ColorSpan data="// else this if condition2 is true" color="dimgray"/>
}
<ColorSpan data="else" color="red"/> {
  <ColorSpan data="// otherwise do this" color="dimgray"/>
}</pre>
<hr/>
<li>如果条件满足则执行，否则不执行</li>
<li>条件表达式为 bool 或可以转化成 bool 类型</li>
<li>从上到下依次比较每个if</li>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="三元条件操作符">
      <template v-slot:display>
      Result = Condition <ColorSpan data="?" color="red"/> If-Expression <ColorSpan data=":" color="red"/> Else-Expression
      <li>如果条件满足结果为 If-Expression 的值， 否则为 Else-Expression 的值</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20int%20i%20%3D%208%3B%0A%20%20int%20j%20%3D%20i%20%3E%2010%20%3F%201%20%3A%202%3B%20%20%20%0A%20%20int%20k%20%3D%2020%3B%0A%20%20int%20l%20%3D%20(k%20%3E%2010)%20%3F%201%20%3A%202%3B%20%0A%20%20int%20b%20%3D%20true%3B%0A%20%20double%20d%20%3D%20%20b%20%3F%202.0%20%3A%200.5%3B%20%20%20%0A%20%20double%20e%20%3D%20!b%20%3F%202.0%20%3A%200.5%3B%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
        <pre>
int i = 8;
int j = i > 10 <ColorSpan data="?" color="red"/> 1 <ColorSpan data=":" color="red"/> 2;         j: 2
<hr/> 
int k = 20;
int l = (k > 10) <ColorSpan data="?" color="red"/> 1 <ColorSpan data=":" color="red"/> 2;       l: 1
<hr/> 
int b = true;
double d =  b <ColorSpan data="?" color="red"/> 2.0 <ColorSpan data=":" color="red"/> 0.5;      d: 2.0
double e = !b <ColorSpan data="?" color="red"/> 2.0 <ColorSpan data=":" color="red"/> 0.5;      e: 0.5
</pre>
        </template>
        </CodeBox>
      </template>
    </ToggleContent>
    <br/>
    <ToggleContent title="switch 语句块">
      <template v-slot:display>
      <li>支持整数类型 (char, int, long, enums, …)</li>
<li>从上到下依次检查并执行</li>
<li>如果某个 case 满足则从这个case开始执行代码直到 break 语句</li>
      </template>
      <template v-slot:toggle>
        <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0Aint%20i%20%3D%200%3B%0A%0Aint%20m%20%3D%20i%20%25%205%3B%0Aswitch%20(m)%20%7B%0A%20%20case%200%3A%20%20%20%2F%2F%20do%20this%20if%20m%20is%200%0A%20%20%20%20break%3B%0A%20%20case%201%3A%20%20%20%2F%2F%20do%20this%20if%20m%20is%201%0A%20%20case%203%3A%20%20%20%2F%2F%20do%20this%20(also)%20if%20m%20is%201%20or%203%0A%20%20%20%20break%3B%0A%20%20default%3A%20%20%2F%2F%20do%20this%20if%20m%20is%20not%200%2C%201%20or%203%0A%20%20%20%20break%3B%0A%7D%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
        <pre>int i = 0;
int m = i % 5;
<ColorSpan data="switch" color ="red"/> (m) {
  <ColorSpan data="case" color ="red"/> 0:   <ColorSpan data="// do this if m is 0" color="dimgray"/>
    <ColorSpan data="break"/>;
  <ColorSpan data="case" color ="red"/> 1:   <ColorSpan data="// do this if m is 1"color="dimgray"/>
  <ColorSpan data="case" color ="red"/> 3:   <ColorSpan data="// do this (also) if m is 1 or 3" color="dimgray"/>
    <ColorSpan data="break"/>;
  <ColorSpan data="default" color ="red"/>:  <ColorSpan data="// do this if m is not 0, 1 or 3" color="dimgray"/>
}</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="循环结构(Loop)">
  <template v-slot:toggle>
    <ToggleContent title="for 循环">
      <template v-slot:display>
      <ColorSpan data="for" color="red"/> (initialization; condition; step) { … }
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Aint%20main()%20%7B%0A%2F%2F%20prints%200%201%202%203%204%0Afor%20(int%20i%20%3D%200%3B%20i%20%3C%205%3B%20%2B%2Bi)%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20i%20%3C%3C%20'%20'%3B%0A%7D%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
<pre><ColorSpan data="// prints 0 1 2 3 4" color="dimgray"/>
<ColorSpan data="for" color="red"/> (int i = 0; i < 5; ++i) {
  std::cout << i << ' ';
}</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="for Range">
      <template v-slot:display>
      <ColorSpan data="for" color="red"/> (variable <ColorSpan data=":" color="red"/> range) { … }
      <li>遍历容器中的元素, e.g., std::vector</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0A%23include%20%3Cvector%3E%0Aint%20main()%20%7B%20%0A%20%20std%3A%3Avector%3Cint%3E%20v%20%7B1%2C2%2C3%2C4%2C5%7D%3B%0A%20%20%2F%2F%20print%20all%20elements%20of%20vector%20to%20console%0A%20%20for%20(int%20x%20%3A%20v)%20%20%7B%20std%3A%3Acout%20%3C%3C%20x%20%3C%3C%20'%20'%3B%20%7D%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
<pre>std::vector<ColorSpan data="<"/>int<ColorSpan data=">"/> v {1,2,3,4,5};
<ColorSpan data="// print all elements of vector to console" color="dimgray"/>
<ColorSpan data="for" color="red"/> (int x <ColorSpan data=":" color="red"/> v)  { std::cout << x << ' '; }</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
    <br/>
    <ToggleContent title="while 循环">
      <template v-slot:display>
      <ColorSpan data="while" color="red"/> (condition) { … }
      <li>条件满足才会执行首次循环</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Aint%20main()%20%7B%20%0A%20%20int%20j%20%3D%205%3B%20%20%0A%20%20while%20(j%20%3C%2010)%20%7B%0A%20%20%20%20std%3A%3Acout%20%3C%3C%20j%20%3C%3C%20'%20'%3B%0A%20%20%20%20%2B%2Bj%3B%0A%20%20%7D%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
        <pre><ColorSpan data="//prints 5 6 7 8 9" color="dimgray"/>
int j = 5;  
<ColorSpan data="while" color="red"/> (j < 10) {
  std::cout << j << ' ';
  ++j;
}</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="do while 循环">
      <template v-slot:display>
      <ColorSpan data="do" color="red"/> { … } <ColorSpan data="while" color="red"/> (condition);
      <li>至少执行一次循环，条件判断前就会执行一次循环</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Aint%20main()%20%7B%20%0A%20%20int%20j%20%3D%2010%3B%0A%20%20do%20%7B%20%0A%20%20%20%20std%3A%3Acout%20%3C%3C%20j%20%3C%3C%20'%20'%3B%0A%20%20%20%20--j%3B%0A%20%20%7D%20while%20(j%20%3E%200)%3B%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
        <pre><ColorSpan data="//prints 10 9 8 … 1 executed until j ≤ 0" color="dimgray"/>
int j = 10;
<ColorSpan data="do" color="red"/> { 
  std::cout << j << ' ';
  --j;
} <ColorSpan data="while" color="red"/> (j > 0);</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<script setup>
import ToggleContent from "@ToggleContent";
import TopToggleContent from "@TopToggleContent";
import LeftRightLayout from "@LeftRightLayout";
import ColorSpan from "@ColorSpan";
import CodeBox from "@CodeBox";

</script>
