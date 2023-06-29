const e=JSON.parse('{"key":"v-c2fb60ca","path":"/backend/database/advanced/data_structure_of_index.html","title":"索引的数据结构","lang":"zh-CN","frontmatter":{"title":"索引的数据结构","icon":"rank","order":6,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-06-28T00:00:00.000Z","description":"1.为什么使用索引 无索引数据读取.png 假如给数据使用二叉树这样的数据结构进行存储，如下图所示： 有索引数据读取.png 2.索引的优缺点 2.1 索引概述 MySQL 官方对索引的定义为：==索引(Index)是帮助 MySQL 高效获取数据的数据结构。== 2.2 优点 ① 类似图书馆建书目索引，==提高数据检索的效率，降低数据库的 IO 成本...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/advanced/data_structure_of_index.html"}],["meta",{"property":"og:title","content":"索引的数据结构"}],["meta",{"property":"og:description","content":"1.为什么使用索引 无索引数据读取.png 假如给数据使用二叉树这样的数据结构进行存储，如下图所示： 有索引数据读取.png 2.索引的优缺点 2.1 索引概述 MySQL 官方对索引的定义为：==索引(Index)是帮助 MySQL 高效获取数据的数据结构。== 2.2 优点 ① 类似图书馆建书目索引，==提高数据检索的效率，降低数据库的 IO 成本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-29T15:40:19.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-29T15:40:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引的数据结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-29T15:40:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"1.为什么使用索引","slug":"_1-为什么使用索引","link":"#_1-为什么使用索引","children":[]},{"level":2,"title":"2.索引的优缺点","slug":"_2-索引的优缺点","link":"#_2-索引的优缺点","children":[{"level":3,"title":"2.1 索引概述","slug":"_2-1-索引概述","link":"#_2-1-索引概述","children":[]},{"level":3,"title":"2.2 优点","slug":"_2-2-优点","link":"#_2-2-优点","children":[]},{"level":3,"title":"2.3 缺点","slug":"_2-3-缺点","link":"#_2-3-缺点","children":[]}]},{"level":2,"title":"3.InnoDB 中索引的推演","slug":"_3-innodb-中索引的推演","link":"#_3-innodb-中索引的推演","children":[{"level":3,"title":"3.1 索引之前的查找","slug":"_3-1-索引之前的查找","link":"#_3-1-索引之前的查找","children":[]},{"level":3,"title":"3.2 设计索引","slug":"_3-2-设计索引","link":"#_3-2-设计索引","children":[]},{"level":3,"title":"3.3 常见索引概念","slug":"_3-3-常见索引概念","link":"#_3-3-常见索引概念","children":[]},{"level":3,"title":"3.4 InnoDB 的 B+树索引的注意事项","slug":"_3-4-innodb-的-b-树索引的注意事项","link":"#_3-4-innodb-的-b-树索引的注意事项","children":[]}]},{"level":2,"title":"4.MyISAM 中的索引方案","slug":"_4-myisam-中的索引方案","link":"#_4-myisam-中的索引方案","children":[{"level":3,"title":"4.1 MyISAM 索引的原理","slug":"_4-1-myisam-索引的原理","link":"#_4-1-myisam-索引的原理","children":[]},{"level":3,"title":"4.2 MyISAM 和 InnoDB 对比","slug":"_4-2-myisam-和-innodb-对比","link":"#_4-2-myisam-和-innodb-对比","children":[]}]},{"level":2,"title":"5.索引的代价","slug":"_5-索引的代价","link":"#_5-索引的代价","children":[]},{"level":2,"title":"6.MySQL 数据结构选择的合理性","slug":"_6-mysql-数据结构选择的合理性","link":"#_6-mysql-数据结构选择的合理性","children":[{"level":3,"title":"6.1 全表遍历","slug":"_6-1-全表遍历","link":"#_6-1-全表遍历","children":[]},{"level":3,"title":"6.2 Hash 结构","slug":"_6-2-hash-结构","link":"#_6-2-hash-结构","children":[]},{"level":3,"title":"6.3 二叉搜索树","slug":"_6-3-二叉搜索树","link":"#_6-3-二叉搜索树","children":[]},{"level":3,"title":"6.4 AVL 树","slug":"_6-4-avl-树","link":"#_6-4-avl-树","children":[]},{"level":3,"title":"6.5 B-Tree","slug":"_6-5-b-tree","link":"#_6-5-b-tree","children":[]},{"level":3,"title":"6.6 B+Tree","slug":"_6-6-b-tree","link":"#_6-6-b-tree","children":[]},{"level":3,"title":"6.7 R 树","slug":"_6-7-r-树","link":"#_6-7-r-树","children":[]},{"level":3,"title":"附录：算法的时间复杂度","slug":"附录-算法的时间复杂度","link":"#附录-算法的时间复杂度","children":[]}]}],"git":{"createdTime":1687935470000,"updatedTime":1688053219000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":2}]},"readingTime":{"minutes":2.69,"words":806},"filePathRelative":"backend/database/advanced/data_structure_of_index.md","localizedDate":"2023年6月28日","autoDesc":true}');export{e as data};
