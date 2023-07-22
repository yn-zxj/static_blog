import{_ as a,o as e,c as t,a as n}from"./app-6e29f1c2.js";const s="/assets/throwable-59a159de.jpg",r="/assets/thread-c419ee70.jpg",i="/assets/springmvc-01560836.jpg",d={},c=n(`<h2 id="整型的默认数据类型是什么-浮点型的数据类型是什么" tabindex="-1"><a class="header-anchor" href="#整型的默认数据类型是什么-浮点型的数据类型是什么" aria-hidden="true">#</a> 整型的默认数据类型是什么，浮点型的数据类型是什么?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>整型默认数据类型:int
浮点型默认数据类型:double
</code></pre></div><h2 id="final-关键字作用" tabindex="-1"><a class="header-anchor" href="#final-关键字作用" aria-hidden="true">#</a> final 关键字作用?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① final修饰变量，表示该变量为常量，只能赋值一次;
② final修饰方法，表示该方法不能被重写;
③ final修饰类，表示该类不能被继承。
</code></pre></div><h2 id="如何将一个整型转为字符串-反之-将一个字符串类型的数据转为整型" tabindex="-1"><a class="header-anchor" href="#如何将一个整型转为字符串-反之-将一个字符串类型的数据转为整型" aria-hidden="true">#</a> 如何将一个整型转为字符串，反之，将一个字符串类型的数据转为整型</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>整型→字符串:String.valueOf(int parameter)
字符串→整型:Interger.parseInt(String parameter)
</code></pre></div><h2 id="说一下-break-与-continue-作用" tabindex="-1"><a class="header-anchor" href="#说一下-break-与-continue-作用" aria-hidden="true">#</a> 说一下 break 与 continue 作用</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>break</code>语句有两个作用：一是跳出当前循环体，执行循环之外的语句；二是跳出 switch 语句，而 continue 语句表示中止本次循环，继续执行下一次循环。</p></div><h2 id="什么是方法的重载" tabindex="-1"><a class="header-anchor" href="#什么是方法的重载" aria-hidden="true">#</a> 什么是方法的重载</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>同一个类中方法名相同，参数的类型、数量、顺序不同的一组方法。
</code></pre></div><h2 id="说一下值传递与引用传递" tabindex="-1"><a class="header-anchor" href="#说一下值传递与引用传递" aria-hidden="true">#</a> 说一下值传递与引用传递</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>  Java 数据类型包括基本数据类型和引用数据类型，其中基本数据类型使用值传递，实质是传递数值的副本，当调用使用值传递交换数据时，原数据不会发生改变；而引用数据类型使用引用传递，传递的实质是引用的地址，当调用引用传递交换数据时，因为地址指向变了，所以原数据发生改变。</p></div><h2 id="如何获取数组元素的数量" tabindex="-1"><a class="header-anchor" href="#如何获取数组元素的数量" aria-hidden="true">#</a> 如何获取数组元素的数量</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>数组-属性:length
字符串-方法:length()
</code></pre></div><h2 id="写出数组排序-冒泡法排序" tabindex="-1"><a class="header-anchor" href="#写出数组排序-冒泡法排序" aria-hidden="true">#</a> 写出数组排序(冒泡法排序)</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>  冒泡排序就是依次比较相邻的两个数，以升序为例，就是将小数放前面，大数放后面；假设需要排序的序列个数为 n，则需要经过 n-1 轮，最终完成排序。在第一轮中，比较的次数是 n-1 次，之后每轮次数减一。</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 冒泡排序 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bubleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span><span class="token comment">// 临时变量</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 需要比较n-1轮</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 每轮需要比较的次数逐轮减少1次</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 相邻元素比较，符合条件交换</span>
                temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-能被继承吗" tabindex="-1"><a class="header-anchor" href="#string-能被继承吗" aria-hidden="true">#</a> String 能被继承吗?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>String被final关键字修饰属于最终类，不能被继承。
</code></pre></div><h2 id="说一下字符串操作常见的-api-10-个左右即可" tabindex="-1"><a class="header-anchor" href="#说一下字符串操作常见的-api-10-个左右即可" aria-hidden="true">#</a> 说一下字符串操作常见的 API ?(10 个左右即可)</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>+、concat(String str)</td><td>字符串连接</td></tr><tr><td>==、equals(Object anObject)、equalsIgnoreCase(String another String)</td><td>字符串比对</td></tr><tr><td>charAt(index)</td><td>获取指定位置字符值</td></tr><tr><td>length()</td><td>获取字符串长度</td></tr><tr><td>indexOf(String str)</td><td>获取指定字符串第一次出现的下标值</td></tr><tr><td>replace(char oldChar，char newChar)</td><td>字符串替换</td></tr><tr><td>startsWith(String prefix)|endsWith(String prefix)</td><td>判断是否以指定字符串开始|结束</td></tr><tr><td>toLowerCase()|toUpperCase()</td><td>所有字符转换为小写|大写</td></tr><tr><td>substring(index)</td><td>字符串截取</td></tr><tr><td>trim()</td><td>去除左右空格</td></tr><tr><td>String.valueOf(int i)</td><td>将整型转为字符串</td></tr><tr><td>contains(String str)</td><td>判断字符串是否包含某子字符串</td></tr><tr><td>isEmpty()</td><td>判断字符串是否为空</td></tr><tr><td>split(String regex)</td><td>指定分隔符返回分割后的字符数组</td></tr><tr><td>toCharArray()</td><td>将字符串转为字符数组</td></tr></tbody></table><h2 id="字符串比较-与-equals-区别" tabindex="-1"><a class="header-anchor" href="#字符串比较-与-equals-区别" aria-hidden="true">#</a> 字符串比较:==与 equals 区别?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>==</code> :如果两个对象是基本数据类型(值类型) ==比较的是值，如果两个对象是引用类型，==比较的是地址；</p><p><code>equals</code> :此方法是 Object 类中定义方法，只能实现两个引用类型的变量进行比较，默认比较的是两个对象是否相同，在 String 类，对此方法进行了重写，实现的是比较两个字符串的值是否相同；</p></div><h2 id="string-与-stringbuffer-的区别" tabindex="-1"><a class="header-anchor" href="#string-与-stringbuffer-的区别" aria-hidden="true">#</a> String 与 StringBuffer 的区别?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>String 构建一个不可变的字符序列，而 StringBuffer 构建一个可变的字符序列。在对字符串进行追加操作时 StringBuffer 比 String 效率高。</p></div><h2 id="stringbuffer-与-stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#stringbuffer-与-stringbuilder-的区别" aria-hidden="true">#</a> StringBuffer 与 StringBuilder 的区别?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>StringBuffer 和 StringBuilder 都是构建一个可变的字符序列，但是 StringBuffer 是线程安全的，而 StringBuilder 是线程非安全的，在对字符串进行修改操作时，StringBuilder 效率优于 StringBuffer。</p></div><h2 id="说一下你知道的-java-中常见的包" tabindex="-1"><a class="header-anchor" href="#说一下你知道的-java-中常见的包" aria-hidden="true">#</a> 说一下你知道的 java 中常见的包</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>java.lang:系统基础类库。比如:String、Math、System、Thread等等;
java.util:Java工具类，包含对集合的操作、日期时间设置等等各种使用工具类;
java.io:io流文件的读写操作;
java.net:为实现网络应用程序而提供的类;
java.awt/javax.swing:用于窗体开发的类;
java.sql:数据库操作类库。
</code></pre></div><h2 id="说一下-java-中类的四种封装" tabindex="-1"><a class="header-anchor" href="#说一下-java-中类的四种封装" aria-hidden="true">#</a> 说一下 java 中类的四种封装?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>封装就是将抽象得到的属性和行为结合起来，形成一个有机的整体，也就是类。类里面的一些属性和方法(尤其是属性)需要隐藏起来，不希望直接对外公开，但同时提供外部访问的方法来访问这些需要隐藏的属性和方法。</p></div><table><thead><tr><th style="text-align:left;">修饰符</th><th style="text-align:center;">类内部</th><th style="text-align:center;">同一个包中</th><th style="text-align:center;">子类</th><th style="text-align:center;">任何地方</th></tr></thead><tbody><tr><td style="text-align:left;">private</td><td style="text-align:center;">✔️</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">default</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">protected</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">public</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr></tbody></table><h2 id="面向对象的三大特点是什么" tabindex="-1"><a class="header-anchor" href="#面向对象的三大特点是什么" aria-hidden="true">#</a> 面向对象的三大特点是什么?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>封装、继承、多态
</code></pre></div><h2 id="java-中如何实现继承-java-中能实现多重继承吗" tabindex="-1"><a class="header-anchor" href="#java-中如何实现继承-java-中能实现多重继承吗" aria-hidden="true">#</a> java 中如何实现继承?java 中能实现多重继承吗?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code> 继承概念:继承就是子类继承父类的特征和行为，使得子类对象(实例)具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。
 如何实现继承:使用extends关键字;一个子类只有一个直接父类。
</code></pre></div><h2 id="什么是方法的重写" tabindex="-1"><a class="header-anchor" href="#什么是方法的重写" aria-hidden="true">#</a> 什么是方法的重写?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>子类对父类的同名方法进行覆盖，这就是重写。
</code></pre></div><h2 id="同-重载-overload-与重写-override-的区别" tabindex="-1"><a class="header-anchor" href="#同-重载-overload-与重写-override-的区别" aria-hidden="true">#</a> 同：重载(overload)与重写(override)的区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>重写:子类对父类中的同名方法进行覆盖
重载:方法名相同，方法的参数的类型、顺序、数量不同的一组方法
</code></pre></div><h2 id="说一下类与对象的区别" tabindex="-1"><a class="header-anchor" href="#说一下类与对象的区别" aria-hidden="true">#</a> 说一下类与对象的区别</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>类是具有相同属性和行为的一个群体，而对象则是这个群体中的一个个体;我们在使用时，先设计类，在创建对象，也就是说，类是创建对象的模板。</p></div><h2 id="类与抽象类的区别" tabindex="-1"><a class="header-anchor" href="#类与抽象类的区别" aria-hidden="true">#</a> 类与抽象类的区别</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>类和抽象类的本质是一样的，都是类;但是抽象类一般是以基类的身份出现的，服务于子类的，可以包含抽象方法，普通类不可以，换句话说，抽象类可以不含抽象方法，但含抽象方法的类一定是抽象类。抽象类不可以被实例化，而普通类则可以。</p></div><h2 id="final-、finally、finalize-的区别" tabindex="-1"><a class="header-anchor" href="#final-、finally、finalize-的区别" aria-hidden="true">#</a> final 、finally、finalize 的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>final三个作用:修饰变量、方法、类;
finally是java的一种异常处理机制，通常放在try、catch后面，正常情况下此结构体使代码[总会执行]，(虚拟机终止，语句块终止、打断其实不会执行)而不管异常是否发生。
finalize是java.lang.Object类中的一个方法，用于垃圾回收机制中资源的释放。
</code></pre></div><h2 id="什么是多态" tabindex="-1"><a class="header-anchor" href="#什么是多态" aria-hidden="true">#</a> 什么是多态?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>解释一:多态是父类行为的多面性。---子类重写造成的
解释二:多态是同一个行为具有多个不同表现形式或形态的能力
</code></pre></div><h2 id="java-中的多态三个条件" tabindex="-1"><a class="header-anchor" href="#java-中的多态三个条件" aria-hidden="true">#</a> java 中的多态三个条件?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 要有继承;
② 要有重写;
③ 必须通过父类的对象调用。
</code></pre></div><h2 id="请解释一下-this-与-super-关键字" tabindex="-1"><a class="header-anchor" href="#请解释一下-this-与-super-关键字" aria-hidden="true">#</a> 请解释一下 this 与 super 关键字?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>this: ① 本类的对象；② 本类的构造函数。
super: ① 父类的对象；② 父类的构造函数。
</code></pre></div><h2 id="什么是接口" tabindex="-1"><a class="header-anchor" href="#什么是接口" aria-hidden="true">#</a> 什么是接口?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>接口是一系列方法的声明，是一些抽象方法的集合，是对类的行为定制的一套标准、一套规范、一套约束;
</code></pre></div><h2 id="接口中能定义的主要成员有哪些" tabindex="-1"><a class="header-anchor" href="#接口中能定义的主要成员有哪些" aria-hidden="true">#</a> 接口中能定义的主要成员有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>属性和方法;
</code></pre></div><h2 id="抽象类与接口的区别" tabindex="-1"><a class="header-anchor" href="#抽象类与接口的区别" aria-hidden="true">#</a> 抽象类与接口的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>相同点:不能实例化;
不同点:
    ①定义抽象类用abstract关键字，定义接口用interface;
    ②抽象类的本质为类，接口的本质是给类的行为定制规范;
    ③一个类只能有一个父类，但可以实现多个接口;
    ④抽象类中除了有抽象方法外，还可以有普通类中有的所有类成员，但接口中只能有抽象方法与属性(jdk8做了扩展，可以有默认方法与静态方法)
    ⑤访问权限：抽象类(protected -- jdk1.8之前，default/public -- jdk1.8)
    接口(public -- jdk1.8之前，public/default -- jdk1.8)
</code></pre></div><h2 id="解释一下向上转型与向下转型" tabindex="-1"><a class="header-anchor" href="#解释一下向上转型与向下转型" aria-hidden="true">#</a> 解释一下向上转型与向下转型</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>向上转型: 通过子类对象 (小范围) 实例化父类对象 (大范围) ， 这种属于自动转换
向下转型: 通过父类对象 (大范围) 实例化子类对象 (小范围) ， 这种属于强制转换
</code></pre></div><h2 id="说一下-java-中的异常分类" tabindex="-1"><a class="header-anchor" href="#说一下-java-中的异常分类" aria-hidden="true">#</a> 说一下 JAVA 中的异常分类</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>异常包括:Error和Exception
Exception:RuntimeException(运行时异常)和CheckedException(检查时异常)
</code></pre></div><figure><img src="`+s+`" alt="异常分类.jpg" width="550" tabindex="0" loading="lazy"><figcaption>异常分类.jpg</figcaption></figure><h2 id="java-中异常父类-根父类-是哪一个" tabindex="-1"><a class="header-anchor" href="#java-中异常父类-根父类-是哪一个" aria-hidden="true">#</a> JAVA 中异常父类(根父类)是哪一个?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>java.lang.Throwable
</code></pre></div><h2 id="说出常见的几个运行时异常-5-个以上" tabindex="-1"><a class="header-anchor" href="#说出常见的几个运行时异常-5-个以上" aria-hidden="true">#</a> 说出常见的几个运行时异常?(5 个以上)</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>运行时异常(RuntimeException):
    NullPointerException(空指针异常)
    ClassCastException(类型转换异常)
    IndexOutOfBoundsException(角标越界异常)
    ArithmeticException(数学运算异常)  /əˈrɪθmətɪk/
    IllegalArgumentException(不合法参数异常)
    SystemException(系统异常)
    NumberFormatException(数字格式化异常)

检查时异常(CheckedExcption):
 IOException(IO异常)
 ClassNotFoundException(类没找到异常)
 FileNotFoundException(文件找不到异常)
 SQLException(SQL异常)
</code></pre></div><h2 id="throw-与-throws-区别" tabindex="-1"><a class="header-anchor" href="#throw-与-throws-区别" aria-hidden="true">#</a> throw 与 throws 区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>throw关键字表示手动抛异常
throws关键字表示声明异常(在定义方法，同时给方法声明一个异常)
</code></pre></div><h2 id="异常处理的基本结构" tabindex="-1"><a class="header-anchor" href="#异常处理的基本结构" aria-hidden="true">#</a> 异常处理的基本结构?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>①try/catch
②try/catch/finally
③try/finally
</code></pre></div><h2 id="栈与队列的区别" tabindex="-1"><a class="header-anchor" href="#栈与队列的区别" aria-hidden="true">#</a> 栈与队列的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>队列:先进先出(FIFO)，它只允许在前端进行删除操作，在后端进行插入操作。
栈:先进后出，它只能在一端进行插入和删除操作。
</code></pre></div><h2 id="顺序存储结构与链式存储结构的优缺点" tabindex="-1"><a class="header-anchor" href="#顺序存储结构与链式存储结构的优缺点" aria-hidden="true">#</a> 顺序存储结构与链式存储结构的优缺点</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>顺序存储结构:
 优:一是节省存储空间;二是访问速度快;
 缺:进行插入、删除元素时效率低。

链式存储结构:
 优:进行插入、删除元素时效率高;
 缺:一是对空间的占用比较大;二是访问速度慢。
</code></pre></div><h2 id="数据查找-遍历、二分查找-说一下二分查找的条件" tabindex="-1"><a class="header-anchor" href="#数据查找-遍历、二分查找-说一下二分查找的条件" aria-hidden="true">#</a> 数据查找:遍历、二分查找，说一下二分查找的条件</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>必须是有序数组
</code></pre></div><h2 id="java-中常见的三种集合是哪三种" tabindex="-1"><a class="header-anchor" href="#java-中常见的三种集合是哪三种" aria-hidden="true">#</a> java 中常见的三种集合是哪三种?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>List、Set、Map
</code></pre></div><h2 id="附加-list-与-set-的区别" tabindex="-1"><a class="header-anchor" href="#附加-list-与-set-的区别" aria-hidden="true">#</a> 附加:List 与 Set 的区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>List集合元素按进入先后有序保存，可重复;
Set集合仅接收一次，无序，不可重复;
</code></pre></div><h2 id="arraylist-与-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-linkedlist-的区别" aria-hidden="true">#</a> ArrayList 与 LinkedList 的区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>ArrayList是基于数组来实现的，比较节省存储空间，在查询时访问元素速度快效率高，但在进行修改操作时性能差;
LinkedList是基于双向链表来实现的，在进行修改操作时性能好，效率高，但对空间的占用大，在查询时访问速度慢。
</code></pre></div><h2 id="arraylist-与-vector-区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-vector-区别" aria-hidden="true">#</a> ArrayList 与 Vector 区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>两者都是List集合，但ArrayList是线程非安全的，Vector是线程安全的。
</code></pre></div><h2 id="hashmap-与-hashtable-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-与-hashtable-区别" aria-hidden="true">#</a> HashMap 与 Hashtable 区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>HashMap集合中的key可以为null，值也可以是null，(只能由一个key为null)，它是线程非安全的;
Hashtable集合中的key-value都不能为空，它是线程安全的。
</code></pre></div><h2 id="hashmap-与-treemap-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-与-treemap-区别" aria-hidden="true">#</a> HashMap 与 TreeMap 区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>TreeMap相对HashMap，多了一个排序的功能
</code></pre></div><h2 id="集合迭代器的接口" tabindex="-1"><a class="header-anchor" href="#集合迭代器的接口" aria-hidden="true">#</a> 集合迭代器的接口?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>iterator
</code></pre></div><h2 id="遍历-list-有哪些不同的方式" tabindex="-1"><a class="header-anchor" href="#遍历-list-有哪些不同的方式" aria-hidden="true">#</a> 遍历 List 有哪些不同的方式?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>for循环、增强for循环、iterator迭代器
</code></pre></div><h2 id="hashset-和-treeset-的区别" tabindex="-1"><a class="header-anchor" href="#hashset-和-treeset-的区别" aria-hidden="true">#</a> HashSet 和 TreeSet 的区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>TreeSet相对于HashSet，多了一个排序的功能;
</code></pre></div><h2 id="int-与-integer-关系" tabindex="-1"><a class="header-anchor" href="#int-与-integer-关系" aria-hidden="true">#</a> int 与 Integer 关系?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Integer是int的包装类，int则是Java的一种基本数据类型
</code></pre></div><h2 id="什么是包装类" tabindex="-1"><a class="header-anchor" href="#什么是包装类" aria-hidden="true">#</a> 什么是包装类?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Java 是一个面向对象的编程语言，但是 Java 中的八种基本数据类型却是不面向对象的，为了使用方便和解决这个不足，在设计类时为每个基本数据类型设计了一个对应的类进行代表，这样八种基本数据类型对应的类统称为包装类(Wrapper Class)，包装类均位于 java.lang 包。</p></div><h2 id="collection-与-collections-的区别" tabindex="-1"><a class="header-anchor" href="#collection-与-collections-的区别" aria-hidden="true">#</a> Collection 与 Collections 的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Collection是集合的父接口，Collections是集合工具类。
</code></pre></div><h2 id="什么是-properties-类" tabindex="-1"><a class="header-anchor" href="#什么是-properties-类" aria-hidden="true">#</a> 什么是 Properties 类?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该类主要用于读取 Java 的配置文件，不同的编程语言有自己所支持的配置文件，配置文件中很多变量是经常改变的，为了方便用户的配置，能让用户够脱离程序本身去修改相关的变量设置。就像在 Java 中，其配置文件常为*.properties 文件，是以键值对的形式进行参数配置的。</p></div><h2 id="java-中有几种类型的流" tabindex="-1"><a class="header-anchor" href="#java-中有几种类型的流" aria-hidden="true">#</a> JAVA 中有几种类型的流?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>①数据单位:字节流、字符流
②流向:输入流、输出流
③角色:节点流、处理流
</code></pre></div><h2 id="字节流与字符流的区别" tabindex="-1"><a class="header-anchor" href="#字节流与字符流的区别" aria-hidden="true">#</a> 字节流与字符流的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>对于文本文件(.txt，.java，.c，.c++)，使用字符流处理;
对于非文本文件(.jpg，.mp3，.mp4，.avi，.doc，.ppt)，使用字节流处理。
</code></pre></div><h2 id="bufferedreader-流的作用" tabindex="-1"><a class="header-anchor" href="#bufferedreader-流的作用" aria-hidden="true">#</a> BufferedReader 流的作用?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>BufferedReader 属于输入字符缓冲流，缓冲流是一种装饰器类，目的是让原字节流、字符流新增缓冲的功能。缓冲流作用是把数据先写入内存缓冲区，等缓冲区满了，再把数据写到文件里。读内存比读硬盘速度快很多倍，所以这样效率就大大提高了。</p></div><h2 id="什么是序列化-什么是反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化-什么是反序列化" aria-hidden="true">#</a> 什么是序列化，什么是反序列化?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>序列化:将对象转为流，用来存贮或者网络传输;
反序列化:将流中的数据转为对象。
</code></pre></div><h2 id="什么是-xml" tabindex="-1"><a class="header-anchor" href="#什么是-xml" aria-hidden="true">#</a> 什么是 XML?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>XML 是可扩展标记语言(eXtensible [/ɪkˈstensəbl/] Markup Language)的简称。它是一个纯文本格式的文件，相对于文本，文档的内容一般用标签包裹;XML 在项目中主要用来存放配置信息。</p></div><h2 id="什么是反射" tabindex="-1"><a class="header-anchor" href="#什么是反射" aria-hidden="true">#</a> 什么是反射?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Java 反射就是 Java 程序在运行时，可以加载、探知、使用编译期间完全未知的类。也就是说，Java 程序可以加载一个运行时才得知类名的类，获取类的完整构造方法，并实例化出对象，给对象属性设定值或者调用对象的方法。</p></div><h2 id="获取-class-类的几种方法" tabindex="-1"><a class="header-anchor" href="#获取-class-类的几种方法" aria-hidden="true">#</a> 获取 Class 类的几种方法</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① Class.forName()
② 类名.class
③ 包装类.TYPE
④ 对象名.getClass()
⑤ Class 类.getSuperClass()
</code></pre></div><h2 id="通过反射如何创建对象" tabindex="-1"><a class="header-anchor" href="#通过反射如何创建对象" aria-hidden="true">#</a> 通过反射如何创建对象?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 通过Class类的newInstance()方法
② 通过Constructor的newInstance(Object[] args)方法
</code></pre></div><h2 id="什么是线程、什么是进程" tabindex="-1"><a class="header-anchor" href="#什么是线程、什么是进程" aria-hidden="true">#</a> 什么是线程、什么是进程?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>进程:运行中的程序称为进程;
线程:进程中的一条执行流(进程中可以同时由多个执行流-多线程，多线程的应用程序，程序可以并行执行多个任务，相对单线程应用程序，效率要高很多)
&gt; 线程是进程的子集，一个进程可以有多个线程
&gt; 额外知识理解:
 并行:多个CPU同时执行多个任务，如:多个人同时做不同的事
 并发:一个CPU同时执行多个任务，如:多个人做同一件事
</code></pre></div><h2 id="如何创建一个线程" tabindex="-1"><a class="header-anchor" href="#如何创建一个线程" aria-hidden="true">#</a> 如何创建一个线程?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 继承于Thread类
② 实现Runnable接口
③ 实现Callable接口
④ 使用线程池
</code></pre></div><h2 id="如何启动一个线程" tabindex="-1"><a class="header-anchor" href="#如何启动一个线程" aria-hidden="true">#</a> 如何启动一个线程?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>调用start()方法;
</code></pre></div><h2 id="start-方法与-run-方法的区别" tabindex="-1"><a class="header-anchor" href="#start-方法与-run-方法的区别" aria-hidden="true">#</a> start()方法与 run()方法的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>start()方法是启动当前线程，并调用run()方法;(只能调用一次，否则抛出&quot;IllegalThreadStateException&quot;异常)
run()方法通常需要重写，要执行的代码声明在此方法中。
</code></pre></div><h2 id="什么是线程池-为什么要使用线程池" tabindex="-1"><a class="header-anchor" href="#什么是线程池-为什么要使用线程池" aria-hidden="true">#</a> 什么是线程池，为什么要使用线程池?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>线程池就是存放多个线程的容器;可以重用线程，减少创建和销毁线程带来的消耗。
</code></pre></div><h2 id="什么是线程同步" tabindex="-1"><a class="header-anchor" href="#什么是线程同步" aria-hidden="true">#</a> 什么是线程同步?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>当多个线程访问同一资源，就需要解决数据一致性的问题，这时候就需要线程同步来解决这个问题。
线程同步:一次只允许某一个线程对某一资源进行访问称为线程同步。
</code></pre></div><h2 id="java-中的线程锁" tabindex="-1"><a class="header-anchor" href="#java-中的线程锁" aria-hidden="true">#</a> java 中的线程锁?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>线程锁(synchronized)作为并发共享数据，保证一致性的工具。
</code></pre></div><h2 id="说一下线程的几种状态" tabindex="-1"><a class="header-anchor" href="#说一下线程的几种状态" aria-hidden="true">#</a> 说一下线程的几种状态</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>新建--就绪--运行--阻塞--死亡
</code></pre></div><figure><img src="`+r+`" alt="线程状态转换图.jpg" width="600" tabindex="0" loading="lazy"><figcaption>线程状态转换图.jpg</figcaption></figure><h2 id="线程操作常见的-api" tabindex="-1"><a class="header-anchor" href="#线程操作常见的-api" aria-hidden="true">#</a> 线程操作常见的 API</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code> start():①启动当前线程;②调用run();
 run():线程在被调度时执行的操作
 currentThread():静态方法，返回执行当前代码的线程
 getName():获取当前线程名字
 setName():设置当前线程名字
 yield():释放当前CPU的执行权
 join():在线程a中调用线程b的join()，此时线程a就进入阻塞状态，直到线程b完全执行完以后，线程a才结束阻塞状态
 stop():已过时。当执行此方法时，强制结束当前线程
 sleep(long mills):让当前线程“睡眠”--阻塞(毫秒)
 isAlive():判断线程还存活
</code></pre></div><h2 id="sleep-与-wait-区别" tabindex="-1"><a class="header-anchor" href="#sleep-与-wait-区别" aria-hidden="true">#</a> sleep 与 wait 区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① sleep()的父类是Thread类，wait()的父类是Object()类;
② wait()方法使当前线程进入等待状态，直到另一线程对该对象发出notify/notifyAll来唤醒，sleep()方法是让线程处于休眠，预设值结束自动结束休眠。
③ sleep()不释放同步锁，wait()释放同步锁。
④ wait()通常放在同步代码块里，而sleep()则不受限制。
</code></pre></div><h2 id="oracle-数据库的端口号、mysql-端口、sqlserver-端口" tabindex="-1"><a class="header-anchor" href="#oracle-数据库的端口号、mysql-端口、sqlserver-端口" aria-hidden="true">#</a> oracle 数据库的端口号、mysql 端口、sqlserver 端口?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Oracle:1521   Mysql:3306   Sqlserver:1433
</code></pre></div><h2 id="解释一下-dql、dml、ddl、dcl、tcl" tabindex="-1"><a class="header-anchor" href="#解释一下-dql、dml、ddl、dcl、tcl" aria-hidden="true">#</a> 解释一下:DQL、DML、DDL、DCL、TCL</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>DQL: Date Query Language--数据查询语言(SELECT)
DML: Data Manipulation Language--数据操作语言(INSERT、DELETE、UPDATE)
DDL: Data Definition Language--数据定义语言(CREATE、ALTER、DROP)
DCL: Data Control Language--数据控制语言(GRANT、INVOKE)
TCL: Transition Control Language--事务控制语言(COMMIT、ROLLBACK、SAVEPOINT)
</code></pre></div><h2 id="oracle-数据分页" tabindex="-1"><a class="header-anchor" href="#oracle-数据分页" aria-hidden="true">#</a> Oracle 数据分页?</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>Oracle分页首先要解决三个问题:①解决排序<span class="token punctuation">;</span>②解决生成伪列<span class="token punctuation">;</span>③解决获取某一页数据<span class="token punctuation">;</span>

分页:数据库得到两个参数:pageindex<span class="token punctuation">(</span>当前页<span class="token punctuation">)</span>，pagesize<span class="token punctuation">(</span>每页记录数<span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>
 <span class="token punctuation">(</span><span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span>，rownum rn <span class="token keyword">from</span>  <span class="token comment"># 生成伪列</span>
  <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">order</span> <span class="token keyword">by</span> empno <span class="token keyword">asc</span><span class="token punctuation">)</span> e <span class="token punctuation">)</span>  <span class="token comment"># 解决排序--得到一个结果集</span>
<span class="token keyword">where</span> rn <span class="token operator">between</span> startposition <span class="token operator">and</span> endposition

startposition <span class="token operator">=</span> <span class="token punctuation">(</span>pageindex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pagesize <span class="token operator">+</span> <span class="token number">1</span>
endposition <span class="token operator">=</span> pagesize <span class="token operator">*</span> pageindex
</code></pre></div><h2 id="mysql-分页-sql" tabindex="-1"><a class="header-anchor" href="#mysql-分页-sql" aria-hidden="true">#</a> mysql 分页 SQL?</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>Mysql分页: <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">limit</span> startindex<span class="token punctuation">,</span> pagesize

startindex <span class="token operator">=</span>  <span class="token punctuation">(</span>pageindex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pagesize
</code></pre></div><h2 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>事务是一个工作单元，可以封装一系列操作，事务要求此系列操作要么都成功，要么都失败;事务执行完后，是不能回滚的;</p></div><h2 id="事务的特性" tabindex="-1"><a class="header-anchor" href="#事务的特性" aria-hidden="true">#</a> 事务的特性</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>原子性: 系列操作是不能分割的
一致性: 事务操作后数据必须操作一致
隔离性: 事务的操作不受其它事务影响
持久性: 事务一旦完成，将持久写入数据
</code></pre></div><h2 id="什么是视图" tabindex="-1"><a class="header-anchor" href="#什么是视图" aria-hidden="true">#</a> 什么是视图?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>视图:基于源表查询得到的结果，视图是不存放数据的(数据存在源表中) -- 虚拟表
</code></pre></div><h2 id="什么是索引-如何创建索引" tabindex="-1"><a class="header-anchor" href="#什么是索引-如何创建索引" aria-hidden="true">#</a> 什么是索引? 如何创建索引?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>索引服务于查询，索引是数据库的一个对象，索引对象类似图书目录;当对象创建索引后，在查询时，数据库会自动使用索引;当对表数据进行增删改，数据库会自动维护索引;</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> <span class="token operator">&lt;</span>index_name<span class="token operator">&gt;</span> <span class="token keyword">ON</span> <span class="token operator">&lt;</span>table_name<span class="token operator">&gt;</span><span class="token punctuation">(</span>字段 <span class="token punctuation">[</span><span class="token keyword">ASC</span><span class="token operator">|</span><span class="token keyword">DESC</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="过程与函数的区别" tabindex="-1"><a class="header-anchor" href="#过程与函数的区别" aria-hidden="true">#</a> 过程与函数的区别?</h2><table><thead><tr><th>函数</th><th>过程</th></tr></thead><tbody><tr><td>一般用于计算数据</td><td>完成特定的任务</td></tr><tr><td>声明为 FUNCTION</td><td>声明为 PROCEDURE /prəˈsiːdʒə(r)/</td></tr><tr><td>需要描述返回类型，且 PL/SQL 块中至少有一个有效的 RETURN 语句</td><td>无返回类型，可通过 OUT、IN OUT 参数返回多个值</td></tr><tr><td>不能独立运行，必须作为表达式的一部分</td><td>可作为一个独立的 PL/SQL 语句运行</td></tr><tr><td>在 DML 和 DQL 中调用函数</td><td>在 DML 和 DQL 中不可调用过程</td></tr></tbody></table><h2 id="oracle-数据库中的约束有哪些" tabindex="-1"><a class="header-anchor" href="#oracle-数据库中的约束有哪些" aria-hidden="true">#</a> Oracle 数据库中的约束有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>主键约束(primay):一般建表是需要添加主键约束的(主键是确定表数据的唯一标识) -- 主键约束要求:非空 + 唯一
非空约束(NOT NULL):值不能为空
检查约束(check):验证属性值的有效性
外键约束(foreign):表中的属性值关联外部表的某一个属性值
唯一约束(unique):值不重复(可以为空值，但只能有一个空值)
</code></pre></div><h2 id="union-与-union-all-的区别" tabindex="-1"><a class="header-anchor" href="#union-与-union-all-的区别" aria-hidden="true">#</a> union 与 union all 的区别?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>union对多个查询的结果如果存在相同数据，union会合并相同的结果
union all 会显示所有数据，所以union all 效率要高于union
</code></pre></div><h2 id="比较-truncate-和-delete-命令" tabindex="-1"><a class="header-anchor" href="#比较-truncate-和-delete-命令" aria-hidden="true">#</a> 比较 truncate 和 delete 命令 ?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>(1)truncate在各种表上无论是大的还是小的都非常快。如果有rollback命令delete将被撤销，而truncate则不会被撤销;
(2)truncate是一个DDL(Data Definition Language，数据定义语言)语言，而delete是一个DML(Data Manipulation Language，数据操作语言)语言，向其他所有的DDL语言一样，他将被隐式提交，不能对truncate使用rollback命令;
(3)用法上:DELETE FROM table [WHERE...]      |      TRUNCATE table
(4)truncate不能触发触发器，delete会触发触发器
</code></pre></div><h2 id="c-s-与-b-s-区别" tabindex="-1"><a class="header-anchor" href="#c-s-与-b-s-区别" aria-hidden="true">#</a> C/S 与 B/S 区别</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>B/S:(Browser-Server，浏览器-服务器)         C/S:(Client-Server，客户机-服务器)

(1)C/S是建立在局域网的基础上，B/S是建立在广域网的基础上，但并不是说B/S结构不能在局域网上使用。
(2)B/S业务拓展简单方便，通过增加页面即可增加服务器功能。C/S的客户端还需要安装专用的客户端软件，不利于拓展。
(3)B/S维护简单方便。开发、维护等几乎所有工作也都集中在服务器端，当企业对网络应用进行升级时，只需要更新服务器端的软件就可以，这就减轻了异地用户系统维护与升级的成本。
(4)B/S的响应速度不及C/S。
</code></pre></div><h2 id="说一下-tomcat-目录结构" tabindex="-1"><a class="header-anchor" href="#说一下-tomcat-目录结构" aria-hidden="true">#</a> 说一下 tomcat 目录结构?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-bin:放启动/关闭tomcat服务器的相关脚本命令
-conf:tomcat的一些配置文件
-lib:tomcat软件依赖的jar包
-logs:日志文件存放位置
-temp:存放tomcat运行时产生的临时数据
-webapps:项目默认发布位置
-work:所有的jsp资源编译存放位置
</code></pre></div><h2 id="说一下-web-项目目录结构" tabindex="-1"><a class="header-anchor" href="#说一下-web-项目目录结构" aria-hidden="true">#</a> 说一下 web 项目目录结构?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-MATE-INF:项目的元数据存放目录
-WEB-INF:项目资源主要存放目录
  --lib:项目运行依赖的jar包
  --classes:src目录下所有java文件编译后放的位置(web项目的类路径)
  --web.xml:项目的配置文件
  --[xxx.jsp:页面]
-index.jsp:首页
-[xxx.jsp:页面]
</code></pre></div><h2 id="什么是-servlet" tabindex="-1"><a class="header-anchor" href="#什么是-servlet" aria-hidden="true">#</a> 什么是 Servlet ?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Servlet是运行在Web服务器上的程序，它通过超文本传输协议(Http)来接收并响应来自Web客户机的请求。
</code></pre></div><h2 id="如何创建一个-servlet" tabindex="-1"><a class="header-anchor" href="#如何创建一个-servlet" aria-hidden="true">#</a> 如何创建一个 Servlet?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 通过实现Servlet接口;
② 继承GenericServlet类; /dʒəˈnerɪk/
③ 继承HttpServlet类;
</code></pre></div><h2 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期" aria-hidden="true">#</a> Servlet 生命周期?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 通过调用init()方法进行初始化;
② 通过调用service()方法来处理客户端的请求;
③ 通过调用destroy()方法从容器中销毁。
</code></pre></div><h2 id="servlet-9-大内置对象是什么" tabindex="-1"><a class="header-anchor" href="#servlet-9-大内置对象是什么" aria-hidden="true">#</a> Servlet 9 大内置对象是什么?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>pageContext:JSP页面容器
request:客户端向服务器发送的请求信息
response:服务器向客户端的响应信息
session:客户端与服务器端的一次会话
application:可存放全局变量，实现用户间数据的共享
config:服务器配置信息，可以取得初始化参数
out:向客户端输出内容
page:当前JSP页面本身，类似于Java类中的this关键字
exception:当一个页面在运行过程中发生异常时，就会产生这个对象。
</code></pre></div><h2 id="什么-session-对象-session-对象作用" tabindex="-1"><a class="header-anchor" href="#什么-session-对象-session-对象作用" aria-hidden="true">#</a> 什么 session 对象，session 对象作用?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>session 通常被翻译为&quot;会话&quot;。一个会话是指用户通过浏览器(客户端)与服务器之间进行的一系列的交互过程，交互期间可以包含浏览器与服务器之间的多次请求、响应。</p><p>Session 常见的作用:实现网页之间数据传递，保存用户的各种信息</p></div><h2 id="页面转发与页面重定向的区别" tabindex="-1"><a class="header-anchor" href="#页面转发与页面重定向的区别" aria-hidden="true">#</a> 页面转发与页面重定向的区别?</h2><table><thead><tr><th></th><th>请求转发(forward())</th><th>重定向(redirect())</th></tr></thead><tbody><tr><td>请求服务器次数</td><td>1 次</td><td>2 次</td></tr><tr><td>是否保留第一次请求时 request 范围中的属性</td><td>保留</td><td>不保留</td></tr><tr><td>地址栏 URL，是否改变</td><td>不变</td><td>改变</td></tr></tbody></table><h2 id="什么是-cookie-cookie-能做什么" tabindex="-1"><a class="header-anchor" href="#什么是-cookie-cookie-能做什么" aria-hidden="true">#</a> 什么是 Cookie? Cookie 能做什么?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Cookie是浏览器支持的一种本地存储机制。一般由服务端设置生成，在响应请求时被自动存储在浏览器中。
记住密码、商城购物车等等。
</code></pre></div><h2 id="附加-session-与-cookie-的区别" tabindex="-1"><a class="header-anchor" href="#附加-session-与-cookie-的区别" aria-hidden="true">#</a> 附加:session 与 cookie 的区别</h2><table><thead><tr><th></th><th>Cookie</th><th>session</th></tr></thead><tbody><tr><td>保存信息的位置</td><td>客户端</td><td>服务器端</td></tr><tr><td>保存的内容</td><td>字符串</td><td>对象</td></tr><tr><td>安全性</td><td>不安全</td><td>安全</td></tr></tbody></table><h2 id="附加-jsp-作用域" tabindex="-1"><a class="header-anchor" href="#附加-jsp-作用域" aria-hidden="true">#</a> 附加:JSP 作用域</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>pageContext--request--session--application (作用范围:小→大)
</code></pre></div><h2 id="说一下-mybatis-工作原理" tabindex="-1"><a class="header-anchor" href="#说一下-mybatis-工作原理" aria-hidden="true">#</a> 说一下 mybatis 工作原理?</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1.加载Mybatis的核心配置文件</span>
<span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.根据配置文件中的数据库连接信息，得到一个工厂对象</span>
<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.通过工厂对象得到会话对象</span>
<span class="token class-name">SqlSession</span> session <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4.通过session拿数据</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token string">&quot;us.get&quot;</span>， <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// namespace:映射文件必须配置 &lt;mapper namespace=&quot;us&quot;&gt;</span>
<span class="token comment">// 5.关闭对象</span>
session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mybaits-核心配置文件中常见的配制有哪些" tabindex="-1"><a class="header-anchor" href="#mybaits-核心配置文件中常见的配制有哪些" aria-hidden="true">#</a> mybaits 核心配置文件中常见的配制有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>-configuration(配置)
 --properties(属性)
 --settings(设置)
 --typeAliases(类型别名)   alias/ˈeɪliəs/
 --typeHandlers(类型处理器)
 --objectFactory(对象工厂)
 --plugins(插件)
 --environments(环境配置)
  --environment(环境变量)
            --transactionManager(事务管理器)
            --dataSource(数据源)
 --databaseIdProvider(数据库厂商标识)
 --mappers(映射器)
</code></pre></div><h2 id="映射文件常用节点有哪些" tabindex="-1"><a class="header-anchor" href="#映射文件常用节点有哪些" aria-hidden="true">#</a> 映射文件常用节点有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>select、delete、insert、update
</code></pre></div><h2 id="映射文件中节点的常用属性有哪些" tabindex="-1"><a class="header-anchor" href="#映射文件中节点的常用属性有哪些" aria-hidden="true">#</a> 映射文件中节点的常用属性有哪些?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>namespace</code>：mapper 文件路径</p><p><code>id</code>：在命名空间中的唯一标识符</p><p><code>parameterType</code>：将会传入这条语句的参数的类全限定名或别名 /pəˈræmɪtə(r)/</p><p><code>resultType</code>：期望从这条语句中返回结果的类全限定名或别名</p><p><code>resultMap</code>：对外部 resultMap 的命名引用</p></div><h2 id="什么是-ioc" tabindex="-1"><a class="header-anchor" href="#什么是-ioc" aria-hidden="true">#</a> 什么是 IOC?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>Inversion of Control--控制反转 (将对象创建的控制由用户转移给Spring框架的IOC容器实现)
</code></pre></div><h2 id="ioc-核心组件有哪些" tabindex="-1"><a class="header-anchor" href="#ioc-核心组件有哪些" aria-hidden="true">#</a> IOC 核心组件有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>BeanFactory、ApplicationContext
</code></pre></div><h2 id="什么是-aop" tabindex="-1"><a class="header-anchor" href="#什么是-aop" aria-hidden="true">#</a> 什么是 AOP?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Aspect Oriented Program--面向切面编程 (面向切面编程解决的是将组件功能的扩展通过动态植入的方式添加进来。</p><p>AOP 是横向切割机制，将组件的非核心业务从核心业务中剥立出来，在需要时，动态植入(AOP 的原理利用的是动态代理模式)</p></div><h2 id="什么是连接点、切点、增强、切面" tabindex="-1"><a class="header-anchor" href="#什么是连接点、切点、增强、切面" aria-hidden="true">#</a> 什么是连接点、切点、增强、切面?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>连接点(joinpoint)  :类中所有能被增强(植入非核心业务)的方法都称为连接点
切点(pointcut)    :真正增强的方法称为切点
增强/通知(advice)  :植入的功能实现称为增强
  --前置增强
 --后置增强
 --最终增强
 --环绕增强
 --异常增强
切面(Aspect): 将增强植入到切入点的过程称为切面(切面 = 切点 + 增强)
</code></pre></div><h2 id="请说出你对-spring-框架的理解" tabindex="-1"><a class="header-anchor" href="#请说出你对-spring-框架的理解" aria-hidden="true">#</a> 请说出你对 spring 框架的理解?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Spring 是一个轻量级的开源框架，是一个分层的一站式开发框架(持久层:JdbcTemplate 技术、业务层:IOC、表示层:Sprng MVC);</p><p>它的两个核心功能分别是 IOC 和 AOP：<br><code>IOC</code>：控制反转--将对象创建的控制由用户转移给 Spring 框架的 IOC 容器实现</p><p><code>AOP</code>：面向切面编程--将组件功能的扩展通过动态植入的方式添加进来</p></div><h2 id="在-spring-框架中-如何创建一个-bean-对象" tabindex="-1"><a class="header-anchor" href="#在-spring-框架中-如何创建一个-bean-对象" aria-hidden="true">#</a> 在 spring 框架中，如何创建一个 bean 对象?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 使用构造方法
② 使用静态工厂
③ 使用实例工厂
</code></pre></div><h2 id="说一下-bean-的作用域" tabindex="-1"><a class="header-anchor" href="#说一下-bean-的作用域" aria-hidden="true">#</a> 说一下 bean 的作用域?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>singleton、prototype、request、session、application、websocket
</code></pre></div><h2 id="spring-框架的常用注解" tabindex="-1"><a class="header-anchor" href="#spring-框架的常用注解" aria-hidden="true">#</a> spring 框架的常用注解?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@Component:  将一个类注入spring框架
@Repository: 在数据访问层使用(dao层)   /rɪˈpɒzətri/
@Service:   在业务逻辑层使用(service层)
@Controller: 在展现层使用(Controller)
@Autowired:  根据类型注入
@Resource:  根据名称注入
</code></pre></div><h2 id="springmvc-的工作原理" tabindex="-1"><a class="header-anchor" href="#springmvc-的工作原理" aria-hidden="true">#</a> springmvc 的工作原理?</h2><figure><img src="`+i+`" alt="SpringMVC工作原理.jpg" width="600" tabindex="0" loading="lazy"><figcaption>SpringMVC工作原理.jpg</figcaption></figure><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① 一个HTTP请求首先到达前端控制器(DispacherServlet)
② 前端控制器请求处理器映射器(HandlerMapping)来解析请求
③ 前端控制器拿到处理器映射器结果后，再次请求处理器适配器(HandlerAdapter)
④ 处理器适配器根据适配规则决定执行哪一个Handler
⑤ 处理器适配器将结果(ModelAndView)返回给前端控制器
⑥ 前端控制器接收到数据后，再次请求视图解析器(ViewResolver)，将数据解析为浏览器可识别的静态数据
⑦ 前端控制器将视图解析器解析的纯静态数据返回给用户(view)
</code></pre></div><h2 id="springmvc-方法的返回值有哪些" tabindex="-1"><a class="header-anchor" href="#springmvc-方法的返回值有哪些" aria-hidden="true">#</a> springmvc 方法的返回值有哪些?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>ModelAndView、String、void、JSON
</code></pre></div><h2 id="springmvc-如何得到一个-json-格式的数据" tabindex="-1"><a class="header-anchor" href="#springmvc-如何得到一个-json-格式的数据" aria-hidden="true">#</a> Springmvc 如何得到一个 JSON 格式的数据?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@ResponseBody
</code></pre></div><h2 id="springmvc-如何向页面传数据" tabindex="-1"><a class="header-anchor" href="#springmvc-如何向页面传数据" aria-hidden="true">#</a> springmvc 如何向页面传数据?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>①给方法添加一个Model类型的参数
②给方法添加一个Map类型的参数
③给方法添加一个ModelMap类型的参数
- 以上参数将数据放到request域对象中
</code></pre></div><h2 id="附加-springmvc-如何接收参数值" tabindex="-1"><a class="header-anchor" href="#附加-springmvc-如何接收参数值" aria-hidden="true">#</a> 附加:Springmvc 如何接收参数值</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>@RequestParam:接参数值
@PathVariable:RESTFUL风格URL获取参数值
</code></pre></div><h2 id="为什么在开发中大家都使用-springboot" tabindex="-1"><a class="header-anchor" href="#为什么在开发中大家都使用-springboot" aria-hidden="true">#</a> 为什么在开发中大家都使用 Springboot?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>① Springboot简化了Spring的开发过程，可以帮助开发者快速搭建项目框架;
② Springboot继承了原有Spring框架的优秀基因;
③ Springboot不需要过多配置文件的配置;
④ Springboot可以构建微服务，项目部署发布简单。
</code></pre></div><h2 id="springboot-工作原理" tabindex="-1"><a class="header-anchor" href="#springboot-工作原理" aria-hidden="true">#</a> SpringBoot 工作原理?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① 在 pom.xml 中父依赖下配置了大部分的第三方依赖包，在开发时只需导入相关的启动器(starter)依赖;</p><p>② 在启动类中@SpringBootApplication 在启动时会通过@EnableAutoConfiguration 去找到 META-INF/spring.factories 配置文件中的所有自动配置类，只有在 pom.xml 中配置了相应的启动器，该自动配置类才会生效并帮我们进行自动配置工作;</p><p>③ 启动类下 main()方法中，SpringApplication.run()方法，实例化后调用 run()启动项目;</p></div><h2 id="解释一下-mvvm" tabindex="-1"><a class="header-anchor" href="#解释一下-mvvm" aria-hidden="true">#</a> 解释一下 MVVM?</h2><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>MVVM(Model View ViewModel)
</code></pre></div><h2 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> Vue 生命周期</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>创建与初始化--挂载--[更新]--销毁<br> beforeCreate--created--beforeMount--mounted--[beforeUpdate--updated]--beforeDestroy--destroyed</p><p><code>created</code>：ajax 与服务器通信获取数据</p><p><code>mounted</code>：操作 DOM</p></div>`,231),l=[c];function o(p,h){return e(),t("div",null,l)}const g=a(d,[["render",o],["__file","interview-01.html.vue"]]);export{g as default};
