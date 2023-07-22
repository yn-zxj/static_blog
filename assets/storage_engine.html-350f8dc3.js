import{_ as d,j as r,o as p,c,f as t,i as n,g as s,w as e,a as o}from"./app-6e29f1c2.js";const l="/assets/show_engines-836936ac.png",i={},u=o(`<h2 id="查看存储引擎" tabindex="-1"><a class="header-anchor" href="#查看存储引擎" aria-hidden="true">#</a> 查看存储引擎</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> engines<span class="token punctuation">;</span>
</code></pre></div><figure><img src="`+l+`" alt="查看存储引擎.png" tabindex="0" loading="lazy"><figcaption>查看存储引擎.png</figcaption></figure><h2 id="设置系统默认的存储引擎" tabindex="-1"><a class="header-anchor" href="#设置系统默认的存储引擎" aria-hidden="true">#</a> 设置系统默认的存储引擎</h2><p>① 查看默认的存储引擎</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%storage_engine%&#39;</span><span class="token punctuation">;</span>

<span class="token operator">+</span><span class="token comment">----------------------------------+--------+</span>
<span class="token operator">|</span> Variable_name                    <span class="token operator">|</span> <span class="token keyword">Value</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+--------+</span>
<span class="token operator">|</span> default_storage_engine           <span class="token operator">|</span> <span class="token keyword">InnoDB</span> <span class="token operator">|</span>
<span class="token operator">|</span> default_tmp_storage_engine       <span class="token operator">|</span> <span class="token keyword">InnoDB</span> <span class="token operator">|</span>
<span class="token operator">|</span> disabled_storage_engines         <span class="token operator">|</span>        <span class="token operator">|</span>
<span class="token operator">|</span> internal_tmp_disk_storage_engine <span class="token operator">|</span> <span class="token keyword">InnoDB</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------------------------------+--------+</span>
<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 或</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> @<span class="token variable">@default_storage_engine</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------------+</span>
<span class="token operator">|</span> @<span class="token variable">@default_storage_engine</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------+</span>
<span class="token operator">|</span> <span class="token keyword">InnoDB</span>                   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p>② 修改默认的存储引擎</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> default_storage_engine <span class="token operator">=</span> MyISAM<span class="token punctuation">;</span>

<span class="token comment"># 或 my.cnf 配置文件</span>
default_storage_engine<span class="token operator">=</span>MyISAM<span class="token punctuation">;</span>
systemctl restart mysqld<span class="token punctuation">.</span>service <span class="token comment"># 重启服务</span>
</code></pre></div><h2 id="设置表的存储引擎" tabindex="-1"><a class="header-anchor" href="#设置表的存储引擎" aria-hidden="true">#</a> 设置表的存储引擎</h2><h3 id="创建表时指定存储引擎" tabindex="-1"><a class="header-anchor" href="#创建表时指定存储引擎" aria-hidden="true">#</a> 创建表时指定存储引擎</h3><p>如果建表之前没指定存储引擎，就是使用默认的存储引擎。如果需要显示的指定表的存储引擎，如下：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_name <span class="token punctuation">(</span>
  建表语句<span class="token punctuation">;</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
</code></pre></div><h3 id="修改表的存储引擎" tabindex="-1"><a class="header-anchor" href="#修改表的存储引擎" aria-hidden="true">#</a> 修改表的存储引擎</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
</code></pre></div><h2 id="引擎介绍" tabindex="-1"><a class="header-anchor" href="#引擎介绍" aria-hidden="true">#</a> 引擎介绍</h2><h3 id="innodb-引擎-具备外键支持功能的事务存储引擎" tabindex="-1"><a class="header-anchor" href="#innodb-引擎-具备外键支持功能的事务存储引擎" aria-hidden="true">#</a> InnoDB 引擎：具备外键支持功能的事务存储引擎</h3>`,16),h=t("u",null,"并在 MySQL 5.5 及之后，默认作为数据的存储引擎",-1),k=t("br",null,null,-1),b=t("mark",null,"默认事务型引擎",-1),_=t("br",null,null,-1),m=t("br",null,null,-1),y=t("mark",null,"除非有非常特别的原因需要使用其它的存储引擎，否则应该优先考虑使用 InnoDB 存储引擎",-1),g=t("br",null,null,-1),B=t("br",null,null,-1),I=t("br",null,null,-1),M=t("br",null,null,-1),D=t("mark",null,"为处理巨大数据量的最大性能设计",-1),f=t("br",null,null,-1),S=t("br",null,null,-1),A=t("code",null,".frm",-1),w=t("code",null,".par",-1),x=t("code",null,".trn",-1),E=t("code",null,".isl",-1),q=t("code",null,".db.opt",-1),L=t("br",null,null,-1),v=t("mark",null,"对内存要求较高",-1),C=t("h3",{id:"myisam-引擎-主要的非事务处理存储引擎",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#myisam-引擎-主要的非事务处理存储引擎","aria-hidden":"true"},"#"),n(" MyISAM 引擎：主要的非事务处理存储引擎")],-1),Q=t("mark",null,"它不支持事务、行级锁、外键",-1),N=t("br",null,null,-1),T=t("br",null,null,-1),V=t("code",null,"SELECT",-1),R=t("code",null,"INSERT",-1),O=t("br",null,null,-1),Y=t("code",null,"COUNT(*)",-1),F=t("br",null,null,-1),G=t("br",null,null,-1),U=t("br",null,null,-1),z=t("br",null,null,-1),H=t("br",null,null,-1),K=o(`<h3 id="archive-引擎-用于数据存档" tabindex="-1"><a class="header-anchor" href="#archive-引擎-用于数据存档" aria-hidden="true">#</a> Archive 引擎：用于数据存档</h3><table><thead><tr><th>特征</th><th>支持情况</th></tr></thead><tbody><tr><td>B 树索引</td><td>不支持</td></tr><tr><td>备份 时间点恢复</td><td>支持</td></tr><tr><td>集群数据库支持</td><td>不支持</td></tr><tr><td>聚集索引</td><td>不支持</td></tr><tr><td>压缩数据</td><td>支持</td></tr><tr><td>数据缓存</td><td>不支持</td></tr><tr><td>加密数据(加密功能在服务器中实现)</td><td>支持</td></tr><tr><td>外键支持</td><td>不支持</td></tr><tr><td>全文检索索引</td><td>不支持</td></tr><tr><td>地理空间数据类型支持</td><td>支持</td></tr><tr><td>地理空间索引支持</td><td>不支持</td></tr><tr><td>哈希索引</td><td>不支持</td></tr><tr><td>索引缓存</td><td>不支持</td></tr><tr><td>锁粒度</td><td>行锁</td></tr><tr><td>MVCC</td><td>不支持</td></tr><tr><td>存储限制</td><td>没有任何限制</td></tr><tr><td>交易</td><td>不支持</td></tr><tr><td>更新数据字典的统计信息</td><td>支持</td></tr></tbody></table><h3 id="blackhole-引擎-丢弃写操作-读操作会返回空内容" tabindex="-1"><a class="header-anchor" href="#blackhole-引擎-丢弃写操作-读操作会返回空内容" aria-hidden="true">#</a> Blackhole 引擎：丢弃写操作，读操作会返回空内容</h3><h3 id="csv-引擎-存储数据时-以逗号分隔各个数据项" tabindex="-1"><a class="header-anchor" href="#csv-引擎-存储数据时-以逗号分隔各个数据项" aria-hidden="true">#</a> CSV 引擎：存储数据时，以逗号分隔各个数据项</h3><p>案例分析：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test <span class="token punctuation">(</span>i <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> c <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> CSV<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.06</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;record one&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;record two&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.05</span> sec<span class="token punctuation">)</span> Records: <span class="token number">2</span> Duplicates: <span class="token number">0</span> <span class="token keyword">Warnings</span>: <span class="token number">0</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> test<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---+------------+</span>
<span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> record one <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> record two <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---+------------+</span>
<span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre></div><p> 创建 CSV 表还会创建相应的元文件，用于<mark>存储表的状态</mark>和<mark>表中存在的行数</mark>。在文件的名称与表的名称相同，后缀为<code>CSM</code>，上面的表则会创建出<code>test.CSV</code>和<code>test.CSM</code>两个文件。</p><p> 如果检查<code>test.CSV</code>通过执行上述语句创建的数据库目录中的文件，打开如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&quot;1&quot;,&quot;record one&quot;
&quot;2&quot;,&quot;record two&quot;
</code></pre></div><h3 id="memory-引擎-置于内存的表" tabindex="-1"><a class="header-anchor" href="#memory-引擎-置于内存的表" aria-hidden="true">#</a> Memory 引擎：置于内存的表</h3><p><strong>概述</strong>：</p><p> Memory 采用的逻辑介质是内存，响应速度很快，但是当 mysqld 守护进程崩溃的时候数据就会丢失。另外，要求存储的数据是数据长度不变的格式，比如：Blob 和 Text 类型的数据不可用(长度不固定的)。</p><p> <strong>主要特征</strong>：</p><p>  ① Memory 同时支持哈希(Hash)索引和 B+树索引；<br>   ② Memory 表至少比 MyISAM 要快一个数量级；<br>   ③ Memory 表的大小是受限制的，表的大小主要取决于两个参数，分别是<code>max_rows</code>和<code>max_heap_table_size</code>。其中前者可以在创建表时指定；后者的大小默认是 16MB，不过可以按需进行扩大；<br>   ④ 数据文件与索引文件分开存储；<br>   ⑤ 缺点：其数据易丢失，生命周期短。基于这个缺陷，选择 Memory 存储引擎时需要特别小心。</p><p><strong>使用 Memory 存储引擎的场景</strong>：</p><p>  ① 目标数据比较小，而且非常频繁的进行访问。在内存中存放数据，如果太大的数据会造成内存溢出，可以通过修改<code>max_heap_table_size</code>控制表的大小；<br>   ② 如果数据是临时的，而且必须立即可用，那么就可以放在内存中；<br>   ③ 存储在 Memory 表中的数据如果突然间丢失的话也没有太大的关系。</p><h3 id="federated-引擎-访问远程表" tabindex="-1"><a class="header-anchor" href="#federated-引擎-访问远程表" aria-hidden="true">#</a> Federated 引擎：访问远程表</h3><p> Federated 引擎是访问其它 MySQL 服务器的一个代理，尽管该引擎看起来提供了一种很好的跨服务器的灵活性，但也经常带来问题，因此<mark>默认是禁用的</mark>。</p><h3 id="merge-引擎-管理多个-myisam-表构成的表集合" tabindex="-1"><a class="header-anchor" href="#merge-引擎-管理多个-myisam-表构成的表集合" aria-hidden="true">#</a> Merge 引擎：管理多个 MyISAM 表构成的表集合</h3><h3 id="ndm-引擎-mysql-集群专用存储引擎" tabindex="-1"><a class="header-anchor" href="#ndm-引擎-mysql-集群专用存储引擎" aria-hidden="true">#</a> NDM 引擎：MySQL 集群专用存储引擎</h3><p> 也叫做<code>NDM Cluster</code>存储引擎，主要用于 MySQL Cluster 分布式集群环境，类似于 Oracle 的 RAC 集群。</p><h3 id="引擎对比" tabindex="-1"><a class="header-anchor" href="#引擎对比" aria-hidden="true">#</a> 引擎对比</h3><p>MySQL 中同一个数据库，不同的表可以选择不同的存储引擎，如下表对常用存储引擎做出了对比。</p><table><thead><tr><th>特点</th><th>MyISAM</th><th>InnoDB</th><th>Memory</th><th>Merge</th><th>NDB</th></tr></thead><tbody><tr><td>存储限制</td><td>有</td><td>64TB</td><td>有</td><td>没有</td><td>有</td></tr><tr><td>事务安全</td><td>-</td><td>支持</td><td>-</td><td>-</td><td>-</td></tr><tr><td>锁机制</td><td>表锁</td><td>行锁</td><td>表锁</td><td>表锁</td><td>行锁</td></tr><tr><td>B 树索引</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>哈希索引</td><td>-</td><td>-</td><td>支持</td><td>-</td><td>支持</td></tr><tr><td>全文索引</td><td>支持</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>集群索引</td><td>-</td><td>支持</td><td>-</td><td>-</td><td>-</td></tr><tr><td>数据缓存</td><td>-</td><td>支持</td><td>支持</td><td>-</td><td>支持</td></tr><tr><td>索引缓存</td><td>只缓存索引</td><td>缓存索引及真是数据，对内存要求较高</td><td>支持</td><td>支持</td><td>-</td></tr><tr><td>数据可压缩</td><td>支持</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>空间使用</td><td>低</td><td>高</td><td>N/A</td><td>低</td><td>低</td></tr><tr><td>内存使用</td><td>低</td><td>高</td><td>中等</td><td>低</td><td>高</td></tr><tr><td>批量插入的速度</td><td>高</td><td>低</td><td>高</td><td>高</td><td>高</td></tr><tr><td>支持外键</td><td>-</td><td>支持</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>我们最常用的就是 InnoDB 和 MyISAM，有时会提一下 Memory。其中 InnoDB 是 MySQL 的默认存储引擎(MySQL 5.5 开始)</p></blockquote><h2 id="myisam-和-innodb" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb" aria-hidden="true">#</a> MyISAM 和 InnoDB</h2><p>很多人对 InnoDB 和 MyISAM 的取舍存在疑问，到底选择哪个比较好？</p><blockquote><p>MySQL 5.5 之前的默认存储引擎是 MyISAM，之后改成了 InnoDB。</p></blockquote><table><thead><tr><th>对比项</th><th>MyISAM</th><th>InnoDB</th></tr></thead><tbody><tr><td>外键</td><td>不支持</td><td>支持</td></tr><tr><td>事务</td><td>不支持</td><td>支持</td></tr><tr><td>行表锁</td><td>表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作</td><td>行锁，操作某一行记录，不对其它行产生影响，适合高并发的操作</td></tr><tr><td>缓存</td><td>只缓存索引，不缓存真实数据</td><td>不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响</td></tr><tr><td>自带系统表使用</td><td>Y</td><td>N</td></tr><tr><td>关注点</td><td>性能：节省资源、消耗少、简单业务</td><td>事务：并发写、事务、更大资源</td></tr><tr><td>默认安装</td><td>Y</td><td>Y</td></tr><tr><td>默认使用</td><td>N</td><td>Y</td></tr></tbody></table><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>① Percona 为 MySQL 数据库服务器进行了改进，在功能和性能上较 MySQL 有很显著的提升；<br> ② 该版本提升了在高负载情况下的 InnoDB 的性能，为 DBA 提供一些非常有用的性能诊断工具；另外有更多的参数和命令来控制服务器行为；<br> ③ 该公司新建了一款存储引擎叫<code>Xtradb</code>完全可以替代<code>InnoDB</code>，并且在性能和并发上做得更好；<br> ④ 阿里巴巴大部分 MySQL 数据库其实使用的 percona 的原型加以修改。</p></div><h2 id="课外补充" tabindex="-1"><a class="header-anchor" href="#课外补充" aria-hidden="true">#</a> 课外补充</h2><h3 id="innodb-表优势" tabindex="-1"><a class="header-anchor" href="#innodb-表优势" aria-hidden="true">#</a> InnoDB 表优势</h3><p>  InnoDB 存储引擎在实际应用中拥有诸多优势，比如操作便利、提高了数据库的性能、维护成本低等。如果由于硬件或软件的原因导致服务器崩溃，那么在重启服务器之后不需要进行额外的操作。InnoDB 崩溃恢复功能自动将之前提交的内容定型，然后撤销没有提交的进程，重启之后继续从崩溃点开始执行。<br>   InnoDB 存储引擎在主内存中维护缓冲池，高频率使用的数据将在内存中直接被处理。这种缓存方式应用于多种信息，加速了处理进程。<br>   在专用服务器上，物理内存中高达 80%的部分被应用于缓冲池。如果需要将数据插入不同的表中，可以设置外键加强数据的完整性。更新或者删除数据，关联数据将会自动更新或删除。如果视图将数据插入从表，但在主表中没有对应的数据，插入的数据将被自动移除。如果磁盘或内存中数据出现崩溃，在使用脏数据之前，检验机制会发出警告。当每个表的主键都设置合理时，与这些列有关的操作会被自动优化。插入、更新和删除操作通过做改变缓冲自动机制进行优化。<mark>InnoDB 不仅支持当前读写，也会缓冲改变的数据到数据流磁盘</mark>。<br>   InnoDB 的性能优势不只存在于长时运行查询的大型表。在同一列多次被查询时，自适应哈希索引会提高查询的速度。使用 InnoDB 可以压缩表和相关的索引，可以<mark>在不影响性能和可用性的情况下创建或删除索引</mark>。对于大型文本和 Blob 数据，使用动态行形式，这种存储布局更高效。通过查询 information_schema 库中的表可以监控存储引擎的内部工作。在同一个语句中，InnoDB 表可以与其它存储引擎表混用。即使有些操作系统限制文件大小为 2GB，InnoDB 仍然可以处理。当处理大数据量时，InnoDB 兼顾 CPU，以达到最大性能。</p><h3 id="innodb-和-acid-模型" tabindex="-1"><a class="header-anchor" href="#innodb-和-acid-模型" aria-hidden="true">#</a> InnoDB 和 ACID 模型</h3><p>  ACID 模型是一系列数据库设计规则，这些规则着重强调可靠性，而可靠性对于商业数据和任务关键型应用非常重要。MySQL 包含类似 InnoDB 存储引擎的组件，与 ACID 模型紧密相连，这样出现意外时，数据不会崩溃，结果不会失真。如果依赖 ACID 模型，可以不使用一致性检查和崩溃恢复机制。如果拥有额外的软件保护，及可靠的硬件或者应用可以容忍一小部分的数据丢失和不一致，可以将 MySQL 设置调整为只依赖部分 ACID 特性，以达到更高的性能。下面讲解 InnoDB 存储引擎与 ACID 模型相同作用的四个方面。</p><p> ① <strong><u>原子方面</u></strong>: ACID 的原子方面主要涉及 InnoDB 事务，与 MySQL 相关的特性主要包括：<br>   - 自动提交设置<br>   - commit 语句<br>   - rollback 语句<br>   - 操作 information_schema 库中的表数据</p><p> ② <strong><u>一致性方面</u></strong>: ACID 模型的一致性主要涉及保护数据不崩溃的内部 InnoDB 处理过程，与 MySQL 相关的特性主要包括：<br>   - InnoDB 双写缓存<br>   - InnoDB 崩溃恢复</p><p> ③ <strong><u>隔离方面</u></strong>: 隔离是应用于事务的级别，与 MySQL 相关的特性主要包括：<br>   - 自动提交设置<br>   - set isolation level 语句<br>   - InnoDB 锁的低级别信息</p><p> ④ <strong><u>耐久性方面</u></strong>: ACID 模型的耐久性主要涉及与硬件配置相互影响的 MySQL 软件特性。由于硬件复杂多样化，耐久性方面没有具体的规则可循。与 MySQL 相关的特性有：<br>   - InnoDB 双写缓存，通过 innodb_doublewrite 配置项配置<br>   - 配置项 innodb_flush_log_trx_commit<br>   - 配置项 sync_binlog<br>   - 配置项 innodb_file_per_table<br>   - 存储设备的写入缓存<br>   - 存储设备的备用电池缓存<br>   - 运行 MySQL 的操作系统<br>   - 持续的电力供应<br>   - 备份策略<br>   - 对分布式或托管的应用，最主要的在于硬件设备的地点以及网络情况</p><h3 id="innodb-架构" tabindex="-1"><a class="header-anchor" href="#innodb-架构" aria-hidden="true">#</a> InnoDB 架构</h3><p>(01) 缓冲池<br>   缓冲池是主内存中的一部分空间，用来缓存已使用的表和索引数据。缓冲池使得经常被使用的数据能够直接在内存中获得，从而提高速度。</p><p>(02️) 更改缓存<br>   更改缓存是一个特殊的数据结构，当受到影响的索引页不在缓存中时，更改缓存会缓存辅助索引页的更改。索引页被其他读取操作时会加载到缓冲池，缓存的更改内容就是被合并。不同于集群索引，辅助索引并非独一无二的。当系统大部分闲置时，清除操作会定期运行，将更新的索引页刷入磁盘。更新缓存合并期间，可能会大大降低查询的性能。在内存中，更新缓存占用一部分 InnoDB 缓冲池。在磁盘中，更新缓存是系统表空间的一部分。更新缓存的数据有 innodb_change_buffering 配置项管理。</p><p>(03️) 自适应哈希索引<br>   自适应哈希索引将负载和足够的内存结合起来，使得 InnoDB 像内存数据库一样运行，不需要降低事务上的性能或可靠性。这个特性通过 innodb_adaptive_hash_index 配置项管理，或者通过<code>-- skip-innodb_adaptive_hash_index</code>命令行在服务启动时关闭。</p><p>(04️) 重做日志缓存<br>   重做日志缓存存放要放入重做日志的数据。重做日志缓存大小通过 innodb_log_buffer_size 配置项配置。重做日志缓存会定期地将日志文件刷入磁盘。大型的重做日志缓存使得大型事务能够正常运行而不需要写入磁盘。</p><p>(05️) 系统表空间<br>   系统表空间包括 InnoDB 数据字典、双写缓存、更新缓存和撤销日志，同时也包括表和索引数据。多表共享，系统表空间被视为共享表空间。</p><p>(06️) 双写缓存<br>   双写缓存位于系统表空间中，用于写入从缓存池刷新的数据页。只有在刷新并写入双写缓存后，InnoDB 才会将数据页写入合适的位置。</p><p>(07️) 撤销日志<br>   撤销日志是一系列与事务相关的撤销记录的集合，包含如何撤销事务最近的更改。如果其他事务要查询原始数据，可以从撤销日志记录中追溯未更改的数据。撤销日志存在于撤销日志片段中，这些片段包含于回滚片段中。</p><p>(08️) 每个表一个文件的表空间<br>   每一个表一个文件的表空间是指每个单独的表空间创建在自身的数据文件中，而不是系统表空间中。这个功能通过<code>innodb_file_per_table</code>配置项开启。每个表空间由一个单独的<code>.ibd</code>数据文件代表，该文件默认被创建在数据库目录中。</p><p>(09️) 通用表空间<br>   使用<code>create tablespace</code>语法创建共享的 InnoDB 表空间。通用表空间可以创建在 MySQL 数据目录之外能够管理多个表并支持所有行格式的表。</p><p>(10️) 撤销表空间<br>   撤销表空间由一个或多个包含撤销日志的文件组成。撤销表空间的数量由<code>innodb_undo_tablespaces</code>配置项配置。</p><p>(11️) 临时表空间<br>   用户创建的临时表和基于磁盘的内部临时表都创建于临时表空间。<code>innodb_temp_data_file_path</code>配置项定义了相关的路径、名称、大小和属性。如果该值为空，默认会在<code>innodb_data_home_dir</code>变量指定的目录下创建一个自动扩展的数据文件。</p><p>(12️) 重做日志<br>   重做日志是基于磁盘的数据结构，在崩溃恢复期间使用，用来纠正数据。正常操作期间，重做日志会将请求数据进行编码，这些请求会改变 InnoDB 表数据。遇到意外崩溃后，未完成的更改会自动在初始化期间重新进行。</p>`,53);function P(j,W){const a=r("RouterLink");return p(),c("div",null,[u,t("p",null,[n(" ① MySQL 从 3.23.34a 开始就包含 InnoDB 存储引擎，"),h,n("；"),k,n("  ② InnoDB 是 MySQL 的"),b,n("，它被设计用来处理大量的短期(short-lived)事务。可以确保事务的完整提交(Commit)和回滚(Rollback)；"),_,n("  ③ 除了增加和查询外，还需要更新、删除操作，那么应优先选择 InnoDB 存储引擎；"),m,n("  ④ "),y,n("；"),g,n("  ⑤ 数据文件结构：详情参考："),s(a,{to:"/backend/database/advanced/dir_of_mysql.html#_2-3-%E8%A1%A8%E5%9C%A8%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E8%A1%A8%E7%A4%BA"},{default:e(()=>[n("MySQL 的数据目录-InnoDB 存储引擎模式")]),_:1}),B,n("   - 表名.frm 存储表结构(MySQL 8.0 时，合并在表名.ibd 中)"),I,n("   - 表名.ibd 存储数据和索引"),M,n("  ⑥ InnoDB 是"),D,n("；"),f,n("  ⑦ 对比 MyISAM 的存储引擎，InnoDB 写的处理效率差一些，并且会占用更多的磁盘空间以保存数据和索引；"),S,n("   - 在以前的版本中，字典数据以元数据文件、非事务表等来存储。现在这些元数据文件被删除了，比如："),A,n("、"),w,n("、"),x,n("、"),E,n("、"),q,n("等在 MySQL 8.0 中不存在了；"),L,n("  ⑧ MyISAM 只缓存索引，不缓存真实数据；InnoDB 不仅缓存索引还要缓存真实数据，"),v,n("，而且内存大小对性能有决定性的影响；")]),C,t("p",null,[n(" ① MyISAM 提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但"),Q,n("，有一个毫无疑问的缺陷就是崩溃后无法安全恢复；"),N,n("  ② MySQL 5.5 之前默认使用的存储引擎；"),T,n("  ③ 优势是访问的速度快，对事务完整性没有要求或以"),V,n("、"),R,n("为主的应用；"),O,n("  ④ 针对数据统计有额外的常数存储，故而"),Y,n("的查询效率很高；"),F,n("  ⑤ 数据文件结构：详情参考："),s(a,{to:"/backend/database/advanced/dir_of_mysql.html#_2-3-%E8%A1%A8%E5%9C%A8%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E8%A1%A8%E7%A4%BA"},{default:e(()=>[n("MySQL 的数据目录-InnoDB 存储引擎模式")]),_:1}),G,n("   - 表名.frm 存储表结构"),U,n("   - 表名.MYD 存储数据"),z,n("   - 表名.MYI 存储索引"),H,n("  ⑥ 应用场景：只读应用或者以读为主的业务")]),K])}const J=d(i,[["render",P],["__file","storage_engine.html.vue"]]);export{J as default};
