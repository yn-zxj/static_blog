const l=JSON.parse('{"key":"v-1963b381","path":"/interview/java/java-foundation.html","title":"Java 基础","lang":"zh-CN","frontmatter":{"title":"Java 基础","icon":"advance","order":1,"author":"Mr.Zhang","category":["后端"],"tag":["面试"],"date":"2023-07-22T00:00:00.000Z","description":"Java 基础知识 Java 和 C++主要区别有哪些？各有哪些优缺点？ Java 和 C++分别代表了两种类型的语言： ① C++是编译型语言 &#8195;&#8195;首先将源代码编译生成机器语言，再由机器运行机器码。执行速度快、效率高；依赖编译器、跨平台性差些。 ② Java 是解释型语言 &#8195;&#8195;源代码不是直接翻译成机器语...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/interview/java/java-foundation.html"}],["meta",{"property":"og:title","content":"Java 基础"}],["meta",{"property":"og:description","content":"Java 基础知识 Java 和 C++主要区别有哪些？各有哪些优缺点？ Java 和 C++分别代表了两种类型的语言： ① C++是编译型语言 &#8195;&#8195;首先将源代码编译生成机器语言，再由机器运行机器码。执行速度快、效率高；依赖编译器、跨平台性差些。 ② Java 是解释型语言 &#8195;&#8195;源代码不是直接翻译成机器语..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T16:04:56.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2023-07-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T16:04:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T16:04:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"Java 基础知识","slug":"java-基础知识","link":"#java-基础知识","children":[{"level":3,"title":"Java 和 C++主要区别有哪些？各有哪些优缺点？","slug":"java-和-c-主要区别有哪些-各有哪些优缺点","link":"#java-和-c-主要区别有哪些-各有哪些优缺点","children":[]},{"level":3,"title":"JDK、JRE、JVM 的区别(必会)","slug":"jdk、jre、jvm-的区别-必会","link":"#jdk、jre、jvm-的区别-必会","children":[]},{"level":3,"title":"说一下 JAVA 的三种注释","slug":"说一下-java-的三种注释","link":"#说一下-java-的三种注释","children":[]},{"level":3,"title":"Java 的数据类型","slug":"java-的数据类型","link":"#java-的数据类型","children":[]},{"level":3,"title":"整型的默认数据类型是什么，浮点型的数据类型是什么？","slug":"整型的默认数据类型是什么-浮点型的数据类型是什么","link":"#整型的默认数据类型是什么-浮点型的数据类型是什么","children":[]},{"level":3,"title":"为什么不能用浮点型表示金额？","slug":"为什么不能用浮点型表示金额","link":"#为什么不能用浮点型表示金额","children":[]},{"level":3,"title":"Java 中有了基本类型为什么还需要包装类？","slug":"java-中有了基本类型为什么还需要包装类","link":"#java-中有了基本类型为什么还需要包装类","children":[]},{"level":3,"title":"如何将一个整型转为字符串，反之，将一个字符串类型的数据转为整型","slug":"如何将一个整型转为字符串-反之-将一个字符串类型的数据转为整型","link":"#如何将一个整型转为字符串-反之-将一个字符串类型的数据转为整型","children":[]},{"level":3,"title":"重载(overload)与重写(override)的区别","slug":"重载-overload-与重写-override-的区别","link":"#重载-overload-与重写-override-的区别","children":[]},{"level":3,"title":"Java 中==与equals的区别(必会)","slug":"java-中-与equals的区别-必会","link":"#java-中-与equals的区别-必会","children":[]},{"level":3,"title":"为什么不能用 BigDecimal 的 equals 方法做等值比较？","slug":"为什么不能用-bigdecimal-的-equals-方法做等值比较","link":"#为什么不能用-bigdecimal-的-equals-方法做等值比较","children":[]},{"level":3,"title":"BigDecimal(double)和 BigDecimal(String)有什么区别？","slug":"bigdecimal-double-和-bigdecimal-string-有什么区别","link":"#bigdecimal-double-和-bigdecimal-string-有什么区别","children":[]},{"level":3,"title":"为什么对 Java 中的负数取绝对值结果不一定是正数？","slug":"为什么对-java-中的负数取绝对值结果不一定是正数","link":"#为什么对-java-中的负数取绝对值结果不一定是正数","children":[]},{"level":3,"title":"String、StringBuffer 与 StringBuilder 的区别(必会)","slug":"string、stringbuffer-与-stringbuilder-的区别-必会","link":"#string、stringbuffer-与-stringbuilder-的区别-必会","children":[]},{"level":3,"title":"String 为什么设计成不可变的？","slug":"string-为什么设计成不可变的","link":"#string-为什么设计成不可变的","children":[]},{"level":3,"title":"String 能被继承吗？","slug":"string-能被继承吗","link":"#string-能被继承吗","children":[]},{"level":3,"title":"String a = \\"ab\\"; String b = \\"a\\" + \\"b\\"; a == b 吗？","slug":"string-a-ab-string-b-a-b-a-b-吗","link":"#string-a-ab-string-b-a-b-a-b-吗","children":[]},{"level":3,"title":"String str=new String(\\"Hello\\")创建了几个对象？","slug":"string-str-new-string-hello-创建了几个对象","link":"#string-str-new-string-hello-创建了几个对象","children":[]},{"level":3,"title":"String 有长度限制吗？是多少？","slug":"string-有长度限制吗-是多少","link":"#string-有长度限制吗-是多少","children":[]},{"level":3,"title":"说一下字符串操作常见的 API ？(10 个左右即可)","slug":"说一下字符串操作常见的-api-10-个左右即可","link":"#说一下字符串操作常见的-api-10-个左右即可","children":[]},{"level":3,"title":"自增(如下代码的运行结果)","slug":"自增-如下代码的运行结果","link":"#自增-如下代码的运行结果","children":[]},{"level":3,"title":"RPC 接口返回中，使用基本类型还是包装类？","slug":"rpc-接口返回中-使用基本类型还是包装类","link":"#rpc-接口返回中-使用基本类型还是包装类","children":[]},{"level":3,"title":"常见的字符编码有哪些？有什么区别？","slug":"常见的字符编码有哪些-有什么区别","link":"#常见的字符编码有哪些-有什么区别","children":[]},{"level":3,"title":"单例设计模式","slug":"单例设计模式","link":"#单例设计模式","children":[]},{"level":3,"title":"说几个常见的语法糖？","slug":"说几个常见的语法糖","link":"#说几个常见的语法糖","children":[]},{"level":3,"title":"Lambda 表达式是如何实现的？","slug":"lambda-表达式是如何实现的","link":"#lambda-表达式是如何实现的","children":[]},{"level":3,"title":"什么是泛型？有什么好处？","slug":"什么是泛型-有什么好处","link":"#什么是泛型-有什么好处","children":[]},{"level":3,"title":"什么是类型擦除？","slug":"什么是类型擦除","link":"#什么是类型擦除","children":[]},{"level":3,"title":"泛型中 K T V E ？ Object 等分别代表什么含义","slug":"泛型中-k-t-v-e-object-等分别代表什么含义","link":"#泛型中-k-t-v-e-object-等分别代表什么含义","children":[]},{"level":3,"title":"泛型中上下界限定符 extends 和 super 有什么区别？","slug":"泛型中上下界限定符-extends-和-super-有什么区别","link":"#泛型中上下界限定符-extends-和-super-有什么区别","children":[]},{"level":3,"title":"什么是 SPI，和 API 有啥区别？","slug":"什么是-spi-和-api-有啥区别","link":"#什么是-spi-和-api-有啥区别","children":[]},{"level":3,"title":"反射(了解)","slug":"反射-了解","link":"#反射-了解","children":[]},{"level":3,"title":"通过反射如何创建对象？","slug":"通过反射如何创建对象","link":"#通过反射如何创建对象","children":[]},{"level":3,"title":"Java 中创建对象有哪些种方式？","slug":"java-中创建对象有哪些种方式","link":"#java-中创建对象有哪些种方式","children":[]},{"level":3,"title":"如何理解面向对象和面向过程？","slug":"如何理解面向对象和面向过程","link":"#如何理解面向对象和面向过程","children":[]},{"level":3,"title":"面向对象的特征(了解)","slug":"面向对象的特征-了解","link":"#面向对象的特征-了解","children":[]},{"level":3,"title":"Java 中的多态三个条件？","slug":"java-中的多态三个条件","link":"#java-中的多态三个条件","children":[]},{"level":3,"title":"解释一下向上转型与向下转型","slug":"解释一下向上转型与向下转型","link":"#解释一下向上转型与向下转型","children":[]},{"level":3,"title":"final 关键字作用？","slug":"final-关键字作用","link":"#final-关键字作用","children":[]},{"level":3,"title":"说一下 java 中类的四种封装？","slug":"说一下-java-中类的四种封装","link":"#说一下-java-中类的四种封装","children":[]},{"level":3,"title":"java 中如何实现继承？java 中能实现多重继承吗？","slug":"java-中如何实现继承-java-中能实现多重继承吗","link":"#java-中如何实现继承-java-中能实现多重继承吗","children":[]},{"level":3,"title":"为什么 Java 不支持多继承？","slug":"为什么-java-不支持多继承","link":"#为什么-java-不支持多继承","children":[]},{"level":3,"title":"Java 的动态代理如何实现？","slug":"java-的动态代理如何实现","link":"#java-的动态代理如何实现","children":[]},{"level":3,"title":"请解释一下 this 与 super 关键字？","slug":"请解释一下-this-与-super-关键字","link":"#请解释一下-this-与-super-关键字","children":[]},{"level":3,"title":"说一下类与对象的区别","slug":"说一下类与对象的区别","link":"#说一下类与对象的区别","children":[]},{"level":3,"title":"类与抽象类的区别","slug":"类与抽象类的区别","link":"#类与抽象类的区别","children":[]},{"level":3,"title":"什么是接口？","slug":"什么是接口","link":"#什么是接口","children":[]},{"level":3,"title":"接口中能定义的主要成员有哪些？","slug":"接口中能定义的主要成员有哪些","link":"#接口中能定义的主要成员有哪些","children":[]},{"level":3,"title":"抽象类与接口的区别？","slug":"抽象类与接口的区别","link":"#抽象类与接口的区别","children":[]},{"level":3,"title":"说一下 break 与 continue 作用","slug":"说一下-break-与-continue-作用","link":"#说一下-break-与-continue-作用","children":[]},{"level":3,"title":"Java 注解的作用？","slug":"java-注解的作用","link":"#java-注解的作用","children":[]},{"level":3,"title":"Java 序列化的原理","slug":"java-序列化的原理","link":"#java-序列化的原理","children":[]},{"level":3,"title":"serialVersionUID 有何用途? 如果没定义会有什么问题？","slug":"serialversionuid-有何用途-如果没定义会有什么问题","link":"#serialversionuid-有何用途-如果没定义会有什么问题","children":[]},{"level":3,"title":"fastjson 的反序列化漏洞","slug":"fastjson-的反序列化漏洞","link":"#fastjson-的反序列化漏洞","children":[]},{"level":3,"title":"Java 是值传递还是引用传递？","slug":"java-是值传递还是引用传递","link":"#java-是值传递还是引用传递","children":[]},{"level":3,"title":"什么是深拷贝和浅拷贝？","slug":"什么是深拷贝和浅拷贝","link":"#什么是深拷贝和浅拷贝","children":[]},{"level":3,"title":"SimpleDateFormat 是线程安全的吗？使用时应该注意什么？","slug":"simpledateformat-是线程安全的吗-使用时应该注意什么","link":"#simpledateformat-是线程安全的吗-使用时应该注意什么","children":[]},{"level":3,"title":"如何获取数组元素的数量","slug":"如何获取数组元素的数量","link":"#如何获取数组元素的数量","children":[]},{"level":3,"title":"写出数组排序(冒泡法排序)","slug":"写出数组排序-冒泡法排序","link":"#写出数组排序-冒泡法排序","children":[]},{"level":3,"title":"说一下你知道的 java 中常见的包","slug":"说一下你知道的-java-中常见的包","link":"#说一下你知道的-java-中常见的包","children":[]},{"level":3,"title":"final 、finally、finalize 的区别？","slug":"final-、finally、finalize-的区别","link":"#final-、finally、finalize-的区别","children":[]},{"level":3,"title":"说一下 JAVA 中的异常分类","slug":"说一下-java-中的异常分类","link":"#说一下-java-中的异常分类","children":[]},{"level":3,"title":"JAVA 中异常父类(根父类)是哪一个？","slug":"java-中异常父类-根父类-是哪一个","link":"#java-中异常父类-根父类-是哪一个","children":[]},{"level":3,"title":"说出常见的几个运行时异常？(5 个以上)","slug":"说出常见的几个运行时异常-5-个以上","link":"#说出常见的几个运行时异常-5-个以上","children":[]},{"level":3,"title":"throw 与 throws 区别？","slug":"throw-与-throws-区别","link":"#throw-与-throws-区别","children":[]},{"level":3,"title":"异常处理的基本结构？","slug":"异常处理的基本结构","link":"#异常处理的基本结构","children":[]},{"level":3,"title":"finally 中代码一定会执行吗？","slug":"finally-中代码一定会执行吗","link":"#finally-中代码一定会执行吗","children":[]},{"level":3,"title":"Java 中的枚举有什么特点和好处","slug":"java-中的枚举有什么特点和好处","link":"#java-中的枚举有什么特点和好处","children":[]},{"level":3,"title":"什么是 AIO、BIO 和 NIO？","slug":"什么是-aio、bio-和-nio","link":"#什么是-aio、bio-和-nio","children":[]},{"level":3,"title":"JDK 1.8 新特性","slug":"jdk-1-8-新特性","link":"#jdk-1-8-新特性","children":[]}]},{"level":2,"title":"集合 ⭐️","slug":"集合-⭐️","link":"#集合-⭐️","children":[{"level":3,"title":"栈与队列的区别？","slug":"栈与队列的区别","link":"#栈与队列的区别","children":[]},{"level":3,"title":"顺序存储结构与链式存储结构的优缺点","slug":"顺序存储结构与链式存储结构的优缺点","link":"#顺序存储结构与链式存储结构的优缺点","children":[]},{"level":3,"title":"数据查找：遍历、二分查找，说一下二分查找的条件","slug":"数据查找-遍历、二分查找-说一下二分查找的条件","link":"#数据查找-遍历、二分查找-说一下二分查找的条件","children":[]},{"level":3,"title":"java 中常见的三种集合是哪三种？","slug":"java-中常见的三种集合是哪三种","link":"#java-中常见的三种集合是哪三种","children":[]},{"level":3,"title":"List 与 Set 的区别","slug":"list-与-set-的区别","link":"#list-与-set-的区别","children":[]},{"level":3,"title":"ArrayList 与 LinkedList 的区别","slug":"arraylist-与-linkedlist-的区别","link":"#arraylist-与-linkedlist-的区别","children":[]},{"level":3,"title":"ArrayList 与 Vector 区别","slug":"arraylist-与-vector-区别","link":"#arraylist-与-vector-区别","children":[]},{"level":3,"title":"HashMap 与 Hashtable 区别？","slug":"hashmap-与-hashtable-区别","link":"#hashmap-与-hashtable-区别","children":[]},{"level":3,"title":"HashMap 与 TreeMap 区别？","slug":"hashmap-与-treemap-区别","link":"#hashmap-与-treemap-区别","children":[]},{"level":3,"title":"集合迭代器的接口？","slug":"集合迭代器的接口","link":"#集合迭代器的接口","children":[]},{"level":3,"title":"遍历 List 有哪些不同的方式？","slug":"遍历-list-有哪些不同的方式","link":"#遍历-list-有哪些不同的方式","children":[]},{"level":3,"title":"HashSet 和 TreeSet 的区别","slug":"hashset-和-treeset-的区别","link":"#hashset-和-treeset-的区别","children":[]},{"level":3,"title":"Collection 与 Collections 的区别？","slug":"collection-与-collections-的区别","link":"#collection-与-collections-的区别","children":[]},{"level":3,"title":"什么是 Properties 类？","slug":"什么是-properties-类","link":"#什么是-properties-类","children":[]},{"level":3,"title":"JAVA 中有几种类型的流？","slug":"java-中有几种类型的流","link":"#java-中有几种类型的流","children":[]},{"level":3,"title":"字节流与字符流的区别？","slug":"字节流与字符流的区别","link":"#字节流与字符流的区别","children":[]},{"level":3,"title":"BufferedReader 流的作用？","slug":"bufferedreader-流的作用","link":"#bufferedreader-流的作用","children":[]},{"level":3,"title":"什么是序列化，什么是反序列化？","slug":"什么是序列化-什么是反序列化","link":"#什么是序列化-什么是反序列化","children":[]},{"level":3,"title":"什么是 XML？","slug":"什么是-xml","link":"#什么是-xml","children":[]}]},{"level":2,"title":"多线程 ⭐️","slug":"多线程-⭐️","link":"#多线程-⭐️","children":[{"level":3,"title":"什么是线程、什么是进程？","slug":"什么是线程、什么是进程","link":"#什么是线程、什么是进程","children":[]},{"level":3,"title":"如何创建一个线程？","slug":"如何创建一个线程","link":"#如何创建一个线程","children":[]},{"level":3,"title":"如何启动一个线程？","slug":"如何启动一个线程","link":"#如何启动一个线程","children":[]},{"level":3,"title":"start()方法与 run()方法的区别？","slug":"start-方法与-run-方法的区别","link":"#start-方法与-run-方法的区别","children":[]},{"level":3,"title":"什么是线程池，为什么要使用线程池？","slug":"什么是线程池-为什么要使用线程池","link":"#什么是线程池-为什么要使用线程池","children":[]},{"level":3,"title":"什么是线程同步？","slug":"什么是线程同步","link":"#什么是线程同步","children":[]},{"level":3,"title":"java 中的线程锁？","slug":"java-中的线程锁","link":"#java-中的线程锁","children":[]},{"level":3,"title":"说一下线程的几种状态","slug":"说一下线程的几种状态","link":"#说一下线程的几种状态","children":[]},{"level":3,"title":"线程操作常见的 API","slug":"线程操作常见的-api","link":"#线程操作常见的-api","children":[]},{"level":3,"title":"sleep 与 wait 区别","slug":"sleep-与-wait-区别","link":"#sleep-与-wait-区别","children":[]}]},{"level":2,"title":"线程池","slug":"线程池","link":"#线程池","children":[]},{"level":2,"title":"JVM","slug":"jvm","link":"#jvm","children":[]}],"git":{"createdTime":1690387967000,"updatedTime":1692115496000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":12}]},"readingTime":{"minutes":75.78,"words":22733},"filePathRelative":"interview/java/java-foundation.md","localizedDate":"2023年7月22日","autoDesc":true}');export{l as data};
