import{_ as o,H as p,Y as c,a0 as n,a1 as s,Z as t,a2 as e,D as d}from"./framework-96bec801.js";const r="/assets/fx_string_demo-4193c4aa.png",l={},u=e(`<h2 id="_1-函数的理解" tabindex="-1"><a class="header-anchor" href="#_1-函数的理解" aria-hidden="true">#</a> 1.函数的理解</h2><p>  函数是完成一定功能的代码集合。根据函数所操作数据行数的不同，可以将 SQL 函数分类两类，单行函数和多行函数。其中单行函数仅对单个行进行计算，并且每行返回一个结果；而多行函数可以操作成组的多个行，每个行组返回一个结果，这些函数又称组函数。</p><h2 id="_2-数值函数" tabindex="-1"><a class="header-anchor" href="#_2-数值函数" aria-hidden="true">#</a> 2.数值函数</h2><h3 id="_2-1-基本函数" tabindex="-1"><a class="header-anchor" href="#_2-1-基本函数" aria-hidden="true">#</a> 2.1 基本函数</h3><table><thead><tr><th>函数</th><th>用法</th></tr></thead><tbody><tr><td><code>ABS(x)</code></td><td>返回 x 的绝对值</td></tr><tr><td><code>SIGN(X)</code></td><td>返回 X 的符号。正数返回 1 ，负数返回-1， 0 返回 0</td></tr><tr><td><code>PI()</code></td><td>返回圆周率的值</td></tr><tr><td><code>CEIL(x)</code> <code>CEILING(x)</code></td><td>返回大于或等于某个值的最小整数</td></tr><tr><td><code>FLOOR(x)</code></td><td>返回小于或等于某个值的最大整数</td></tr><tr><td><code>LEAST(e1,e2,e3…)</code></td><td>返回列表中的最小值</td></tr><tr><td><code>GREATEST(e1,e2,e3…)</code></td><td>返回列表中的最大值</td></tr><tr><td><code>MOD(x,y)</code></td><td>返回 X 除以 Y 后的余数</td></tr><tr><td><code>RAND()</code></td><td>返回 0~1 的随机值</td></tr><tr><td><code>RAND(x)</code></td><td>返回 0~1 的随机值，其中 x 的值用作种子值，相同的 X 值会产生相同的随机数</td></tr><tr><td><code>ROUND(x)</code></td><td>返回一个对 x 的值进行四舍五入后，最接近于 X 的整数</td></tr><tr><td><code>ROUND(x,y)</code></td><td>返回一个对 x 的值进行四舍五入后最接近 X 的值，并保留到小数点后面 Y 位</td></tr><tr><td><code>TRUNCATE(x,y)</code></td><td>返回数字 x 截断为 y 位小数的结果</td></tr><tr><td><code>SQRT(x)</code></td><td>返回 x 的平方根。当 X 的值为负数时，返回 NULL</td></tr></tbody></table><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 天花板函数：CEIL、CEILING</span>
<span class="token comment"># 地板函数：FLOOR</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> CEIL<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CEILING<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span><span class="token punctuation">,</span> FLOOR<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span><span class="token punctuation">,</span> FLOOR<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+</span>
<span class="token operator">|</span> CEIL<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span> <span class="token operator">|</span> CEILING<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span> <span class="token operator">|</span> FLOOR<span class="token punctuation">(</span><span class="token number">32.32</span><span class="token punctuation">)</span> <span class="token operator">|</span> FLOOR<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">43.23</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+</span>
<span class="token operator">|</span>          <span class="token number">33</span> <span class="token operator">|</span>             <span class="token operator">-</span><span class="token number">43</span> <span class="token operator">|</span>           <span class="token number">32</span> <span class="token operator">|</span>           <span class="token operator">-</span><span class="token number">44</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+-----------------+--------------+---------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 指定种子值的随机为伪随机(有规律)</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RAND<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RAND<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RAND<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.624</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.324</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.624</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">12.324</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">TRUNCATE</span><span class="token punctuation">(</span><span class="token number">12.66</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token operator">|</span> <span class="token number">13</span>           <span class="token operator">|</span> <span class="token number">12.62</span>           <span class="token operator">|</span> <span class="token number">10</span>               <span class="token operator">|</span> <span class="token number">12.6</span>              <span class="token operator">|</span> <span class="token number">10</span>                 <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------+-----------------+------------------+-------------------+--------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.14</span> sec<span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-2-角度与弧度互换函数" tabindex="-1"><a class="header-anchor" href="#_2-2-角度与弧度互换函数" aria-hidden="true">#</a> 2.2 角度与弧度互换函数</h3><table><thead><tr><th style="text-align:center;">函数</th><th>用法</th></tr></thead><tbody><tr><td style="text-align:center;"><code>RADIANS(x)</code></td><td>将角度转化为弧度，其中参数 x 为角度值</td></tr><tr><td style="text-align:center;"><code>DEGREES(x)</code></td><td>将弧度转化为角度，其中参数 x 为弧度值</td></tr></tbody></table><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 角度转弧度：(π/180)*角度</span>
<span class="token comment"># 弧度转角度：(180/π)*弧度</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> RADIANS<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RADIANS<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> DEGREES<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> PI<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------------+--------------------+-------------------+</span>
<span class="token operator">|</span> RADIANS<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span>      <span class="token operator">|</span> RADIANS<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>        <span class="token operator">|</span> DEGREES<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> PI<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------+--------------------+-------------------+</span>
<span class="token operator">|</span> <span class="token number">3.141592653589793</span> <span class="token operator">|</span> <span class="token number">1.5707963267948966</span> <span class="token operator">|</span>               <span class="token number">360</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------------+--------------------+-------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-3-三角函数" tabindex="-1"><a class="header-anchor" href="#_2-3-三角函数" aria-hidden="true">#</a> 2.3 三角函数</h3>`,10),k={href:"https://baike.baidu.com/item/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E5%85%AC%E5%BC%8F/4374733",target:"_blank",rel:"noopener noreferrer"},i=n("br",null,null,-1),h={href:"https://baike.baidu.com/item/%E5%8F%8D%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0/7004029",target:"_blank",rel:"noopener noreferrer"},m=e('<table><thead><tr><th>函数</th><th>用法</th></tr></thead><tbody><tr><td><code>SIN(x)</code></td><td>返回 x 的正弦值，其中，参数 x 为弧度值(对/斜)</td></tr><tr><td><code>ASIN(x)</code></td><td>返回 x 的反正弦值，即获取正弦为 x 的值。如果 x 的值不在- 1 到 1 之间，则返回 NULL()</td></tr><tr><td><code>COS(x)</code></td><td>返回 x 的余弦值，其中，参数 x 为弧度值(邻/斜)</td></tr><tr><td><code>ACOS(x)</code></td><td>返回 x 的反余弦值，即获取余弦为 x 的值。如果 x 的值不在- 1 到 1 之间，则返回 NULL</td></tr><tr><td><code>TAN(x)</code></td><td>返回 x 的正切值，其中，参数 x 为弧度值(对/邻)</td></tr><tr><td><code>ATAN(x)</code></td><td>返回 x 的反正切值，即返回正切值为 x 的值</td></tr><tr><td><code>ATAN2(m,n)</code></td><td>返回两个参数的反正切值</td></tr><tr><td><code>COT(x)</code></td><td>返回 x 的余切值，其中，X 为弧度值(邻/对)</td></tr></tbody></table><h3 id="_2-4-指数和对数" tabindex="-1"><a class="header-anchor" href="#_2-4-指数和对数" aria-hidden="true">#</a> 2.4 指数和对数</h3><table><thead><tr><th>函数</th><th>用法</th></tr></thead><tbody><tr><td><code>POW(x,y)</code> <code>POWER(X,Y)</code></td><td>返回 x 的 y 次方</td></tr><tr><td><code>EXP(X)</code></td><td>返回 e 的 X 次方，其中 e 是一个常数，2.718281828459045</td></tr><tr><td><code>LN(X)，LOG(X)</code></td><td>返回以 e 为底的 X 的对数，当 X &lt;= 0 时，返回的结果为 NULL</td></tr><tr><td><code>LOG10(X)</code></td><td>返回以 10 为底的 X 的对数，当 X &lt;= 0 时，返回的结果为 NULL</td></tr><tr><td><code>LOG2(X)</code></td><td>返回以 2 为底的 X 的对数，当 X &lt;= 0 时，返回 NULL</td></tr></tbody></table><h3 id="_2-5-进制间的转换" tabindex="-1"><a class="header-anchor" href="#_2-5-进制间的转换" aria-hidden="true">#</a> 2. 5 进制间的转换</h3><table><thead><tr><th>函数</th><th>用法</th></tr></thead><tbody><tr><td><code>BIN(x)</code></td><td>返回 x 的二进制编码</td></tr><tr><td><code>HEX(x)</code></td><td>返回 x 的十六进制编码</td></tr><tr><td><code>OCT(x)</code></td><td>返回 x 的八进制编码</td></tr><tr><td><code>CONV(x,f1,f2)</code></td><td>返回 f1 进制数变成 f2 进制数</td></tr></tbody></table><h2 id="_3-字符串函数" tabindex="-1"><a class="header-anchor" href="#_3-字符串函数" aria-hidden="true">#</a> 3.字符串函数</h2><table><thead><tr><th>函数</th><th>用法</th></tr></thead><tbody><tr><td><code>ASCII(S)</code></td><td>返回字符串 S 中的第一个字符的 ASCII 码值</td></tr><tr><td><code>CHAR_LENGTH(s)</code></td><td>返回字符串 s 的字符数。作用与 CHARACTER_LENGTH(s)相同</td></tr><tr><td><code>LENGTH(s)</code></td><td>返回字符串 s 的字节数，和字符集有关</td></tr><tr><td><code>CONCAT(s1,s2,……,sn)</code></td><td>连接 s1, s2, ……, sn 为一个字符串</td></tr><tr><td><code>CONCAT_WS(x,s1,……,sn)</code></td><td>同 CONCAT(s1, s2, …)函数，但是每个字符串之间要加上 x</td></tr><tr><td><code>INSERT(str,idx,len,replacestr)</code></td><td>将字符串 str 从第 idx 位置开始，len 个字符长的子串替换为字符串 replacestr</td></tr><tr><td><code>REPLACE(str,a,b)</code></td><td>用字符串 b 替换字符串 str 中所有出现的字符串 a</td></tr><tr><td><code>UPPER(s)</code> <code>UCASE(s)</code></td><td>将字符串 s 的所有字母转成大写字母</td></tr><tr><td><code>LOWER(s)</code> <code>LCASE(s)</code></td><td>将字符串 s 的所有字母转成小写字母</td></tr><tr><td><code>LEFT(str,n)</code></td><td>返回字符串 str 最左边的 n 个字符</td></tr><tr><td><code>RIGHT(str,n)</code></td><td>返回字符串 str 最右边的 n 个字符</td></tr><tr><td><code>LPAD(str,len,pad)</code></td><td>用字符串 pad 对 str 最左边进行填充，直到 str 的长度为 len 个字符</td></tr><tr><td><code>RPAD(str,len,pad)</code></td><td>用字符串 pad 对 str 最右边进行填充，直到 str 的长度为 len 个字符</td></tr><tr><td><code>LTRIM(s)</code></td><td>去掉字符串 s 左侧的空格</td></tr><tr><td><code>RTRIM(s)</code></td><td>去掉字符串 s 右侧的空格</td></tr><tr><td><code>TRIM(s)</code></td><td>去掉字符串 s 开始与结尾的空格</td></tr><tr><td><code>TRIM(s1 FROM s)</code></td><td>去掉字符串 s 开始与结尾的 s</td></tr><tr><td><code>TRIM(LEADING s FROM s)</code></td><td>去掉字符串 s 开始处的 s</td></tr><tr><td><code>TRIM(TRAILING s FROM s)</code></td><td>去掉字符串 s 结尾处的 s</td></tr><tr><td><code>REPEAT(str,n)</code></td><td>返回 str 重复 n 次的结果</td></tr><tr><td><code>SPACE(n)</code></td><td>返回 n 个空格</td></tr><tr><td><code>STRCMP(s1,s2)</code></td><td>比较字符串 s1, s2 的 ASCII 码值的大小</td></tr><tr><td><code>SUBSTR(s,index,len)</code></td><td>返回从字符串 s 的 index 位置其 len 个字符，作用与 SUBSTRING(s,n,len)、MID(s,n,len)相同</td></tr><tr><td><code>LOCATE(substr,str)</code></td><td>返回字符串 substr 在字符串 str 中首次出现的位置，作用于 POSITION(substr IN str)、INSTR(str,substr)相同。未找到，返回 0</td></tr><tr><td><code>ELT(m,s1,s2,…,sn)</code></td><td>返回指定位置的字符串，如果 m=1，则返回 s1，如果 m=2，则返回 s2，如果 m=n，则返回 sn</td></tr><tr><td><code>FIELD(s,s1,s2,…,sn)</code></td><td>返回字符串 s 在字符串列表中第一次出现的位置</td></tr><tr><td><code>FIND_IN_SET(s1,s2)</code></td><td>返回字符串 s1 在字符串 s2 中出现的位置。其中，字符串 s2 是一个以逗号分隔的字符串</td></tr><tr><td><code>REVERSE(s)</code></td><td>返回 s 反转后的字符串</td></tr><tr><td><code>NULLIF(value1,value2)</code></td><td>比较两个字符串，如果 value1 与 value2 相等，则返回 NULL，否则返回 value1</td></tr></tbody></table><blockquote><p>注意：MySQL 中，字符串的索引是从 1 开始的</p></blockquote><figure><img src="'+r+'" alt="单行字符串函数示例.png" tabindex="0" loading="lazy"><figcaption>单行字符串函数示例.png</figcaption></figure><h2 id="_4-日期和时间函数" tabindex="-1"><a class="header-anchor" href="#_4-日期和时间函数" aria-hidden="true">#</a> 4.日期和时间函数</h2><h2 id="_5-流程控制函数" tabindex="-1"><a class="header-anchor" href="#_5-流程控制函数" aria-hidden="true">#</a> 5.流程控制函数</h2><h2 id="_6-加密与解密函数" tabindex="-1"><a class="header-anchor" href="#_6-加密与解密函数" aria-hidden="true">#</a> 6.加密与解密函数</h2><h2 id="_7-mysql-信息函数" tabindex="-1"><a class="header-anchor" href="#_7-mysql-信息函数" aria-hidden="true">#</a> 7.MySQL 信息函数</h2><h2 id="_8-其它函数" tabindex="-1"><a class="header-anchor" href="#_8-其它函数" aria-hidden="true">#</a> 8.其它函数</h2>',14);function b(x,E){const a=d("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("三角函数："),n("a",k,[s("https://baike.baidu.com/item/三角函数公式/4374733"),t(a)]),i,s(" 反三角函数："),n("a",h,[s("https://baike.baidu.com/item/反三角函数/7004029"),t(a)])]),m])}const N=o(l,[["render",b],["__file","mysql_basic_07.html.vue"]]);export{N as default};
