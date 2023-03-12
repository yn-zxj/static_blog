const e=JSON.parse('{"key":"v-bd24ce32","path":"/backend/database/base/mysql_basic_06.html","title":"多表查询","lang":"zh-CN","frontmatter":{"title":"多表查询","icon":"table","order":6,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-03-08T00:00:00.000Z","description":"==多表查询==，也称为关联查询，指两个或更多个表一起完成查询操作。 前提条件：这些一起查询的表之间是有关系的(一对一、一对多)，它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。 1.笛卡尔积 &#8195;&#8195;如果连接条件无效或者遗漏，其结果就是一个笛卡尔积，其中所有行的组合都被显示出来，即第一个表中的所有行连接到...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/base/mysql_basic_06.html"}],["meta",{"property":"og:title","content":"多表查询"}],["meta",{"property":"og:description","content":"==多表查询==，也称为关联查询，指两个或更多个表一起完成查询操作。 前提条件：这些一起查询的表之间是有关系的(一对一、一对多)，它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。 1.笛卡尔积 &#8195;&#8195;如果连接条件无效或者遗漏，其结果就是一个笛卡尔积，其中所有行的组合都被显示出来，即第一个表中的所有行连接到..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-12T07:05:29.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-12T07:05:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多表查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-12T07:05:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"1.笛卡尔积","slug":"_1-笛卡尔积","link":"#_1-笛卡尔积","children":[]},{"level":2,"title":"2.等值 / 非等值连接","slug":"_2-等值-非等值连接","link":"#_2-等值-非等值连接","children":[{"level":3,"title":"2.1 等值连接","slug":"_2-1-等值连接","link":"#_2-1-等值连接","children":[]},{"level":3,"title":"2.2 多表等值连接","slug":"_2-2-多表等值连接","link":"#_2-2-多表等值连接","children":[]},{"level":3,"title":"2.3 非等值连接","slug":"_2-3-非等值连接","link":"#_2-3-非等值连接","children":[]}]},{"level":2,"title":"3.表别名","slug":"_3-表别名","link":"#_3-表别名","children":[]},{"level":2,"title":"4.自连接(自关联)","slug":"_4-自连接-自关联","link":"#_4-自连接-自关联","children":[]},{"level":2,"title":"5.内连接","slug":"_5-内连接","link":"#_5-内连接","children":[]},{"level":2,"title":"6.外连接","slug":"_6-外连接","link":"#_6-外连接","children":[{"level":3,"title":"6.1 左外连接","slug":"_6-1-左外连接","link":"#_6-1-左外连接","children":[]},{"level":3,"title":"6.2 右外连接","slug":"_6-2-右外连接","link":"#_6-2-右外连接","children":[]}]},{"level":2,"title":"7.UNION 的使用","slug":"_7-union-的使用","link":"#_7-union-的使用","children":[]},{"level":2,"title":"8.SQL JOINS(总结)","slug":"_8-sql-joins-总结","link":"#_8-sql-joins-总结","children":[{"level":3,"title":"8.1 交叉连接","slug":"_8-1-交叉连接","link":"#_8-1-交叉连接","children":[]},{"level":3,"title":"8.2 内连接","slug":"_8-2-内连接","link":"#_8-2-内连接","children":[]},{"level":3,"title":"8.3 左外连接","slug":"_8-3-左外连接","link":"#_8-3-左外连接","children":[]},{"level":3,"title":"8.4 右外连接","slug":"_8-4-右外连接","link":"#_8-4-右外连接","children":[]},{"level":3,"title":"8.5 左排除外连接(左表唯一)","slug":"_8-5-左排除外连接-左表唯一","link":"#_8-5-左排除外连接-左表唯一","children":[]},{"level":3,"title":"8.6 右排除外连接(右表唯一)","slug":"_8-6-右排除外连接-右表唯一","link":"#_8-6-右排除外连接-右表唯一","children":[]},{"level":3,"title":"8.7 全外连接","slug":"_8-7-全外连接","link":"#_8-7-全外连接","children":[]},{"level":3,"title":"8.8 非交集连接","slug":"_8-8-非交集连接","link":"#_8-8-非交集连接","children":[]},{"level":3,"title":"8.9 附图 SQL JOINS","slug":"_8-9-附图-sql-joins","link":"#_8-9-附图-sql-joins","children":[]}]}],"git":{"createdTime":1678035291000,"updatedTime":1678604729000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":4}]},"readingTime":{"minutes":9.24,"words":2771},"filePathRelative":"backend/database/base/mysql_basic_06.md","localizedDate":"2023年3月8日","autoDesc":true}');export{e as data};
