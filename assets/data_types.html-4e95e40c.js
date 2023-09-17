import{_ as t,j as p,o,c,f as s,i as n,g as e,a as l}from"./app-bf7bb031.js";const r="/assets/linked_list-a090f665.png",u={},k={href:"https://redis.io/docs/data-types/",target:"_blank",rel:"noopener noreferrer"},i=s("br",null,null,-1),m={href:"https://mrjokersince1997.github.io/My-Notes/#/%E5%85%B6%E5%AE%83/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>① 在 Redis 中单个指令都是原子性操作，通过指令操作 Redis 数据时无需担心线程安全问题。<br> ② Redis 以 key-value 的形式保存数据：key 值一定为 string 类型，而 value 值支持多种类型。</p><h3 id="存储区域" tabindex="-1"><a class="header-anchor" href="#存储区域" aria-hidden="true">#</a> 存储区域</h3><p>  Redis 将数据存储分为多个相互独立的区域，将 Redis 操作局限在自己的存储区域内。通常划分为 16 个（编号 0-15），默认使用编号 0 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> <span class="token number">1</span>          <span class="token comment"># 改用 1 号存储区域</span>

dbsize            <span class="token comment"># 返回当前区域 key 数量</span>
move key <span class="token number">2</span>        <span class="token comment"># 将当前 key 迁移到 2 号存储区域</span>
flushdb           <span class="token comment"># 清空当前存储区域(慎重)</span>
flushall          <span class="token comment"># 清空全部存储区域(慎重)</span>
</code></pre></div><h3 id="key-操作" tabindex="-1"><a class="header-anchor" href="#key-操作" aria-hidden="true">#</a> key 操作</h3><h4 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>del key                 <span class="token comment"># 删除 key</span>
exists key              <span class="token comment"># 判断是否存在 key</span>
<span class="token builtin class-name">type</span> key                <span class="token comment"># 返回 key 对应的 value 类型</span>

<span class="token function">rename</span> key newkey       <span class="token comment"># 重命名</span>
renamenx key newkey     <span class="token comment"># 重命名（返回 1），新名称已存在则失败（返回 0）</span>
<span class="token function">sort</span>                    <span class="token comment"># 对 key 排序</span>
</code></pre></div><h4 id="时效性操作" tabindex="-1"><a class="header-anchor" href="#时效性操作" aria-hidden="true">#</a> 时效性操作</h4><p>Redis 中可以为 key 设置有效期，key 过期后会由 Redis 执行删除策略回收内存空间。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>expire key <span class="token number">10</span>           <span class="token comment"># key 10s 内有效</span>
expireat key <span class="token number">1355292000</span> <span class="token comment"># key 截至时间戳有效</span>
persist key             <span class="token comment"># key 永久有效</span>

ttl key                 <span class="token comment"># 返回 key 剩余有效时间，若不存在返回 -2 ，永久返回 -1</span>
</code></pre></div><h4 id="查询操作" tabindex="-1"><a class="header-anchor" href="#查询操作" aria-hidden="true">#</a> 查询操作</h4><p>Redis 支持查询存储区域内含有的 key，且允许使用以下通配符：</p><p><code>-</code> 表示任意数量字符<br><code>?</code> 表示任意一个字符<br><code>[]</code> 表示一个指定字符</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keys *                <span class="token comment"># 查询所有 key</span>
keys user:*           <span class="token comment"># 查询所有 user 的 key</span>
keys id:75??          <span class="token comment"># 查询 ID 为 7500-7599 的 key</span>
keys id:7<span class="token punctuation">[</span><span class="token number">2345</span><span class="token punctuation">]</span><span class="token number">55</span>     <span class="token comment"># 查询 ID 为 7255/7355/7455/7555 的 key</span>
</code></pre></div><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串(String)</h2><p>  string 是 redis 最基本的数据类型，一个 key 对应一个 value。它是二进制安全的，意思是 redis 的 string 可以包含任何数据，比如 jpg 图片或者序列化对象等；一个 redis 中字符串 value 最多可以是 512M。</p><h3 id="最常用" tabindex="-1"><a class="header-anchor" href="#最常用" aria-hidden="true">#</a> 最常用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>SET key value <span class="token punctuation">[</span>NX <span class="token operator">|</span> XX<span class="token punctuation">]</span> <span class="token punctuation">[</span>GET<span class="token punctuation">]</span> <span class="token punctuation">[</span>EX seconds <span class="token operator">|</span> PX milliseconds <span class="token operator">|</span>
  EXAT unix-time-seconds <span class="token operator">|</span> PXAT unix-time-milliseconds <span class="token operator">|</span> KEEPTTL<span class="token punctuation">]</span>
