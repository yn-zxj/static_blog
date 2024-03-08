import{_ as n,o as a,c as s,a as t}from"./app-fpN15tNc.js";const e="/assets/index_none-BlF5sp3A.png",p="/assets/get_by_index-BlpFxcla.png",o="/assets/row_format_diagram-B9AbJ8v9.png",c="/assets/row_format_diagram_two-Duo6ySBG.png",r="/assets/page_demo-BtrQw0FG.png",i="/assets/catalog_entry-D1SkoH8o.png",l="/assets/pic_1-mGT73TpF.png",d="/assets/pic_2-Ck8N-kE5.png",k="/assets/pic_3-CiVufhIo.png",u="/assets/pic_4-DIS6oED5.png",g="/assets/pic_5-DStf2bfq.png",h="/assets/pic_6-DLQA1Zk7.png",m="/assets/myisam_index-h8wHg2K9.png",b="/assets/secondary_index-CBtv53pR.png",y="/assets/diff_innodb_myisam-CpcTuj7s.png",f="/assets/hash_1-DXzEbazN.png",_="/assets/collision_1-Dh6xiGCP.png",B="/assets/collision_2-D7IyHa1f.png",x="/assets/applicability_of_hash_index-BI02-t2Z.png",M="/assets/binary_tree-CuOEFJ6H.png",w="/assets/binary_search_tree-BwN43gwh.png",I="/assets/avl-IG0XTyx1.png",v="/assets/trident_tree-BSGf1ngV.png",S="/assets/B_tree_1-foqJUKy1.png",T="/assets/B_tree_2-DsugI2MY.png",D="/assets/time_complexity_of_algorithm-DzOzzSik.png",z={},q=t('<h2 id="为什么使用索引" tabindex="-1"><a class="header-anchor" href="#为什么使用索引"><span>为什么使用索引</span></a></h2><figure><img src="'+e+'" alt="无索引数据读取.png" tabindex="0" loading="lazy"><figcaption>无索引数据读取.png</figcaption></figure><p>假如给数据使用<code>二叉树</code>这样的数据结构进行存储，如下图所示：</p><figure><img src="'+p+`" alt="有索引数据读取.png" width="600" tabindex="0" loading="lazy"><figcaption>有索引数据读取.png</figcaption></figure><h2 id="索引的优缺点" tabindex="-1"><a class="header-anchor" href="#索引的优缺点"><span>索引的优缺点</span></a></h2><h3 id="索引概述" tabindex="-1"><a class="header-anchor" href="#索引概述"><span>索引概述</span></a></h3><p>MySQL 官方对索引的定义为：<mark>索引(Index)是帮助 MySQL 高效获取数据的数据结构。</mark></p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><p>① 类似图书馆建书目索引，<mark>提高数据检索的效率，降低数据库的 IO 成本</mark>，这也是创建索引最主要的原因；<br> ② 通过创建唯一索引，可以保证数据库表中每一行数据的唯一性；<br> ③ 在实现数据的参考完整性方面，可以加速表和表之间的连接。换句话说，对于有依赖关系的子表和父表联合查询时，可以提高查询速度；<br> ④ 在使用分组和排序子句进行数据查询时，可以显著减少查询分组和排序的时间，降低了 CPU 的消耗。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><p>① 创建索引和维护索引要耗费时间，并且随着数据量的增加，所耗费的时间也会增加；<br> ② 索引需要占用磁盘空间，除了数据表占用数据空间之外，每一个索引还要占用一定的物理空间，存储在磁盘上，如果有大量的索引，索引文件就可能比数据文件更快达到最大文件尺寸；<br> ③ 虽然索引大大提高了查询速度，但同时却会降低更新表的速度。当对表的数据进行增加、删除和修改的时候，索引也要动态地维护，这样就降低了数据维护的速度。</p><p><strong><u>因此，选择使用索引时，需要综合考虑索引的优缺点</u></strong>。</p><h2 id="innodb-中索引的推演" tabindex="-1"><a class="header-anchor" href="#innodb-中索引的推演"><span>InnoDB 中索引的推演</span></a></h2><h3 id="索引之前的查找" tabindex="-1"><a class="header-anchor" href="#索引之前的查找"><span>索引之前的查找</span></a></h3><p>先看一个精准匹配的例子：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span> 列名列表 <span class="token punctuation">]</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 列名 <span class="token operator">=</span> xxx<span class="token punctuation">;</span>
</code></pre></div><h4 id="在一个页中的查找" tabindex="-1"><a class="header-anchor" href="#在一个页中的查找"><span>在一个页中的查找</span></a></h4><h4 id="在很多页中的查找" tabindex="-1"><a class="header-anchor" href="#在很多页中的查找"><span>在很多页中的查找</span></a></h4><p>  在没有索引的情况下，不论是根据主键列或者其它列的值进行查找，由于我们并不能快速的定位到记录所在的页，所以只能<mark>从第一个页</mark>沿着<mark>双向链表</mark>一直往下找，在每一个页中根据我们上面的查找方式去查找指定的记录。因为要遍历所有的数据页，所以这种方式显然是<mark>超级耗时</mark>的。这是<code>索引</code>应运而生。</p><h3 id="设计索引" tabindex="-1"><a class="header-anchor" href="#设计索引"><span>设计索引</span></a></h3><p>建一个表：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> index_demo<span class="token punctuation">(</span>
  c1 <span class="token keyword">INT</span><span class="token punctuation">,</span>
  c2 <span class="token keyword">INT</span><span class="token punctuation">,</span>
  c3 <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
<span class="token punctuation">)</span> ROW_FORMAT <span class="token operator">=</span> Compact<span class="token punctuation">;</span>
</code></pre></div><p>这个新建的<code>index_demo</code>表中有两个<code>INT</code>类型的列，一个<code>CHAR(1)</code>类型的列，而且规定了<code>c1</code>列作为主键，此外这个表使用<code>Compact</code>行格式来实际存储记录。下面是简化的<code>index_demo</code>表的行格式示意图：</p><figure><img src="`+o+'" alt="行格式示意图.png" width="500" tabindex="0" loading="lazy"><figcaption>行格式示意图.png</figcaption></figure><p>只在示意图里展示记录的这几个部分：</p><p>① <code>record_type</code>: 记录头信息的一项属性，表示记录的类型，<code>0</code>表示<mark>普通</mark>记录，<code>2</code>表示<mark>最小</mark>记录，<code>3</code>表示<mark>最大</mark>记录，<code>1</code>暂时还没用过；</p><p>② <code>next_record</code>: 记录头信息的一项属性，表示下一条地址相对于本条记录的地址偏移量，我们用箭头来表明下一条记录是谁；</p><p>③ <code>各列的值</code>: 这里只记录在 index_demo 表中的三个列，即：c1、c2、c3；</p><p>④ <code>其它信息</code>: 除了上述三种信息以外的所有信息，包括其他隐藏列的值以及记录的额外信息。</p><p>将记录格式示意图的其他信息项暂时去掉并把它竖起来的效果是下面这样:</p><figure><img src="'+c+'" alt="行格式示意图-竖.png" width="500" tabindex="0" loading="lazy"><figcaption>行格式示意图-竖.png</figcaption></figure><p>把一些记录放到页里的示意图就是下面这样：</p><figure><img src="'+r+'" alt="页存放记录示意图.png" width="600" tabindex="0" loading="lazy"><figcaption>页存放记录示意图.png</figcaption></figure><h4 id="一个简单的索引设计方案" tabindex="-1"><a class="header-anchor" href="#一个简单的索引设计方案"><span>一个简单的索引设计方案</span></a></h4><p>  我们在根据某个搜索条件查找一些记录时为什么要遍历所有的数据页呢？因为各个页中的记录并没有规律，我们并不知道我们搜索条件匹配那些页中的记录，所以不得不一次遍历所有的数据页。所以如果我们想要快速的定位到需要查找的记录在哪些数据页中该怎么办？我们可以为快速定位记录所在的数据页而建立一个目录，建这个目录必须完成下面这些事：</p><p>① 下一个数据页中的用户记录的主键值必须大于上一个页中的用户记录的主键值</p><p>② 给所有页建立一个目录项</p><div class="hint-container tip"><p class="hint-container-title">为上面几个页做好的目录如下</p><figure><img src="'+i+'" alt="目录项.png" width="700" tabindex="0" loading="lazy"><figcaption>目录项.png</figcaption></figure><p>  以<code>页28</code>为例，它对应<code>目录项2</code>，这个目录项中包含着该页的页号<code>28</code>以及该页中用户记录的做好主键值<code>5</code>。我们只需要把几个目录项在物理存储器上连续存储(比如：数组)，就可以实现根据主键值快速查找某条记录的功能。比如：查找主键值为<code>20</code>的记录，具体查找步骤分为两步：<br>  ① 先从目录项中根据<mark>二分法</mark>快速确定出主键值为<code>20</code>的记录在<code>目录项3</code>中(因为<code>12 &lt; 20 &lt; 209</code>)，它对应的页是<code>页9</code>；<br>  ② 再根据前面说的在页中查找记录的方式去<code>页9</code>中定位具体的记录。</p><p>至此，针对数据页做的简易目录就完成了。这个目录有一个别名，称为<code>索引</code>。</p></div><h4 id="innodb-中的索引方案" tabindex="-1"><a class="header-anchor" href="#innodb-中的索引方案"><span>InnoDB 中的索引方案</span></a></h4><p>(1) <strong>迭代一次</strong>：目录记录的页</p><p>我们把前面使用到的目录项放到数据页中的样子如下：</p><figure><img src="'+l+'" alt="图一.png" width="700" tabindex="0" loading="lazy"><figcaption>图一.png</figcaption></figure><p>从图中可以看出来，我们新分配了一个编号为 30 的页来专门存储目录项记录。这里再次强调目录项记录和普通的用户记录的差异：</p><p><strong>不同点</strong>：<br>  ① 目录项记录的<code>record_type = 1</code>，而普通用户记录的<code>record_type = 0</code>；<br>  ② 目录项记录只有<mark>主键值和页的编号</mark>两个列，而普通的用户记录的列是用户自己定义的，可能包含很多列，另外还有 InnoDB 自己添加的隐藏列；<br>  ③ (了解)记录头信息里还有一个叫<code>min_rec_mask</code>的属性，<mark>只有在存储目录项记录的页中的主键值最小的目录项记录的 min_rec_mask 值为 1</mark>，其他的记录的 min_rec_mask 的值都是 0。</p><p><strong>相同点</strong>：两者用的都是一样的数据页，都会为主键生成 Page Directory(页目录)，从而在按照主键值进行查找时可以使用二分法来加快查询速度。</p><p><u>现在以查找主键为 20 的记录为例，根据某个主键值去查找记录的步骤就可以大致拆分为下面步骤</u>：<br>  ① 先到存储目录项记录的页，也就是页 30 中通过二分法快速定位到对应目录项，因为 12 &lt; 20 &lt; 209，所以定位到对应的记录在页 9；<br>  ② 再到存储用户记录的页 9 中根据二分法快速定位到主键值为 20 的用户记录。</p><hr><p>(2) <strong>迭代两次</strong>：多个目录项记录的页</p><figure><img src="'+d+'" alt="图二.png" width="700" tabindex="0" loading="lazy"><figcaption>图二.png</figcaption></figure><p>从图中可以看出，我们插入了一条主键值为 320 的用户记录之后需要两个新的数据页：</p><ul><li>为存储改用户记录而新生成了<code>页31</code></li><li>因为原先存储目录项记录的<code>页30</code>的容量已满(假设一个页只能存储四条目录项记录)，所以不得不需要一个新的<code>页32</code>来存放<code>页31</code>对应的目录项。</li></ul><p>现在因为存储目录项记录的页不止一个，所以如果我们想根据主键值查找一条用户记录大致需要 3 个步骤，以查找主键值为 20 的记录为例：</p><p>① 确定<mark>目录项记录页</mark></p><blockquote><p>现在存储目录项记录的页有两个，即页 30 和页 32，又因为页 30 表示的目录项的主键值的范围是[1, 320)，页 32 表示的目录项的主键值不小于 320，所以主键值 20 的记录对应的目录项记录在页 30 中。</p></blockquote><p>② 通过目录项记录页<mark>确定用户记录真实所在的页</mark></p><p>③ 在真实存储用户记录的页中定位到具体的记录</p><hr><p>(3) <strong>迭代三次</strong>：目录项记录页的目录页(给目录建目录)</p><figure><img src="'+k+'" alt="图三.png" width="700" tabindex="0" loading="lazy"><figcaption>图三.png</figcaption></figure><p>如图，我们生成了一个存储更高级目录项的<code>页33</code>，这个页中的两条记录分别代表页 30 和页 32，如果用户记录在主键值[1, 320)之间，则到页 30 查找具体记录；如果大于 320 则去页 32 找记录。</p><p>可以用下边这个图来描述它，这个数据结构就叫<mark>B+树</mark>。</p><figure><img src="'+u+'" alt="图四.png" width="700" tabindex="0" loading="lazy"><figcaption>图四.png</figcaption></figure><p>(4) <strong>B+Tree</strong></p><p>  一个 B+树的节点其实可以分为好多层，规定最下边的那层，也就是存放我们用户记录的那层为第<code>0</code>层，之后往上依次加。之前我们做了一个非常极端的假设：存放用户记录的页最多存放<code>3</code>条记录，存放目录项记录的页最多存放<code>4</code>条记录。其实真实环境中一个页存放的记录数量是非常大的，假设所有存放用户记录的叶子节点代表的数据页可以存放<code>100</code>条用户记录，所有存放目录项记录的内节点代表的数据页可以存放<code>1000</code>条目录项记录，那么：</p><ul><li>如果 B+树只有一层，也就是只有 1 个用于存放用户记录的节点，最多能存放<code>100</code>条记录</li><li>如果 B+树有两层，最多存放<code>100 * 1000 = 10,0000</code>条记录</li><li>如果 B+树有三层，最多存放<code>100 * 1000 * 1000 = 1,0000,0000</code>条记录</li><li>如果 B+树有四层，最多存放<code>100 * 1000 * 1000 * 1000 = 1000,0000,0000</code>条记录</li></ul><p>  假设的四层 B+树能存放的记录数十分庞大！实际不可能存如此之多，所以一般情况下，我们<mark>用到的 B+树都不会超过 4 层</mark>，那我们通过主键值去查找某条记录最多只需要做 4 个页面的查找(查找三个目录页和一个数据页)，又因为在每个页面内有所谓的 Page Directory(页目录)，所以在页面内也可以通过<mark>二分法</mark>实现快速定位记录。</p><h3 id="常见索引概念" tabindex="-1"><a class="header-anchor" href="#常见索引概念"><span>常见索引概念</span></a></h3><p>索引按照物理实现方式，可以分为：聚簇(聚集)索引和非聚簇(聚集)索引。也把非聚簇索引称为二级索引或者辅助索引。</p><h4 id="聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引"><span>聚簇索引</span></a></h4><p><strong>特点</strong>：<br> ① 使用记录主键值的大小进行记录和页的排序，包括三个方面的含义：<br>  -- 页内的记录是按照主键的大小顺序排成一个<mark>单向链表</mark><br>  -- 各个存放<mark>用户记录的页</mark>也是根据页中用户记录的主键大小顺序排成一个<mark>双向链表</mark><br>  -- 存放<mark>目录项记录的页</mark>分为不同的层次，在同一层次中的页面也是根据页目录项记录的主键大小顺序排成一个<mark>双向链表</mark></p><p>② B+树的<mark>叶子节点</mark>存储的就是完整的用户记录<br>  -- 所谓完整的用户记录，就是指这个记录中存储了所有列的值(包括隐藏列)</p><hr><p><strong>优点</strong>：<br> ① <mark>数据访问更快</mark>，因为聚簇索引将索引和数据保存在同一个 B+树中，因此从聚簇索引中获取数据比非聚簇索引更快<br> ② 聚簇索引对于主键的<mark>排序查找</mark>和<mark>范围查找</mark>速度非常快<br> ③ 按照聚簇索引排序顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多个数据块中提取数据，所以<mark>节省了大量的 IO 操作</mark></p><hr><p><strong>缺点</strong>：<br> ① <mark>插入速度严重依赖于插入顺序</mark>，按照主键的顺序插入是最快的方式，否则将会出现页分裂，严重影响性能。因为，对于 InnoDB 表，我们一般都会定义一个<strong>自增的 ID 列最为主键</strong><br> ② <mark>更新主键的代价很高</mark>，因为将会导致被更新的行移动。因此，对于 InnoDB 表，我们一般定义<strong>主键为不可更新</strong><br> ③ <mark>二级索引访问需要两次索引查找</mark>，第一次找到主键，第二次根据主键值找到行数据</p><h4 id="非聚簇索引-辅助索引、二级索引" tabindex="-1"><a class="header-anchor" href="#非聚簇索引-辅助索引、二级索引"><span>非聚簇索引(辅助索引、二级索引)</span></a></h4><figure><img src="'+g+'" alt="图五.png" width="700" tabindex="0" loading="lazy"><figcaption>图五.png</figcaption></figure><p><strong>概念</strong>：我们根据这个以 c2 列大小排序的 B+树只能确定我们要查找的主键值，所以如果我们想根据 c2 列的值查找到完整的用户记录的话，仍然需要到聚簇索引中再查一遍，这个过程称为<mark>回表</mark>。也就是根据 c2 列的值查询一条完整的用户记录需要使用到<mark>2</mark>棵 B+树。</p><p><strong>问题</strong>：为什么我们还需要一次回表操作呢？直接把完整的用户记录放叶子节点不行吗？</p><p><strong>回答</strong>：如果把完整的用户记录放在叶子节点是可以不用回表，但是太占地方了，相当于每建立一棵树 B+树都需要把所有的用户记录再都拷贝一遍，这就有点太浪费存储空间了。</p><figure><img src="'+h+'" alt="图六.png" width="700" tabindex="0" loading="lazy"><figcaption>图六.png</figcaption></figure><p>小结：聚簇索引与非聚簇索引的原理不同，在使用上也有一些区别：</p><p>① 聚簇索引的叶子节点存储的就是我们的<code>数据记录</code>，非聚簇索引的叶子节点存储的是<code>数据位置</code>。非聚簇索引不会影响数据表的物理存储顺序；<br> ② 一个表<mark>只能有一个聚簇索引</mark>，因为只能有一种排序存储的方式，但可以有<mark>多个非聚簇索引</mark>，也就是多个索引提供数据检索；<br> ③ 使用聚簇索引的时候，数据的查询效率不高，但如果对数据进行插入、删除、更新等操作，效率会比非聚簇索引低。</p><h5 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引"><span>联合索引</span></a></h5><p>  我们也可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说我们想让 B+树按照<code>c2和c3列</code>的大小进行排序，这个包含两层含义：<br>  ① 先把各个记录和页按照 c2 列进行排序<br>  ② 在 c2 列记录相同的情况下，采用 c3 列进行排序</p><p>  注意一点，以 c2 和 c3 列大小为排序规则建立的 B+树称为<code>联合索引</code>，本质上也是一个二级索引。它的意思与分别为 c2 和 c3 列分别建立索引的表述是不同的，不同点如下：<br>  ① 建立联合索引只会建立如上图一样的一棵 B+树<br>  ② 为 c2 和 c3 列分别建立索引会分别以 c2 和 c3 列的大小为排序规则建立两棵 B+树</p><h3 id="innodb-的-b-树索引的注意事项" tabindex="-1"><a class="header-anchor" href="#innodb-的-b-树索引的注意事项"><span>InnoDB 的 B+树索引的注意事项</span></a></h3><p>① <strong>根页面位置万年不动</strong><br> ② <strong>内节点中目录项记录的唯一性</strong><br> ③ <strong>一个页面最少存储两条记录</strong></p><h2 id="myisam-中的索引方案" tabindex="-1"><a class="header-anchor" href="#myisam-中的索引方案"><span>MyISAM 中的索引方案</span></a></h2><p><strong>B 树索引适用存储引擎如表所示</strong>：</p><table><thead><tr><th>索引/存储引擎</th><th>MyISAM</th><th>InnoDB</th><th>Memory</th></tr></thead><tbody><tr><td>B-Tree 索引</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><p>  即使多个存储引擎支持同一种类型的索引，但是他们的实现原理也是不同的。InnoDB 和 MyISAM 默认的索引是 B-Tree 索引，而 Memory 默认的索引是 Hash 索引。</p><p>  MyISAM 引擎使用<mark>B+Tree</mark>作为索引结构，叶子节点的 data 域存放的是<mark>数据记录的地址</mark>。</p><h3 id="myisam-索引的原理" tabindex="-1"><a class="header-anchor" href="#myisam-索引的原理"><span>MyISAM 索引的原理</span></a></h3><p>下面是 MyISAM 索引的原理图：</p><figure><img src="'+m+'" alt="MyISAM索引原理图.png" width="700" tabindex="0" loading="lazy"><figcaption>MyISAM索引原理图.png</figcaption></figure><p>如果我们在 col2 上建立一个二级索引，则索引的结构如下图所示：</p><figure><img src="'+b+'" alt="二级索引.png" width="700" tabindex="0" loading="lazy"><figcaption>二级索引.png</figcaption></figure><h3 id="myisam-和-innodb-对比" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb-对比"><span>MyISAM 和 InnoDB 对比</span></a></h3><p>MyISAM 的索引方式都是&quot;非聚簇&quot;的，与 InnoDB 包含一个聚簇索引是不同的，小结两种引擎中索引的区别：<br>  ① 在 InnoDB 存储引擎中，我们只需要根据主键值对<code>聚簇索引</code>进行一次查找就能找到对应记录，而在 MyISAM 中却需要进行一起<code>回表</code>操作，意味着 MyISAM 中建立的索引相当于全部都是<code>二级索引</code>；<br>  ② InnoDB 的数据文件本身就是索引文件，而 MyISAM 索引文件和数据文件是<mark>分离的</mark>，索引文件仅保存数据记录的地址；<br>  ③ InnoDB 的非聚簇索引 data 域存储相应记录<code>主键的值</code>，而 MyISAM 索引记录的是<code>地址</code>。换句话说，InnoDB 的所有非聚簇索引都引用主键作为 data 域；<br>  ④ MyISAM 的回表操作是十分快速的，因为是拿着地址偏移量直接到文件中取数据的，反观 InnoDB 是通过获取主键之后再去聚簇索引里找记录，索然说也不慢，但是比不上直接用地址去访问；<br>  ⑤ InnoDB 要求表<mark>必须有主键</mark>(MyISAM 可以没有)。如果没有显式指定，则 MySQL 系统会自动选择一个可以非空且唯一标识数据记录的列作为主键。如果不存在这种列，则 MySQL 自动为 InnoDB 表生成一个隐含字段作为主键，这个字段长度为 6 个字节，类型为长整型。</p><figure><img src="'+y+'" alt="对比图.png" width="700" tabindex="0" loading="lazy"><figcaption>对比图.png</figcaption></figure><h2 id="索引的代价" tabindex="-1"><a class="header-anchor" href="#索引的代价"><span>索引的代价</span></a></h2><p>索引是个好东西，可不能乱建，它在空间和时间上都会有消耗：</p><p>① <strong>空间上的代价</strong><br>   每建立一个索引都要为它建立一棵 B+树，每一棵 B+树的每一个节点都是一个数据页，一个页默认会占用<code>16kb</code>的存储空间，一棵很大的 B+树由许多数据页组成，那就是很大一片存储空间。</p><p>② <strong>时间上的代价</strong><br>   每次对表中的数据进行<code>增、删、改</code>操作时，都需要去修改各个 B+树索引。而且我们讲过，B+树每层节点都是按照索引列的值<code>从小到大的顺序排序</code>而成的<code>双向链表</code>。不论是叶子节点中的记录，还是内节点中的记录(也就是不论是用户记录还是目录项记录)都是按照索引列的值从小到大的顺序而形成了一个单向链表。而增、删、改操作可能回对节点和记录的排序造成破坏，所以存储引擎需要额外的时间进行一些<code>记录移位、页面分裂、页面回收</code>等操作来维护好节点和记录的排序。如果我们建立了许多索引，每个索引对应的 B+树都要进行相关的维护操作，会给性能拖后腿。</p><h2 id="mysql-数据结构选择的合理性" tabindex="-1"><a class="header-anchor" href="#mysql-数据结构选择的合理性"><span>MySQL 数据结构选择的合理性</span></a></h2><h3 id="全表遍历" tabindex="-1"><a class="header-anchor" href="#全表遍历"><span>全表遍历</span></a></h3><h3 id="hash-结构" tabindex="-1"><a class="header-anchor" href="#hash-结构"><span>Hash 结构</span></a></h3><figure><img src="'+f+'" alt="Hash结构.png" width="500" tabindex="0" loading="lazy"><figcaption>Hash结构.png</figcaption></figure><figure><img src="'+_+'" alt="碰撞.png" width="600" tabindex="0" loading="lazy"><figcaption>碰撞.png</figcaption></figure><p>上图中哈希函数 h 有可能将两个不同的关键字映射到相同的位置，这叫做<mark>碰撞</mark>，在数据库中一般采用<mark>链接法</mark>来解决。在链接法中，将散列到同一槽位的元素放在一个链表中，如下图所示：</p><figure><img src="'+B+`" alt="碰撞_链接法.png" width="600" tabindex="0" loading="lazy"><figcaption>碰撞_链接法.png</figcaption></figure><p><strong>实验</strong>：体会数组和 hash 表的查找方面的效率区别</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 算法复杂度 O(n)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">100000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token number">100000</span><span class="token punctuation">;</span>j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>temp <span class="token operator">==</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">long</span> end <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;time:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// time: 823</span>
<span class="token punctuation">}</span>

<span class="token comment">// 算法复杂度 O(1)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Interger</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token number">100000</span><span class="token punctuation">;</span>j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> contains <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">long</span> end <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;time:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// time: 5</span>
<span class="token punctuation">}</span>
</code></pre></div><p><u>Hash 结构效率高，那为什么索引结构要设计成树形呢？</u></p><p>Hash 索引适用于存储引擎如表所示：</p><table><thead><tr><th>索引/存储引擎</th><th>MyISAM</th><th>InnoDB</th><th>Memory</th></tr></thead><tbody><tr><td>Hash 索引</td><td>不支持</td><td>不支持</td><td><mark>支持</mark></td></tr></tbody></table><p><strong>Hash 索引的适用性</strong>：</p><figure><img src="`+x+`" alt="Hash索引的适用性.png" width="600" tabindex="0" loading="lazy"><figcaption>Hash索引的适用性.png</figcaption></figure><p>采用自适应 Hash 索引目的是方便根据 SQL 的查询条件加速定位到叶子节点，特别是当 B+树比较深的时候，通过自适应 Hash 索引可以明显提高数据的检索效率。</p><p>我们可以通过<code>innodb_adaptive_hash_index</code>变量来查看是否开启了自适应 Hash，比如：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%adaptive_hash_index&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------------------------+-------+</span>
<span class="token operator">|</span> Variable_name              <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------+-------+</span>
<span class="token operator">|</span> innodb_adaptive_hash_index <span class="token operator">|</span> <span class="token keyword">ON</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------+-------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><h3 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树"><span>二叉搜索树</span></a></h3><p>我们利用二叉树作为索引结构，那么磁盘的 IO 次数和索引树的高度是相关的。</p><p>① 二叉搜索树的特点</p><p>② 查找规则</p><figure><img src="`+M+'" alt="二叉树.png" width="300" tabindex="0" loading="lazy"><figcaption>二叉树.png</figcaption></figure><p>创造出来的二分搜索树如下图所示：</p><figure><img src="'+w+'" alt="二分搜索树.png" width="500" tabindex="0" loading="lazy"><figcaption>二分搜索树.png</figcaption></figure><p>为了提高查询效率，就需要<mark>减少磁盘 IO 数</mark>。为了减少磁盘 IO 的次数，就需要尽量<mark>降低树的高度</mark>，需要把原来&quot;瘦高&quot;的树结构变的&quot;矮胖&quot;，树的每层的分叉越多越好。</p><h3 id="avl-树" tabindex="-1"><a class="header-anchor" href="#avl-树"><span>AVL 树</span></a></h3><figure><img src="'+I+'" alt="平衡二叉树.png" width="800" tabindex="0" loading="lazy"><figcaption>平衡二叉树.png</figcaption></figure><p>针对同样的数据，如果我们把二叉树改成 M 叉树(M &gt; 1) 呢？当 M=3 时，同样的 31 个节点可以由下面的三叉树来进行存储：</p><figure><img src="'+v+'" alt="三叉树.png" width="800" tabindex="0" loading="lazy"><figcaption>三叉树.png</figcaption></figure><h3 id="b-tree" tabindex="-1"><a class="header-anchor" href="#b-tree"><span>B-Tree</span></a></h3><p>B 树的结构如下图所示：</p><figure><img src="'+S+'" alt="B-Tree.png" width="700" tabindex="0" loading="lazy"><figcaption>B-Tree.png</figcaption></figure><p><strong>一个 M 阶的 B 树(M&gt;2)有以下特性</strong>：<br> ① 根节点的儿子数的范围是[2, M]<br> ② 每个中间节点包含 k-1 个关键字和 k 个孩子，孩子的数量 = 关键字的数量 + 1，k 的取值范围为[ceil(M/2), M]<br> ③ 叶子节点包括 k-1 个关键字(叶子节点没有孩子)，k 的取值范围为[ceil(M/2), M]<br> ④ 假设中间节点节点的关键字为 Key[1], Key[2],...,Key[k-1]，且关键字按照升序排序，即 Key[i]&lt;Key[i+1]。此时 k-1 个关键字相当于划分了 k 个范围，也就是对应着 k 个指针，即为 P[1], p[2],...,P[K]。其中 P[1]指向关键字小于 Key[1]的子树，P[i]指向关键字属于(Key[i-1], Key[i])的子树，P[k]指向关键字大于 Key[k-1]的子树<br> ⑤ 所有叶子节点位于同一层</p><p>  上面那张图所表示的 B 树就是一棵 3 阶的 B 树。我们可以看下磁盘块 2，里面的关键字为(8, 12)，它有三个孩子(3, 5)，(9, 10)和(13, 15)，你能看到(3, 5)小于 8，(9, 10)在 8 到 12 之间，而(13, 15)大于 12，刚好符合刚才我们给出的特征。</p><p>  然后我们来看下如何用 B 树进行查找。假设我们想要查找的关键字是 9，那么步骤可以分为下面几步：<br>    ① 我们与根节点的关键字(17, 35)进行比较，9 小于 17 那么得到指针 P1；<br>    ② 按照指针 P1 找到磁盘块 2，关键字为(8, 12)，因为 9 在 8 和 12 之间，所以我们得到指针 P2；<br>    ③ 按照指针 P2 找到磁盘块 6，关键字为(9, 10)，然后找到了关键字 9。</p><p>  你能看出来在 B 树的所有过程中，我们比较的次数并不少，但如果把数据读取出来然后再内存中进行比较，这个时间就是可以忽略不计的。而读取磁盘块本身需要进行 I/O 操作，消耗的时间比在内存中进行比较所需要的时间要多，是数据查找用时的重要因素。<mark>B 树相比于平衡二叉树来说磁盘 I/O 操作要少</mark>，在数据查询中比平衡二叉树效率要高。所以<mark>只要树的高度足够低，IO 次数足够少，就能够提高查询性能</mark>。</p><p><strong>再举例一</strong>：</p><figure><img src="'+T+'" alt="B-Tree.png" width="700" tabindex="0" loading="lazy"><figcaption>B-Tree.png</figcaption></figure><h3 id="b-tree-1" tabindex="-1"><a class="header-anchor" href="#b-tree-1"><span>B+Tree</span></a></h3><p>B+Tree 是在 B-Tree 基础上的一种优化，使其更适合实现外存储索引结构，InnoDB 存储引擎就是用 B+Tree 实现其索引结构。</p><p><strong>B+树和 B 树的差异</strong>：<br> ① 有 k 个孩子的节点就有 k 个关键字，也就是孩子数量 = 关键字数，而 B 树中，孩子数量 = 关键字数 + 1；<br> ② 非叶子节点的关键字也会同时存在子节点中，并且是在子节点中所有关键字的最大(或最小)；<br> ③ 非叶子节点仅用于索引，不保存数据记录，跟记录有关的信息都放在叶子节点中，而 B 树中，<mark>非叶子节点既保存索引，也保存数据记录</mark>；<br> ④ 所有关键字都在叶子节点出现，叶子节点构成一个有序链表，而且叶子节点本身按照关键字的大小从小到大顺序链接。</p><blockquote><p>B 树和 B+树都可以作为索引的数据结构，在 MySQL 中采用的是 B+树，但 B 树和 B+树各自有自己的应用场景，不能说 B+树完全比 B 树好，反之亦然。</p></blockquote><p><strong>思考题：为了减少 IO，索引树会一次性加载吗？</strong><br><strong>思考题：B+树的存储能力如何？为何说一般查找行记录，最多只需 1~3 次磁盘 IO？</strong><br><strong>思考题：为什么说 B+树比 B-树更适合实际应用中操作系统的文件索引和数据库索引?</strong><br><strong>思考题：Hash 索引和 B+树索引的区别</strong><br><strong>思考题：Hash 索引与 B+树索引是在建索引的时候手动指定的吗？</strong></p><h3 id="r-树" tabindex="-1"><a class="header-anchor" href="#r-树"><span>R 树</span></a></h3><p>  R-Tree 在 MySQL 很少使用，仅支持<mark>geometry 数据类型</mark>，支持该类型的存储引擎只有 MyISAM、BDB、InnoDB、NDB、Archive 几种。举例 R 树在现实领域中能够解决的例子：查找 20 英里以内的餐厅。如果没有 R 树你会怎么解决？一般情况下我们会把餐厅坐标(x, y)分为两个字段存放在数据库中，一个字段记录经度，另一个字段记录纬度。这样的话我们就需要遍历所有的餐厅获取其位置信息，然后计算是否满足要求。如果一个地区有 100 家餐厅的话，我们就要进行 100 次位置计算操作了，如果应用到谷歌、百度地图这种超大数据库中，这种方法便必定不可行了。R 树就很好的<mark>解决了这种高纬度空间搜索问题</mark>。它把 B 树的思想很好的扩展到了多维空间，采用了 B 树分割空间的思想，并在添加、删除操作时采用合并、分解结点的方法，保证树的平衡性。因此，R 树就是一棵用来<mark>存储高维数据的平衡树</mark>。相当于 B-Tree，R-Tree 的优势在于范围查找。</p><table><thead><tr><th>索引/存储引擎</th><th>MyISAM</th><th>InnoDB</th><th>Memory</th></tr></thead><tbody><tr><td>R-Tree 索引</td><td>支持</td><td>支持</td><td><mark>不支持</mark></td></tr></tbody></table><h3 id="附录-算法的时间复杂度" tabindex="-1"><a class="header-anchor" href="#附录-算法的时间复杂度"><span>附录：算法的时间复杂度</span></a></h3><p>同一问题可用不同算法解决，而算法的质量优劣将影响到算法乃至程序的效率。算法分析的目的在于选择合适算法和改进算法。</p><figure><img src="'+D+'" alt="算法的时间复杂度.png" tabindex="0" loading="lazy"><figcaption>算法的时间复杂度.png</figcaption></figure>',154),A=[q];function H(L,O){return a(),s("div",null,A)}const P=n(z,[["render",H],["__file","data_structure_of_index.html.vue"]]),Q=JSON.parse('{"path":"/backend/database/advanced/data_structure_of_index.html","title":"索引的数据结构","lang":"zh-CN","frontmatter":{"title":"索引的数据结构","icon":"rank","order":6,"author":"Mr.Zhang","editLink":false,"category":["数据库"],"tag":["MySQL"],"date":"2023-07-12T00:00:00.000Z","description":"为什么使用索引 无索引数据读取.png无索引数据读取.png 假如给数据使用二叉树这样的数据结构进行存储，如下图所示： 有索引数据读取.png有索引数据读取.png 索引的优缺点 索引概述 MySQL 官方对索引的定义为：索引(Index)是帮助 MySQL 高效获取数据的数据结构。 优点 ① 类似图书馆建书目索引，提高数据检索的效率，降低数据库的 I...","head":[["meta",{"property":"og:url","content":"https://doc.bt66.cn/backend/database/advanced/data_structure_of_index.html"}],["meta",{"property":"og:title","content":"索引的数据结构"}],["meta",{"property":"og:description","content":"为什么使用索引 无索引数据读取.png无索引数据读取.png 假如给数据使用二叉树这样的数据结构进行存储，如下图所示： 有索引数据读取.png有索引数据读取.png 索引的优缺点 索引概述 MySQL 官方对索引的定义为：索引(Index)是帮助 MySQL 高效获取数据的数据结构。 优点 ① 类似图书馆建书目索引，提高数据检索的效率，降低数据库的 I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-22T09:18:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Zhang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-07-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-22T09:18:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引的数据结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-22T09:18:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Zhang\\"}]}"]]},"headers":[{"level":2,"title":"为什么使用索引","slug":"为什么使用索引","link":"#为什么使用索引","children":[]},{"level":2,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[{"level":3,"title":"索引概述","slug":"索引概述","link":"#索引概述","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"InnoDB 中索引的推演","slug":"innodb-中索引的推演","link":"#innodb-中索引的推演","children":[{"level":3,"title":"索引之前的查找","slug":"索引之前的查找","link":"#索引之前的查找","children":[]},{"level":3,"title":"设计索引","slug":"设计索引","link":"#设计索引","children":[]},{"level":3,"title":"常见索引概念","slug":"常见索引概念","link":"#常见索引概念","children":[]},{"level":3,"title":"InnoDB 的 B+树索引的注意事项","slug":"innodb-的-b-树索引的注意事项","link":"#innodb-的-b-树索引的注意事项","children":[]}]},{"level":2,"title":"MyISAM 中的索引方案","slug":"myisam-中的索引方案","link":"#myisam-中的索引方案","children":[{"level":3,"title":"MyISAM 索引的原理","slug":"myisam-索引的原理","link":"#myisam-索引的原理","children":[]},{"level":3,"title":"MyISAM 和 InnoDB 对比","slug":"myisam-和-innodb-对比","link":"#myisam-和-innodb-对比","children":[]}]},{"level":2,"title":"索引的代价","slug":"索引的代价","link":"#索引的代价","children":[]},{"level":2,"title":"MySQL 数据结构选择的合理性","slug":"mysql-数据结构选择的合理性","link":"#mysql-数据结构选择的合理性","children":[{"level":3,"title":"全表遍历","slug":"全表遍历","link":"#全表遍历","children":[]},{"level":3,"title":"Hash 结构","slug":"hash-结构","link":"#hash-结构","children":[]},{"level":3,"title":"二叉搜索树","slug":"二叉搜索树","link":"#二叉搜索树","children":[]},{"level":3,"title":"AVL 树","slug":"avl-树","link":"#avl-树","children":[]},{"level":3,"title":"B-Tree","slug":"b-tree","link":"#b-tree","children":[]},{"level":3,"title":"B+Tree","slug":"b-tree-1","link":"#b-tree-1","children":[]},{"level":3,"title":"R 树","slug":"r-树","link":"#r-树","children":[]},{"level":3,"title":"附录：算法的时间复杂度","slug":"附录-算法的时间复杂度","link":"#附录-算法的时间复杂度","children":[]}]}],"git":{"createdTime":1687935470000,"updatedTime":1690017505000,"contributors":[{"name":"ynzxj","email":"ynzxj@qq.com","commits":6}]},"readingTime":{"minutes":23.36,"words":7007},"filePathRelative":"backend/database/advanced/data_structure_of_index.md","localizedDate":"2023年7月12日","autoDesc":true}');export{P as comp,Q as data};
