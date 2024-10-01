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

<TopToggleContent title="基本数据类型(Fundamental Types)">
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
        <li>最小的整数类型,通常只有1字节</li>
        <li> on x86/x86-64 values ∈ [-128,127]</li>
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
        <li>float:  IEEE 754 32 bit</li>
        <li>double: IEEE 754 64 bit</li>
        <li>long double: 80-bit on x86/x86-64</li>
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
        <li>所有类型的大小都是 sizeof(char) 的整数倍</li>
        <li> char 类型的大小为1 byte</li>
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
        <li>a <span style="color:red;">⊕</span> b: 返回 a ⊕ b 的运算结果 </li>
        <li>a <span style="color:blue;">⊕=</span> b: a ⊕ b 的运算结果赋值给 a</li>
      </template>
      <template v-slot:toggle>
        <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20int%20a%20%3D%204%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20int%20b%20%3D%203%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%2B%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%2B%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20-%20b%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20-%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20*%20b%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20*%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%2F%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%2F%3D%20b%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20a%20%3D%20a%20%25%20b%3B%20%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
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
        </CodeBox>  
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="自增/自减(Increment/Decrement )">
      <template v-slot:display>
        <li>变量值自增/自减1</li>
        <li>前置自增/自减 <span style="color:red;">++</span>x / <span style="color:red;">--</span>x 返回自增/自减后的值</li>
        <li>后置自增/自减 x<span style="color:blue;">++</span> / x<span style="color:blue;">--</span> 返回自增/自减前的值</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20int%20a%20%3D%204%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20int%20b%20%3D%203%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%0A%20%20%0A%20%20b%20%3D%20a%2B%2B%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20%2B%2Ba%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20--a%3B%20%20%20%20%20%20%20%0A%20%20b%20%3D%20a--%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
      <template v-slot:code>
<pre>int a = 4;    a: 4           
int b = 3;            b: 3
<br/>
b = a<span style="color:blue;">++</span>;      a: 5    b: 4
b = <span style="color:red;">++</span>a;      a: 6    b: 6
b = <span style="color:red;">--</span>a;      a: 5    b: 5
b = a<span style="color:blue;">--</span>;      a: 4    b: 5</pre>
      </template>
      </CodeBox>
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
        <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0Aint%20x%20%3D%2010%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Aint%20y%20%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b1%20%3D%20%20x%20%3D%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b2%20%3D%20(x%20!%3D%206)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b3%20%3D%20x%20%3E%20y%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b4%20%3D%20x%20%3C%20y%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b5%20%3D%20y%20%3E%3D%205%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0Abool%20b6%20%3D%20x%20%3C%3D%2030%3B%0Areturn%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
      <pre>int x = 10;                       
int y = 5;                 result  operator
<br/>
bool b1 =  x <ColorSpan data="==" color="red"/> 5;         false   equals     
bool b2 = (x <ColorSpan data="!=" color="red"/> 6);        true    not equal       
bool b3 = x <ColorSpan data=">" color="red"/> y;           true    greater     
bool b4 = x <ColorSpan data="<" color="red"/> y;           false   smaller     
bool b5 = y <ColorSpan data=">=" color="red"/> 5;          true    greater/equal    
bool b6 = x <ColorSpan data="<=" color="red"/> 30;         true    smaller/equal</pre> 
      </template>
      </CodeBox>
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
      <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20bool%20a%20%3D%20true%3B%0A%20%20bool%20b%20%3D%20false%3B%0A%0A%0A%20%20bool%20c%20%3D%20a%20%26%26%20b%3B%0A%20%20bool%20d%20%3D%20a%20%7C%7C%20b%3B%20%20%20%20%20%0A%20%20bool%20e%20%3D%20!a%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
      <template v-slot:code>
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
      </CodeBox>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="转化成bool(Conversion to bool)">
      <template v-slot:display>
        <li><span style="color:blue;">0</span> 为假 <span style="color:blue;">false</span>;</li>
        <li>其他的为真 <span style="color:blue;">true</span>;</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=int%20main()%20%7B%0A%20%20bool%20f%20%3D%2012%3B%20%20%20%2F%2F%20true%20%20%20(int%20%E2%86%92%20bool)%0A%20%20bool%20g%20%3D%200%3B%20%20%20%20%2F%2F%20false%20%20(int%20%E2%86%92%20bool)%0A%20%20bool%20h%20%3D%201.2%3B%20%20%2F%2F%20true%20%20%20(double%20%E2%86%92%20bool)%20%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
      <template v-slot:code>
