import{_ as a,H as n,Y as e,a2 as s}from"./framework-96bec801.js";const o={},r=s(`<h2 id="_1-索引是什么" tabindex="-1"><a class="header-anchor" href="#_1-索引是什么" aria-hidden="true">#</a> 1.索引是什么?</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>  索引是一种能提高数据库查询效率的数据结构。它可以比作一本字典的目录，可以帮你快速找到对应的记录。索引一般存储在磁盘的文件中，它是占用物理空间的。<mark>适当的索引能提高查询效率，过多的索引会影响数据库表的插入和更新功能。</mark> 简单来说，如果一个数据量比较大的表经常被查询而较少地被插入或删除，则可以建立索引；相反，小表或经常被插入、删除记录的表，则不建议建立多个索引。</p><p>  建立索引的主要依据：对表的常用查询操作<code>WHERE</code>子句中的字段或多表查询中连接条件的字段。</p><p><strong>拓展</strong>：</p><p>（1）创建索引</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token keyword">UNIQUE</span><span class="token punctuation">]</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name<span class="token punctuation">(</span>col_name_1<span class="token punctuation">,</span>col_name_2<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre></div><p>(2)删除索引</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> index_name
</code></pre></div></div><h2 id="_2-mysql-索引有哪些类型" tabindex="-1"><a class="header-anchor" href="#_2-mysql-索引有哪些类型" aria-hidden="true">#</a> 2.MySQL 索引有哪些类型?</h2><p><strong>索引的类型</strong>：</p><figure><img src="http://doc-img.bt66.cn/index.png" alt="索引分类.png" tabindex="0" loading="lazy"><figcaption>索引分类.png</figcaption></figure><blockquote><p><strong>(1) 数据结构维度</strong><br> B+树索引：所有数据存储在叶子结点，复杂度 O(logn)，适合范围查找<br> 哈希索引：适合等值查询，检索效率高，一次到位<br> 全文索引：MyISAM 和 InnoDB 中都支持使用全文索引，一般用在文本类型<br> R-Tree 索引：用来对 GIS 数据类型创建 SPATIAL 索引<br><strong>(2) 物理存储维度</strong><br> 聚焦索引：以主键创建的索引，在叶子节点存储的是表中的结构（InnoDB 存储引擎）<br> 非聚焦索引：以非主键创建的索引，在叶子节点存储的是主键和索引列（InnoDB 存储引擎）<br><strong>(3) 逻辑索引</strong><br> 主键索引：一种特殊的唯一索引，不允许有空值<br> 普通索引：基本索引类型，允许空值和重复值<br> 联合索引：多个字段创建的索引，使用时遵循最左前缀原则<br> 唯一索引：索引列中的值必须是唯一的，允许有空值，但只允许有一个空值<br> 空间索引：MySQL 5.7 之后支持空间索引，在空间索引这方面遵循 OpenGIS 几何数据模型规则</p></blockquote><h2 id="_3-索引什么时候会失效" tabindex="-1"><a class="header-anchor" href="#_3-索引什么时候会失效" aria-hidden="true">#</a> 3.索引什么时候会失效?</h2><p>(1) 查询条件包含 <code>or</code>，可能会导致索引失效；<br> (2) 如果字段类型是字符串，<code>where</code> 时一定要用引号括起来，否则索引失效；<br> (3) <code>like</code> 通配符可能导致索引失效；<br> (4) 联合索引，查询时的条件列不是联合索引中的第一个列，索引失效；<br> (5) 在索引列上使用 mysql 的内置函数，索引失效；<br> (6) 对索引列运算(如：<code>+、-、\\*、/</code>)，索引失效；<br> (7) 索引字段上使用(<code>!=</code> 或者 <code>&lt;&gt;</code>、 <code>not in</code>)时，可能导致索引失效；<br> (8) 索引字段上使用 <code>is null、is not null</code>，可能导致索引失效<br> (9) 左连接查询或者有链接查询关联的字段编码格式不一样，可能导致索引失效；</p><h2 id="_4-哪些场景不适合建立索引" tabindex="-1"><a class="header-anchor" href="#_4-哪些场景不适合建立索引" aria-hidden="true">#</a> 4.哪些场景不适合建立索引?</h2><p>(1) 数据量少的表，不适合加索引；<br> (2) 更新比较频繁的表，不适合加索引；<br> (3) 区分度低的字段，不适合加索引(如：性别)；<br> (4) <code>where、group by、order by</code> 等后面没有使用到的字段，不需要建立索引；<br> (5) 已经有冗余的索引的情况(比如已经有了 a、b 的联合索引，不需要在单独建立 a 索引)；</p><h2 id="_5-为什么用-b-树-为什么不用二叉树" tabindex="-1"><a class="header-anchor" href="#_5-为什么用-b-树-为什么不用二叉树" aria-hidden="true">#</a> 5.为什么用 b+树，为什么不用二叉树?</h2>`,11),t=[r];function c(d,p){return n(),e("div",null,t)}const l=a(o,[["render",c],["__file","mysql.html.vue"]]);export{l as default};
