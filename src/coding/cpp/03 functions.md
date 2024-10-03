---
title: c++ 教程：函数的使用
order: 2
category:
  - cpp教程
tag:
  - c++ 
description: "c++ 中函数的使用教程，函数定义、返回值等"  
sticky: 707
head:
  - - meta
    - name: keywords
      content: c++ function
---

<TopToggleContent title="函数定义(Function Declarations)">
  <template v-slot:toggle>
    <LeftRightLayout leftBottom="hidden">
      <template v-slot:right>
      <li><ColorSpan data="返回值： 函数执行后的结果" color="red"/></li>
      <li><ColorSpan data="参数列表：函数执行所需要的数据"/></li>
      <li>函数体：函数具体的功能实现逻辑</li>
      <hr>
      <ul style="list-style-type: none">
      <li><RightSpan/>隐藏功能实现细节</li>
      <li><RightSpan/>避免为常见任务重复编写代码</li>
      <li><RightSpan/>将问题分解为单独的功能，更容易测试</li>
      </ul>
      </template>
      <template v-slot:left-top>
      <img src="https://hackingcpp.com/cpp/lang/function_terminology.svg"/>
      </template>
    </LeftRightLayout>
    <hr/>
    <ToggleContent title="示例">
    <template v-slot:toggle>
    <CodeBox link="https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0A%20double%20mean%20(double%20a%2C%20double%20b)%20%7B%0A%20%20return%20(a%20%2B%20b)%20%2F%202%3B%0A%7D%0A%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20mean(2%2C%206)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
        <template v-slot:code>
<pre><ColorSpan data="double" color="red"/> <strong>mean</strong> (<ColorSpan data="double a"/>, <ColorSpan data="double b"/>) {
  return (a + b) / 2;
}
<hr/>
int <strong>main</strong> () {
  std::cout << mean(2, 6) <<'\n';  <ColorSpan data="// prints 4" color="dimgray"/> 
  return 0;
}</pre>
        </template>
      </CodeBox>
      </template>
    </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="返回值(Return Types)">
  <template v-slot:toggle>
    <ToggleContent title="有返回值">
      <template v-slot:toggle>
        <CodeBox link="https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0Adouble%20square%20(double%20x)%20%7B%0A%20%20return%20(x%20*%20x)%3B%0A%7D%0Aint%20max%20(int%20x%2C%20int%20y)%20%7B%0A%20%20if%20(x%20%3E%20y)%20return%20x%3B%20else%20return%20y%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20square(2)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%0A%20%20std%3A%3Acout%20%3C%3C%20max(2%2C%204)%20%3C%3C'%5Cn'%3B%20%20%2F%2F%20prints%204%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
          <template v-slot:code>
          <pre><ColorSpan data="double" color="red"/> <strong>square</strong> (double x) {
  <ColorSpan data="return"/> (x * x);
}
<ColorSpan data="int" color="red"/> <strong>max</strong> (int x, int y) {
  if (x > y) <ColorSpan data="return"/> x; else <ColorSpan data="return"/> y;
}</pre>
          </template>
        </CodeBox>
      </template>
      <template v-slot:display>
        <li><ColorSpan data="return"/> int, double, …</li>
      </template>
      </ToggleContent>
      <br/>
      <ToggleContent title="无返回值">
        <template v-slot:toggle>
          <CodeBox link="https://pythontutor.com/render.html#code=%20%23include%20%3Ciostream%3E%0Adouble%20square%20(double%20x)%20%7B%0A%20%20return%20(x%20*%20x)%3B%0A%7D%0A%0Avoid%20print_squares%20(int%20n)%20%7B%0A%20%20for%20(int%20i%20%3D%201%3B%20i%20%3C%3D%20n%3B%20%2B%2Bi)%0A%20%20%20%20std%3A%3Acout%20%3C%3C%20square(i)%20%3C%3C%20'%5Cn'%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20print_squares(2)%3B%20%20%20%0A%20%20return%200%3B%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
            <template v-slot:code>
            <pre><ColorSpan data="void" color="red"/> <strong>print_squares</strong> (int n) {
  for (int i = 1; i <= n; ++i)
    cout << square(i) << '\n';
}</pre>
            </template>
          </CodeBox>
        </template>
        <template v-slot:display>
          <li>void</li>
        </template>
      </ToggleContent>
      <hr>
      <ToggleContent title="Attribute [[nodiscard]]">
        <template v-slot:display>
          <li>当调用函数时没有接收返回值时编译器报警告⚠️</li>
        </template>
        <template v-slot:toggle>
        <pre><ColorSpan data="[[nodiscard]]" color="red"/> bool <strong>prime</strong> (int i) { … }
        <hr/>
<ColorSpan data="// return value(s) used:" color="dimgray"/>
bool const yes = prime(47); <RightSpan/>
if (prime(47)) { … }
        <hr/>
