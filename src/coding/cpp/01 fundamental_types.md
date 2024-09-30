---
title: 基本数据类型
order: 2
category:
  - cpp教程
tag:
  - c++ 
---

<TopToggleContent title="变量定义(Variable Declarations)">
  <template v-slot:toggle>
    <LeftRightLayout>
      <template v-slot:left-top>
        <div>
          <span style="color:blue;">type</span> variable = <span style="color:rgb(54, 194, 54);">value</span>;
          <br/>
          <br/>
          <span style="color:blue;">type</span> variable {<span style="color:rgb(54, 194, 54);">value</span>}; C++11
          <br/>
          <br/>
        </div>
      </template>
      <template v-slot:left-bottom>
        <div >
          <span style="color:dimgray;">// declare & initialize 'i'"</span>
            <br/>
          <span style="color:blue;">int</span> i = <span style="color:rgb(54, 194, 54);">1</span>;
          <br/><br/>
          <span style="color:dimgray;">// print i's value: </span>
          <br/>
          cout << i << '\n';  
          <br/><br/>
          <span style="color:blue;">int</span> j {<span style="color:rgb(54, 194, 54);">5</span>};
          <br/>
          cout << j << '\n';
          <br/>
        </div>
      </template>
      <template v-slot:right>
       <div> <img src="https://hackingcpp.com/cpp/lang/variables_crop.svg"> </div>
      </template>
    </LeftRightLayout>
  </template>
</TopToggleContent>
<hr/>

<TopToggleContent title="数据类型(Fundamental Types)">
  <template v-slot:toggle>
    <ToggleContent title="布尔类型(Booleans)">
      <template v-slot:toggle>
<pre><span style="color:blue;">bool</span> b1 = <span style="color:rgb(54, 194, 54);">true</span>;
<span style="color:blue;">bool</span> b2 = <span style="color:rgb(54, 194, 54);">false</span>;</pre>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="字符类型(Characters)">
      <template v-slot:display>
        <li><i>最小的整数类型,通常只有1字节</i></li>
        <li><i> on x86/x86-64 values ∈ [-128,127]</i></li>
      </template>
      <template v-slot:toggle>
<pre><span style="color:blue;">char</span> c = 'A';  // character literal
<span style="color:blue;">char</span> a = 65;   // same as above</pre>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="有符号整数(Signed Integers)">
    <template v-slot:display>
        <span> n bits ⇒ values ∈ [-2(n-1), 2(n-1)-1] </span>
      </template>
      <template v-slot:toggle>
<pre><span style="color:blue;">short</span> s = 7;  
<span style="color:blue;">int</span>   i = 12347;
<span style="color:blue;">long</span>  l1 = -7856974990L;
<span style="color:blue;">long long</span>  l2 = 89565656974990LL; 
<span style="color:dimgray;">// ' digit separator C++14</span>
<span style="color:blue;">long</span> l3 = 512'232'697'499;</pre>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="无符号整数(Unsigned Integers)">
    <template v-slot:display>
      <span> n bits ⇒ values ∈ [0, 2n-1] </span>
    </template>
    <template v-slot:toggle>
<pre><span style="color:blue;">unsigned</span> u1 = 12347U; 
<span style="color:blue;">unsigned long </span>u2 = 123478912345UL;  
<span style="color:blue;">unsigned long long</span> u3 = 123478912345ULL;  
<span style="color:dimgray;">// non-decimal literals</span>
<span style="color:blue;">unsigned </span>x = 0x4A;        <span style="color:dimgray;">  // hexadecimal</span>
<span style="color:blue;">unsigned </span> b = 0b10110101;  <span style="color:dimgray;">  // binary C++14</span></pre>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="浮点类型">
      <template v-slot:display>
        <li><i>float:  IEEE 754 32 bit</i> </li>
        <li><i>double: IEEE 754 64 bit</i></li>
        <li><i>long double: 80-bit on x86/x86-64</i></li>
      </template>
      <template v-slot:toggle>
<pre><span style="color:blue;">float </span>      f  = 1.88f;
<span style="color:blue;">double  </span>    d1 = 3.5e38;
<span style="color:blue;">long double </span> d2 = 3.5e38L; C++11
<span style="color:dimgray;">// ' digit separator C++14</span>
<span style="color:blue;">double </span> d3 = 512'232'697'499.052;</pre>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<hr/>

<TopToggleContent title="数字表示法(Number Representations)">
  <template v-slot:toggle>
    <img src="https://hackingcpp.com/cs/number_representations_crop.png">
  </template>
</TopToggleContent>
<hr/>