<pre>bool f = 12;   <span style="color:dimgray;">// true   (int → bool)</span>
bool g = 0;    <span style="color:dimgray;">// false  (int → bool)</span>
bool h = 1.2;  <span style="color:dimgray;">// true   (double → bool)</span></pre>
      </template>
      </CodeBox>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>
 
<TopToggleContent title="位运算(Bitwise Operations)">
  <template v-slot:toggle>
    <ToggleContent title="位逻辑运算(Bitwise Logic)">
      <template v-slot:display>
      <li>a <ColorSpan data="&" color="red"/> b	bitwise AND</li>
      <li>a <ColorSpan data="|" color="red"/> b	bitwise OR</li>
      <li>a <ColorSpan data="^" color="red"/> b	bitwise XOR</li>
      <li><ColorSpan data="~" color="red"/>a	bitwise NOT (one's complement)</li>
      </template>
      <template v-slot:toggle>
      <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ccstdint%3E%0Aint%20main()%20%7B%0A%20%20std%3A%3Auint8_t%20a%20%3D%206%3B%20%20%0A%20%20std%3A%3Auint8_t%20b%20%3D%200b00001011%3B%0A%20%20std%3A%3Auint8_t%20c1%20%3D%20(a%20%26%20b)%3B%20%20%2F%2F%202%0A%20%20std%3A%3Auint8_t%20c2%20%3D%20(a%20%7C%20b)%3B%20%20%2F%2F%2015%0A%20%20std%3A%3Auint8_t%20c3%20%3D%20(a%20%5E%20b)%3B%20%20%2F%2F%2013%0A%20%20std%3A%3Auint8_t%20c4%20%3D%20~a%3B%20%20%20%20%20%20%20%2F%2F%20249%0A%20%20std%3A%3Auint8_t%20c5%20%3D%20~b%3B%20%20%20%20%20%20%20%2F%2F%20244%0A%20%20%2F%2F%20test%20if%20int%20is%20even%2Fodd%3A%0A%20%20bool%20a_odd%20%20%3D%20a%20%26%201%3B%0A%20%20bool%20a_even%20%3D%20!(a%20%26%201)%3B%20%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
      <template v-slot:code>
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
       </template>
       </CodeBox>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="位移运算(Bitwise Shifts)">
      <template v-slot:display>
      <li>x <ColorSpan data="<<"/> n: 返回变量x的比特(bits)向左移动n位后的值</li>
      <li>x <ColorSpan data=">>"/> n: 返回变量x的比特(bits)向右移动n位后的值</li>
      <li>x <ColorSpan data="<<=" color="red"/> n:	x的比特(bits)向左移动n位后的值赋值给x</li>
      <li>x <ColorSpan data=">>=" color="red"/> n:	x比特(bit)向右移动n位后的值赋值给x</li>
      </template>
      <template v-slot:toggle>
        <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ccstdint%3E%0Aint%20main()%20%7B%0A%20%20std%3A%3Auint8_t%20a%20%3D%201%3B%0A%20%20a%20%3C%3C%3D%206%3B%20%20%2F%2F%2064%0A%20%20a%20%3E%3E%3D%204%3B%20%20%2F%2F%204%0A%20%20std%3A%3Auint8_t%20b1%20%3D%20(1%20%3C%3C%201)%3B%20%20%2F%2F%202%0A%20%20std%3A%3Auint8_t%20b2%20%3D%20(1%20%3C%3C%202)%3B%20%20%2F%2F%204%0A%20%20std%3A%3Auint8_t%20b3%20%3D%20(1%20%3C%3C%204)%3B%20%20%2F%2F%2016%20%20%20%20%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
<pre>                                        memory bits:
std::uint8_t a = 1;                     0000 0001
<br/>
a <ColorSpan data="<<=" color="red"/> 6;  // 64                         0100 0000
a <ColorSpan data=">>=" color="red"/> 4;  // 4                          0000 0100
<br/>
std::uint8_t b1 = (1 <ColorSpan data="<<"/> 1);  // 2       0000 0010
std::uint8_t b2 = (1 <ColorSpan data="<<"/> 2);  // 4       0000 0100
std::uint8_t b3 = (1 <ColorSpan data="<<"/> 4);  // 16      0001 0000</pre>
        </template>
        </CodeBox>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="枚举类型(Enumerations)">
  <template v-slot:toggle>
    <ToggleContent title="定义(Defining)">
      <template v-slot:toggle>
<pre><ColorSpan data="enum class" color="red"/> day { mon, tue, wed, thu, fri, sat, sun };
day d = day::mon;      
d = day::tue;   
d = wed;        //  <ColorSpan data="COMPILER ERROR: 'wed' only known in day's scope" color="red"/> </pre>
      </template>
      <template v-slot:display>
        <div>
          <li><ColorSpan data="enum class" color="red"/> <strong>name</strong> { enumerator1, enumerator2, … enumeratorN };</li>
          <li>默认情况每个枚举值映射成 0 ～ N-1</li>
        </div>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="底层数据类型(Underlying Type Of Enumerations)">
      <template v-slot:toggle>
        <div>
<pre> <ColorSpan data="// 7 values ⇒ char should be enough" color="dimgray"/>
<ColorSpan data="enum class" color="red"/> day : <ColorSpan data="char"/> {
  mon, tue, wed, thu, fri, sat, sun
};
<ColorSpan data="// less than 10,000 ⇒ short should be enough" color="dimgray"/>
<ColorSpan data="enum class" color="red"/> language_ISO639 : <ColorSpan data="short"/> {
  abk, aar, afr, aka, amh, ara, arg, …
};</pre>
        </div>
      </template>
      <template v-slot:display>   
        <div>
          <li>必须是整数类型 (char, short, long, …)</li>
          <li>默认是 int 类型</li>
        </div>   
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="类型系统(Type System)">
  <template v-slot:toggle>
    <ToggleContent title="定义常量(Declare Constants)">
      <template v-slot:toggle>
      <pre>int i = 0;
cin >> i;
int <ColorSpan data="const" color="red"/> k = i;  <ColorSpan data='// "int constant"' color="dimgray"/>
k = 5;            //  <ColorSpan data="COMPILER ERROR: k is const!" color="red"/></pre>
      </template>
      <template v-slot:display>
      <strong>Type</strong> <ColorSpan data="const" color="red"/> variable_name = value;
<li>变量值一旦赋值就不可以修改</li>
<li>变量值可以运行时初始化</li>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="类型别名(Type Aliases)">
      <template v-slot:toggle>
      <pre><ColorSpan data="using" color="red"/> real = double;
<ColorSpan data="using" color="red"/> ullim = unsigned long;
<ColorSpan data="using" color="red"/> index_vector = std::uint_least64_t;</pre>
      </template>
      <template v-slot:display>
      <li><ColorSpan data="using" color="red"/> NewType = OldType;  C++11</li>
      <li>typedef OldType NewType;  C++98</li>
      </template>
    </ToggleContent>
    <hr/>
    <ToggleContent title="自动推导(Type Deduction: auto)">
      <template v-slot:display>
    <li>通过右边表达式自动推导数据类型</li>
    <li>在处理复杂的模版类型时非常好用！</li>
      </template>
      <template v-slot:toggle>
      <pre>
<strong>auto</strong> i = 2;                   <ColorSpan data="int"/>           
<strong>auto</strong> u = 56u;                 <ColorSpan data="unsigned int"/>        
<strong>auto</strong> d = 2.023;               <ColorSpan data="double"/>     
<strong>auto</strong> f = 4.01f;               <ColorSpan data="float"/>   
<strong>auto</strong> l = -78787879797878l;    <ColorSpan data="long int"/> 
<br/>
<strong>auto</strong> x = 0 * i;               x: <ColorSpan data="int"/> 
<strong>auto</strong> y = i + d;               y: <ColorSpan data="double"/>   
<strong>auto</strong> z = f * d;               z: <ColorSpan data="double"/> </pre>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>

<script setup>
import ToggleContent from "@ToggleContent";
import TopToggleContent from "@TopToggleContent";
import LeftRightLayout from "@LeftRightLayout";
import ColorSpan from "@ColorSpan";
import CodeBox from "@CodeBox";


</script>