<ColorSpan data="// return value discarded/ignored:" color="dimgray"/>
prime(47);  //  <ColorSpan data="COMPILER WARNING" color="#f90"/></pre>
        </template>
      </ToggleContent>
      <hr>
      <ToggleContent title="不要返回局部变量的引用">
        <template v-slot:display>
          <li>函数返回局部变量的引用会导致未定义行为,需要避免</li>
        </template>
        <template v-slot:toggle>
          <pre><ColorSpan data="double&" color="red"/> <strong>square</strong> (double x) {
  double r = (x * x);
  <ColorSpan data="return"/> r;
}
<br/>
int <strong>main</strong> () {
  double r = square(3);  // <ColorSpan data="Undefined Behavior" color="#f90"/>
  return 0;
}</pre>
        </template>
      </ToggleContent>
  </template>
</TopToggleContent>
<br/>

<TopToggleContent title="参数(Parameters)">
  <template v-slot:toggle>
    <ToggleContent title="常量参数(const Parameters)">
     <template v-slot:display>
      <li> 用const 修饰的参数在函数体无法对其做修改</li>
     </template>
      <template v-slot:toggle>
      <pre>int <strong>foo</strong> (int a, int <ColorSpan data="const" color="red"/> b) {
  a += 5;   //<RightSpan/>
  b += 10;  //<RightSpan type="wrong"/> <ColorSpan data="COMPILER ERROR: can't modify const parameter" color="red"/>
  return (a + b);
}
<hr/>
<ColorSpan color="dimgray" data="// calling foo:"/>
foo(2,9);  <ColorSpan color="dimgray" data="// const has no effect here"/></pre>
      </template>
    </ToggleContent>
    <br/>
    <ToggleContent title="常量引用参数(const Reference Parameters)">
     <template v-slot:display>
      <li> 避免函数参数时产生对象的拷贝</li>
      <li> 明确函数内不会修改参数</li>
     </template>
      <template v-slot:toggle>
      <pre>
<strong><RightSpan type="wrong"/>pass by <ColorSpan data="value" color="red"/> ⇒ copy</strong>              <strong><RightSpan/>pass by <ColorSpan data="const&" color="green"/> ⇒ no copy</strong>
<hr>
int <strong>median</strong> (<ColorSpan data="vector <int>" color="red"/>);            int <strong>median</strong> (<ColorSpan data="const vector <int> &" color="green"/>);
auto v = get_samples("huge.dat");     auto v = get_samples("huge.dat");
auto m = median(<ColorSpan data="v" color="green"/>);                   auto m = median(<ColorSpan data="v" color="green"/>);  
<ColorSpan data="// runtime & memory overhead!" color="red"/>         <ColorSpan data="// no copy ⇒ no overhead!" color="green"/></pre>
      </template>
    </ToggleContent>
    <br/>
    <ToggleContent title="默认参数(default Parameters)">
      <template v-slot:toggle>
        <CodeBox link="https://pythontutor.com/render.html#code=%23include%20%3Ciostream%3E%0Adouble%20f%20(double%20a%2C%20double%20b%20%3D%201.5)%20%7B%0A%20%20return%20(a%20*%20b)%3B%0A%7D%0A%0Aint%20main%20()%20%7B%0A%20%20std%3A%3Acout%20%3C%3C%20%20f(2)%3B%20%20%20%20%20%2F%2F%201%20argument%20%20%E2%86%92%203.0%0A%20%20std%3A%3Acout%20%3C%3C%20%20f(2%2C%203)%3B%20%20%2F%2F%202%20arguments%20%E2%86%92%206.0%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=cpp_g%2B%2B9.3.0&rawInputLstJSON=%5B%5D&textReferences=false">
          <template v-slot:code>
          <pre>double <strong>f</strong> (double a, double b <ColorSpan data="= 1.5" color="red"/>) {
  return (a * b);
}
<hr/>
int <strong>main</strong> () {
  cout <<  f(2);     <ColorSpan color="dimgray" data="// 1 argument  → 3.0"/>
  cout <<  f(2, <ColorSpan data="3" color="red"/>);  <ColorSpan color="dimgray" data="// 2 arguments → 6.0"/>
}
<hr/>
void <strong>foo</strong> (int i <ColorSpan color="green" data="= 0"/>);  <RightSpan/>
void <strong>foo</strong> (int n, double x <ColorSpan color="green" data="= 2.5"/>);  <RightSpan/>
void <strong>foo</strong> (int a, int b <ColorSpan color="green" data="= 1"/>, float c <ColorSpan color="green" data="= 3.5f"/>);  <RightSpan/>
void <strong>foo</strong> (int a, int b <ColorSpan color="red" data="= 1"/>, int c ); <RightSpan type="wrong"/><hr>
&#10071; <strong>在第一个默认参数之后的每个参数都必须是默认参数!</strong></pre>
          </template>
        </CodeBox>
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
import RightSpan from "@RightSpan";

</script>