<TopToggleContent title="类型的内存大小(Memory Sizes of Types)">
  <template v-slot:toggle>
    <LeftRightLayout>
        <template v-slot:left-top>
        所有类型的大小都是 sizeof(char) 的整数倍
        </template>
        <template v-slot:left-bottom>
<pre>cout << sizeof(char);   // 1
cout << sizeof(bool);   // 1
cout << sizeof(short);  // 2
cout << sizeof(int);    // 4
cout << sizeof(long);   // 8
          <br/>
<span style="color:dimgray;">// number of bits in a char</span>
cout << CHAR_BIT;       // 8
<span style="color:orange;">char   c = 'A';</span>
<span style="color:red;">bool   b = true;</span>
<span style="color:blue;">int    i = 1234;</span>
<span style="color:purple;">long   l = 12;</span>
<span style="color:green;">short  s = 8;</span></pre>
        </template>
        <template v-slot:right>
        <img src="https://hackingcpp.com/cpp/lang/fundamental_type_sizes.svg">
        </template>
    </LeftRightLayout>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="数值限制(std::numeric_limits)">
  <template v-slot:toggle>
  <img src="https://hackingcpp.com/cpp/std/numeric_limits.png">
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="算数运算(Arithmetic Operations )">
  <template v-slot:toggle>
    <ToggleContent title="Operators">
      <template v-slot:display>
        <li><i> a <span style="color:red;">⊕</span> b: 返回 a ⊕ b 的运算结果 </i></li>
        <li><i> a <span style="color:blue;">⊕=</span> b: a ⊕ b 的运算结果赋值给 a</i></li>
      </template>
      <template v-slot:toggle>
<pre>int a = 4;          设置变量 a 值为 4
int b = 3;          设置变量 b 值为 3
<br/>
a = a <span style="color:red;">+</span> b;          a: 7    add
a <span style="color:red;">+=</span> b;             a: 10
a = a <span style="color:red;">-</span> b;          a: 7    subtract
a <span style="color:blue;">-=</span> b;             a: 4
a = a <span style="color:red;">*</span> b;          a: 12   multiply
a <span style="color:blue;">*=</span> b;             a: 36
a = a <span style="color:red;">/</span> b;          a: 12   divide
a <span style="color:blue;">/=</span> b;             a: 4
a = a <span style="color:red;">%</span> b;          a: 1    remainder of division (modulo)</pre> 
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="自增/自减(Increment/Decrement )">
      <template v-slot:display>
        <li><i>变量值自增/自减1</i></li>
        <li><i>前置表达式 <span style="color:red;">++</span>x / <span style="color:red;">--</span>x 返回自增/自减后的值</i></li>
        <li><i>后置表达式 x<span style="color:blue;">++</span> / x<span style="color:blue;">--</span> 返回自增/自减前的值</i></li>
      </template>
      <template v-slot:toggle>
<pre>int a = 4;    a: 4           
int b = 3;            b: 3
<br/>
b = a<span style="color:blue;">++</span>;      a: 5    b: 4
b = <span style="color:red;">++</span>a;      a: 6    b: 6
b = <span style="color:red;">--</span>a;      a: 5    b: 5
b = a<span style="color:blue;">--</span>;      a: 4    b: 5</pre>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="比较运算(Comparisons)">
  <template v-slot:toggle>
    <ToggleContent title="2路比较(2-way Comparisons)">
      <template v-slot:display>
      比较结果为 <ColorSpan data="true"/> 或者 <ColorSpan data="false"/>
      </template>
      <template v-slot:toggle>
        <div><pre>int x = 10;                       
int y = 5;                 result  operator
<br/>
bool b1 =  x <ColorSpan data="==" color="red"/> 5;         false   equals     
bool b2 = (x <ColorSpan data="!=" color="red"/> 6);        true    not equal       
bool b3 = x <ColorSpan data=">" color="red"/> y;           true    greater     
bool b4 = x <ColorSpan data="<" color="red"/> y;           false   smaller     
bool b5 = y <ColorSpan data=">=" color="red"/> 5;          true    greater/equal    
bool b6 = x <ColorSpan data="<=" color="red"/> 30;         true    smaller/equal</pre></div>
      </template>
    </ToggleContent> 
    <hr/>  
    <ToggleContent title="3路比较(3-Way Comparisons)">
      <template v-slot:display>
      比较 2 个对象的相对顺序
      </template>
      <template v-slot:toggle>
        <div>