</code></pre></div><p><strong>参数说明</strong>：<br>  <code>EX seconds</code>：以秒为单位设置过期时间<br>  <code>PX milliseconds</code>：以毫秒为单位设置过期时间<br>  <code>EXAT unix-time-seconds</code>：设置以秒为单位的 UNIX 时间戳所对应的时间为过期时间<br>  <code>PXAT unix-time-milliseconds</code>：设置以毫秒为单位的 UNIX 时间戳所对应的时间为过期时间<br>  <code>KEEPTTL</code>：保留设置前指定键的生存时间<br>  <code>NX</code>：键不存在的时候设置键值<br>  <code>XX</code>：键存在的时候设置键值<br>  <code>GET</code>：返回指定键原本的值，若键不存在时返回<code>nil</code></p><blockquote><p><code>SET</code>命令使用 EX、PX、NX 参数，其效果等同于 SETEX、PSETEX、SETNX 命令。根据官方文档的描述，未来的版本中 SETEX、PSETEX、SETNX 命令可能会被淘汰。</p></blockquote><hr><p><strong>示例</strong>：</p><details class="hint-container details"><summary>展开查看</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置name的值为 LiHua</span>
<span class="token builtin class-name">set</span> name LiHua            --<span class="token operator">&gt;</span> OK
<span class="token comment"># 获取name的值</span>
get name                  --<span class="token operator">&gt;</span> <span class="token string">&quot;LiHua&quot;</span>
<span class="token comment"># 若name不存在设置其值为Zhangsan(因为存在，返回为nil)</span>
<span class="token builtin class-name">set</span> name Zhangsan NX      --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token comment"># 若name存在设置其值为Zhangsan</span>
<span class="token builtin class-name">set</span> name Zhangsan XX      --<span class="token operator">&gt;</span> OK
<span class="token comment"># 获取name的值(修改成功)</span>
get name                  --<span class="token operator">&gt;</span> <span class="token string">&quot;Zhangsan&quot;</span>
<span class="token comment"># 设置age为23且30s后过期</span>
<span class="token builtin class-name">set</span> age <span class="token number">23</span> EX <span class="token number">30</span>          --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">23</span>
<span class="token comment"># 查看剩余有效时间(-2 过期)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token comment"># 设置age为20且300s后过期</span>
<span class="token builtin class-name">set</span> age <span class="token number">20</span> EX <span class="token number">300</span>         --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">296</span>
<span class="token comment"># 若age存在设置其值为20</span>
<span class="token builtin class-name">set</span> age <span class="token number">20</span> XX             --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间(-1 用不过期，原来的过期时间没了)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>
<span class="token comment"># 若age存在设置其值为21(假设set age 20 EX 300，设置了300s过期)</span>
<span class="token builtin class-name">set</span> age <span class="token number">21</span> XX KEEPTTL     --<span class="token operator">&gt;</span> OK
<span class="token comment"># 查看剩余有效时间(前面设置的过期时间被保留)</span>
ttl age                   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">233</span>
</code></pre></div></details><h3 id="同时设置-获取多个键值" tabindex="-1"><a class="header-anchor" href="#同时设置-获取多个键值" aria-hidden="true">#</a> 同时设置/获取多个键值</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
MSET key value <span class="token punctuation">[</span>key value <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
MGET key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> mset k1 hello k2 world
OK
redis<span class="token operator">&gt;</span> mget k1 k2 k3
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>

<span class="token comment"># 语法</span>
MSETNX key value <span class="token punctuation">[</span>key value <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> mset k1 hello k2 world
OK
redis<span class="token operator">&gt;</span> msetnx k1 hi k4 redis <span class="token comment"># k1 上面已经存在了</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span> <span class="token comment"># 失败</span>

redis<span class="token operator">&gt;</span> msetnx k3 learn k4 redis <span class="token comment"># k3 k4均不存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span> <span class="token comment"># 成功</span>
</code></pre></div><h3 id="获取指定区间范围内的值" tabindex="-1"><a class="header-anchor" href="#获取指定区间范围内的值" aria-hidden="true">#</a> 获取指定区间范围内的值</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
SETRANGE key offset value
GETRANGE key start end

redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> k1 <span class="token string">&quot;Hello World&quot;</span>
OK
redis<span class="token operator">&gt;</span> setrange k1 <span class="token number">6</span> Redis
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">11</span>
redis<span class="token operator">&gt;</span> get k1
<span class="token string">&quot;Hello Redis&quot;</span>

redis<span class="token operator">&gt;</span> getrange k1 <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token comment"># 获取全部</span>
<span class="token string">&quot;Hello Redis&quot;</span>
redis<span class="token operator">&gt;</span> getrange k1 <span class="token number">0</span> <span class="token number">8</span> <span class="token comment"># 字符串截取</span>
<span class="token string">&quot;Hello Red&quot;</span>
</code></pre></div><h3 id="数值增减" tabindex="-1"><a class="header-anchor" href="#数值增减" aria-hidden="true">#</a> 数值增减</h3><blockquote><p>注意：一定要是数字才能进行加减<br> 应用场景：阅读数、点赞数等等</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
INCR key                <span class="token comment"># 递增</span>
INCRBY key increment    <span class="token comment"># 增加指定的整数</span>
DECR key                <span class="token comment"># 递减</span>
DECRBY key decrement    <span class="token comment"># 减少指定的整数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> num <span class="token number">3</span>      --<span class="token operator">&gt;</span> OK            <span class="token comment"># 给 num 初始值3</span>
redis<span class="token operator">&gt;</span> incr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>   <span class="token comment"># 递增 num + 1</span>
redis<span class="token operator">&gt;</span> incr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>   <span class="token comment"># 递增 num + 1</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> incrby num <span class="token number">10</span>  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span>  <span class="token comment"># 给 num + 10</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;15&quot;</span>
redis<span class="token operator">&gt;</span> decr num       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">14</span>  <span class="token comment"># 递减 num - 1</span>
redis<span class="token operator">&gt;</span> decrby num <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>   <span class="token comment"># 给 num - 5</span>
redis<span class="token operator">&gt;</span> get num        --<span class="token operator">&gt;</span> <span class="token string">&quot;9&quot;</span>
</code></pre></div><h3 id="获取字符串长度和内容追加" tabindex="-1"><a class="header-anchor" href="#获取字符串长度和内容追加" aria-hidden="true">#</a> 获取字符串长度和内容追加</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
STRLEN key
APPEND key value

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> str <span class="token string">&quot;Hello Redis&quot;</span> --<span class="token operator">&gt;</span> OK
redis<span class="token operator">&gt;</span> strlen str            --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">11</span>
redis<span class="token operator">&gt;</span> append str Good       --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">15</span>
redis<span class="token operator">&gt;</span> get str               --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello RedisGood&quot;</span>
</code></pre></div><h3 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>SETEX key value   <span class="token comment"># setex(set with expire)</span>
SETNX key value   <span class="token comment"># setnx(set if not exist)</span>
</code></pre></div><h3 id="getset-先-get-再-set" tabindex="-1"><a class="header-anchor" href="#getset-先-get-再-set" aria-hidden="true">#</a> getset(先 get 再 set)</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
GETSET key value  <span class="token comment"># 先返回之前的值在设置新的值</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> getset k1 Hello  --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>nil<span class="token punctuation">)</span>     <span class="token comment"># k1开始不存在所以返回 nil</span>
redis<span class="token operator">&gt;</span> get k1           --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello&quot;</span>   <span class="token comment"># k1在上一步被设置为 Hello</span>
redis<span class="token operator">&gt;</span> getset k1 Redis  --<span class="token operator">&gt;</span> <span class="token string">&quot;Hello&quot;</span>   <span class="token comment"># 返回上一步的 Hello，然后设置其为 Redis</span>
redis<span class="token operator">&gt;</span> get k1           --<span class="token operator">&gt;</span> <span class="token string">&quot;Redis&quot;</span>   <span class="token comment"># 获取k1的值</span>
</code></pre></div><h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表(List)</h2><p>  列表是简单的字符串列表，按照插入顺序排列。你可以添加一个元素到列表的头部(左边)或者尾部(右边)。它的底层实际是个双端链表，最多可以包含 2<sup>32</sup>-1 个元素(4294967295，每个列表超过 40 亿个元素)。主要功能有 pop/push 等，一般用在栈、队列、消息队列等场景。<br>   所谓的双端就是它的左侧和右侧都可以插入添加，如果键不存在，则创建新的链表，如果键已经存在，则新增内容，如果值全移除，对应的键也就消失了。对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。</p><figure><img src="`+r+`" alt="双端链表.png" width="400" tabindex="0" loading="lazy"><figcaption>双端链表.png</figcaption></figure><h3 id="lpush-rpush-lrange" tabindex="-1"><a class="header-anchor" href="#lpush-rpush-lrange" aria-hidden="true">#</a> LPUSH / RPUSH / LRANGE</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LPUSH key element <span class="token punctuation">[</span>element <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
RPUSH key element <span class="token punctuation">[</span>element <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
LRANGE key start stop

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> lpush left_list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 左侧插入</span>
redis<span class="token operator">&gt;</span> <span class="token builtin class-name">type</span> left_list              --<span class="token operator">&gt;</span> list
redis<span class="token operator">&gt;</span> lrange left_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 遍历left_list的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>

redis<span class="token operator">&gt;</span> rpush right_list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 右侧插入</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span> <span class="token comment"># 遍历right_list的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
</code></pre></div><h3 id="lpop-rpop" tabindex="-1"><a class="header-anchor" href="#lpop-rpop" aria-hidden="true">#</a> LPOP / RPOP</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 语法</span>
LPOP key <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token comment"># 返回列表中删除后的第一个元素。如果最后一个元素被弹出，则删除列表</span>
RPOP key <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token comment"># 返回并删除列表的最后元素。如果最后一个元素被弹出，则删除列表</span>

<span class="token comment"># 示例</span>
<span class="token comment">## LPOP</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>   <span class="token comment"># right_list 初始值设置如下</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> lpop right_list          --<span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span>  <span class="token comment"># 弹出第一个元素</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 第一个元素 1 已经不在了</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> lpop right_list <span class="token number">2</span>       <span class="token comment"># 从左侧开始弹出两个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 2 3 被弹出 剩下 4 5</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>

<span class="token comment">## RPOP</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>   <span class="token comment"># right_list 初始值设置如下</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
redis<span class="token operator">&gt;</span> rpop right_list          --<span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span>  <span class="token comment"># 弹出最后一个元素</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 最后一个元素 5 已经不在了</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
redis<span class="token operator">&gt;</span> rpop right_list <span class="token number">2</span>       <span class="token comment"># 从右侧开始弹出两个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
redis<span class="token operator">&gt;</span> lrange right_list <span class="token number">0</span> <span class="token parameter variable">-1</span>  <span class="token comment"># 4 3 被弹出 剩下 1 2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
</code></pre></div><h3 id="lindex" tabindex="-1"><a class="header-anchor" href="#lindex" aria-hidden="true">#</a> LINDEX</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LINDEX key index <span class="token comment"># 按照索引下标获得元素(从上到下)</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>     --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>

redis<span class="token operator">&gt;</span> lindex list <span class="token number">3</span>          --<span class="token operator">&gt;</span> <span class="token string">&quot;4&quot;</span> <span class="token comment"># 返回下标为3的元素</span>
</code></pre></div><h3 id="llen" tabindex="-1"><a class="header-anchor" href="#llen" aria-hidden="true">#</a> LLEN</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LLEN key <span class="token comment"># 获取列表中的元素个数</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>     --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
redis<span class="token operator">&gt;</span> llen list              --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>  <span class="token comment"># 4个元素</span>
</code></pre></div><h3 id="lrem" tabindex="-1"><a class="header-anchor" href="#lrem" aria-hidden="true">#</a> LREM</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>LREM key count element  <span class="token comment"># 从list中删除count个为element的元素</span>

<span class="token comment"># 示例</span>
redis<span class="token operator">&gt;</span> rpush list <span class="token number">1</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>   --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
redis<span class="token operator">&gt;</span> lrem list <span class="token number">2</span> <span class="token number">1</span>            --<span class="token operator">&gt;</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
redis<span class="token operator">&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>         <span class="token comment"># 上一步删除了2个为1的元素，所以剩下 2 1 2 3</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
</code></pre></div><h2 id="哈希表-hash" tabindex="-1"><a class="header-anchor" href="#哈希表-hash" aria-hidden="true">#</a> 哈希表(Hash)</h2><p>  redis hash 是一个 string 类型的 field(字段)和 value(值)的映射表，hash 特别适合用于存储对象。redis 中每个 hash 可以存储 2<sup>32</sup>-1 键值对(40 多亿)。</p><h2 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合(Set)</h2><h2 id="有序集合-zset" tabindex="-1"><a class="header-anchor" href="#有序集合-zset" aria-hidden="true">#</a> 有序集合(ZSet)</h2><h2 id="地理空间-geo" tabindex="-1"><a class="header-anchor" href="#地理空间-geo" aria-hidden="true">#</a> 地理空间(GEO)</h2><h2 id="基数统计-hyperloglog" tabindex="-1"><a class="header-anchor" href="#基数统计-hyperloglog" aria-hidden="true">#</a> 基数统计(HyperLogLog)</h2><h2 id="位图-bitmap" tabindex="-1"><a class="header-anchor" href="#位图-bitmap" aria-hidden="true">#</a> 位图(bitmap)</h2><h2 id="位域-bitfield" tabindex="-1"><a class="header-anchor" href="#位域-bitfield" aria-hidden="true">#</a> 位域(bitfield)</h2><h2 id="流-stream" tabindex="-1"><a class="header-anchor" href="#流-stream" aria-hidden="true">#</a> 流(Stream)</h2>`,59);function g(h,b){const a=p("ExternalLinkIcon");return o(),c("div",null,[s("p",null,[n("  数据类型参考："),s("a",k,[n("https://redis.io/docs/data-types/"),e(a)]),i,n("   Java 学习笔记："),s("a",m,[n("https://mrjokersince1997.github.io/My-Notes/#/其它/数据库/Redis"),e(a)])]),d])}const y=t(u,[["render",g],["__file","data_types.html.vue"]]);export{y as default};