<pre>
(a <ColorSpan data="<==>" color="red"/> b) < 0	if a < b 
(a <ColorSpan data="<==>" color="red"/> b) > 0	if a > b  
(a <ColorSpan data="<==>" color="red"/> b) == 0	if a and b are equal/equivalent  
</pre>
        </div>
      </template>
    </ToggleContent>  
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="布尔逻辑(Boolean Logic)">
  <template v-slot:toggle>
    <ToggleContent title="操作符(Operators)">
      <template v-slot:toggle>
      <pre>bool a = <span style="color:blue;">true</span>;
bool b = <span style="color:blue;">false</span>;
<br>
bool c = a <span style="color:red;">&& </span>b;      <span style="color:dimgray;">// false    logical AND</span>
bool d = a <span style="color:red;">||</span> b;      <span style="color:dimgray;">// true     logical OR</span>
bool e = <span style="color:red;">!</span>a;          <span style="color:dimgray;">// false    logical NOT</span>
<br>
<span style="color:dimgray;">Alternative Spellings:</span>
bool x = a <span style="color:red;">and</span> b;     <span style="color:dimgray;">// false</span>
bool y = a <span style="color:red;">or</span> b;     <span style="color:dimgray;"> // true</span>
bool z = <span style="color:red;">not</span> a;       <span style="color:dimgray;">// false</span></pre>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="转化成bool(Conversion to bool)">
      <template v-slot:display>
        <li><i><span style="color:blue;">0</span> is always false;</i></li>
        <li><i>everything else is <span style="color:blue;">true</span>;</i></li>
      </template>
      <template v-slot:toggle>
<pre>bool f = 12;   <span style="color:dimgray;">// true   (int → bool)</span>
bool g = 0;    <span style="color:dimgray;">// false  (int → bool)</span>
bool h = 1.2;  <span style="color:dimgray;">// true   (double → bool)</span></pre>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>
 
<TopToggleContent title="位运算(Bitwise Operations)">
  <template v-slot:toggle>
    <ToggleContent title="位逻辑运算(Bitwise Logic)">
      <template v-slot:display>
      <li><i>a <ColorSpan data="&" color="red"/> b	bitwise AND</i></li>
      <li><i>a <ColorSpan data="|" color="red"/> b	bitwise OR</i></li>
      <li><i>a <ColorSpan data="^" color="red"/> b	bitwise XOR</i></li>
      <li><i><ColorSpan data="~" color="red"/>a	bitwise NOT (one's complement)</i></li>
      </template>
      <template v-slot:toggle>
       <div>
<pre>                                      memory bits:
<br/>
std::uint8_t a = 6;                   0000 0110
std::uint8_t b = 0b00001011;          0000 1011
<br/>
std::uint8_t c1 = (a <ColorSpan data="&" color="red"/> b);  // 2      0000 0010
std::uint8_t c2 = (a <ColorSpan data="|" color="red"/> b);  // 15     0000 1111
std::uint8_t c3 = (a <ColorSpan data="^" color="red"/> b);  // 13     0000 1101
std::uint8_t c4 = <ColorSpan data="~" color="red"/>a;       // 249    1111 1001
std::uint8_t c5 = <ColorSpan data="~" color="red"/>b;       // 244    1111 0100
<br/>
// test if int is even/odd:           result:
bool a_odd  = a & 1;                  0 ⇒ false
bool a_even = !(a & 1);               1 ⇒ true</pre>
       </div>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="位移运算(Bitwise Shifts)">
      <template v-slot:display>
      <li><i>x <ColorSpan data="<<"/> n: 返回变量x的比特(bits)向左移动n位后的值</i></li>
      <li><i>x <ColorSpan data=">>"/> n: 返回变量x的比特(bits)向右移动n位后的值</i></li>
      <li><i>x <ColorSpan data="<<=" color="red"/> n:	x的比特(bits)向左移动n位后的值赋值给x</i></li>
      <li><i>x <ColorSpan data=">>=" color="red"/> n:	x比特(bit)向右移动n位后的值赋值给x</i></li>
      </template>
      <template v-slot:toggle>
        <div>
<pre>                                        memory bits:
std::uint8_t a = 1;                     0000 0001
<br/>
a <ColorSpan data="<<=" color="red"/> 6;  // 64                         0100 0000
a <ColorSpan data=">>=" color="red"/> 4;  // 4                          0000 0100
<br/>
std::uint8_t b1 = (1 <ColorSpan data="<<"/> 1);  // 2       0000 0010
std::uint8_t b2 = (1 <ColorSpan data="<<"/> 2);  // 4       0000 0100
std::uint8_t b3 = (1 <ColorSpan data="<<"/> 4);  // 16      0001 0000</pre>
        </div>
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

</script>
