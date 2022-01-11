const netlist = [
  {
    category:'浏览器网络相关',
    name:'network',
    children: [
      {
        title: 'reflow(回流)和repaint(重绘)优化',
        des:'',
        link: 'https://www.jianshu.com/p/40c6fc1d4800',
        content:[
          '浏览器渲染过程: DOM tree, CSS tree --> Render tree --> Paint',
          'DOM tree根节点为html',
          '渲染从浏览器左上角到右下角',
          '第一次打开页面至少触发一次重绘和回流, 结构如宽高位置变化时, 触发reflow回流;非结构如背景色变化时, 触发repaint重绘. 二者都会造成体验不佳',
          '如何减少重绘和回流?',
          '通过classname或cssText一次性修改样式, 而非一个一个改',
          '离线模式: 克隆要操作的结点, 操作后再与原始结点交换, 类似于虚拟DOM',
          '避免频繁直接访问计算后的样式, 而是先将信息保存下来',
          '绝对布局的DOM, 不会造成大量reflow',
          'div不要嵌套太深, 不要超过六层',
        ],
        img: '',
      },
      {
        title: '一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？',
        des:'',
        link: 'https://www.cnblogs.com/gitbo/p/6597735.html',
        content:[
          '浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求； - 服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；',
          '浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM Tree）；',
          '载入解析到的资源文件，渲染页面，完成。',
        ],
        img: '',
      },
      {
        title: 'localStorage 与 sessionStorage 与cookie的区别总结',
        des:'',
        link: '',
        content:[
          '共同点: 都保存在浏览器端, 且同源',
          'localStorage 与 sessionStorage 统称webStorage,保存在浏览器,不参与服务器通信,大小为5M',
          '生命周期不同: localStorage永久保存, sessionStorage当前会话, 都可手动清除',
          '作用域不同: 不同浏览器不共享local和session, 不同会话不共享session',
          'Cookie: 设置的过期时间前一直有效, 大小4K.有个数限制, 各浏览器不同, 一般为20个.携带在HTTP头中, 过多会有性能问题.可自己封装, 也可用原生',
        ],
        img: '',
      },
      {
        title: '浏览器如何阻止事件传播，阻止默认行为',
        des:'',
        link: '',
        content:[
          '阻止事件传播(冒泡): e.stopPropagation()',
          '阻止默认行为: e.preventDefault()',
        ],
        img: '',
      },
      {
        title: '虚拟DOM方案相对原生DOM操作有什么优点，实现上是什么原理？',
        des:'',
        link: '',
        content:[
          '虚拟DOM可提升性能, 无须整体重新渲染, 而是局部刷新. JS对象, diff算法',
        ],
        img: '',
      },
      {
        title: '浏览器事件机制中事件触发三个阶段',
        des:'',
        link: '',
        content:[
          '事件捕获阶段: 从dom树节点往下找到目标节点, 不会触发函数',
          '事件目标处理函数: 到达目标节点',
          '事件冒泡: 最后从目标节点往顶层元素传递, 通常函数在此阶段执行. addEventListener第三个参数默认false(冒泡阶段执行),true(捕获阶段执行). 阻止冒泡见以上方法',
        ],
        img: '',
      },
      {
        title: '什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？',
        des:'',
        link: 'https://segmentfault.com/a/1190000011145364',
        content:[
          '跨域是指一个域下的文档或脚本试图去请求另一个域下的资源',
          '防止XSS、CSFR等攻击, 协议+域名+端口不同',
          'jsonp; 跨域资源共享（CORS）(Access control); 服务器正向代理等',
          '预检请求: 需预检的请求要求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响',
        ],
        img: '',
      },
      {
        title: '了解浏览器缓存机制吗？',
        des:'',
        link: '',
        content:[
          '浏览器缓存就是把一个已经请求过的资源拷贝一份存储起来，当下次需要该资源时，浏览器会根据缓存机制决定直接使用缓存资源还是再次向服务器发送请求.',
          '作用: 减少网络传输的损耗以及降低服务器压力。',
          '缓存位置优先级：Service Worker > Memory Cache > Disk Cache > Push Cache. 都没有命中，就会向服务器发请求',
          '策略优先级: 强制缓存 > 协商缓存; cache-control > Expires > Etag > Last-modified',
        ],
        img: '',
      },
      {
        title: '为什么操作 DOM 慢?',
        des:'',
        link: '',
        content:[
          'DOM本身是一个js对象, 操作这个对象本身不慢, 但是操作后触发了浏览器的行为, 如repaint和reflow等浏览器行为, 使其变慢',
        ],
        img: '',
      },
      {
        title: '什么情况会阻塞渲染？',
        des:'',
        link: '',
        content:[
          'js脚本同步执行',
          'css和图片虽然是异步加载, 但js文件执行需依赖css, 所以css也会阻塞渲染',
        ],
        img: '',
      },
      {
        title: '如何判断js运行在浏览器中还是node中？',
        des:'',
        link: '',
        content:[
          '判断有无全局对象global和window',
        ],
        img: '',
      },
      {
        title: '关于web以及浏览器处理预加载有哪些思考？',
        des:'',
        link: '',
        content:[
          '图片等静态资源在使用之前就提前请求 资源使用到的时候能从缓存中加载, 提升用户体验 页面展示的依赖关系维护',
        ],
        img: '',
      },
      {
        title: 'http多路复用',
        des:'',
        link: 'https://segmentfault.com/a/1190000011172823',
        content:[
          'Keep-Alive: Keep-Alive解决的核心问题：一定时间内，同一域名多次请求数据，只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求效率的问题。这里面所说的一定时间是可以配置的，不管你用的是Apache还是nginx。',
          '解决两个问题: 串行文件传输(采用二进制数据帧); 连接数过多(采用流, 并行传输)',
        ],
        img: '',
      },
      {
        title: 'http和https：',
        des:'',
        link: 'https://www.cnblogs.com/wqhwe/p/5407468.html',
        content:[
          'http: 最广泛网络协议，BS模型，浏览器高效。',
          'https: 安全版，通过SSL加密，加密传输，身份认证，密钥',
          'https相对于http加入了ssl层, 加密传输, 身份认证;',
          '需要到ca申请收费的证书;',
          '安全但是耗时多，缓存不是很好;',
          '注意兼容http和https;',
          '连接方式不同, 端口号也不同, http是80, https是443',
        ],
        img: '',
      },
      {
        title: 'CSRF和XSS区别及防御',
        des:'',
        link: 'https://blog.csdn.net/m0_37631322/article/details/81346335',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: 'cookie可设置哪些属性？httponly?',
        des:'',
        link: '',
        content:[
          'name　　字段为一个cookie的名称。',
          'value　　字段为一个cookie的值。',
          'domain　　字段为可以访问此cookie的域名。',
          'path　　字段为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。',
          'expires/Max-Age 　　字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。',
          'Size　　字段 此cookie大小。',
          'http　　字段 cookie的httponly属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。',
          'secure　　 字段 设置是否只能通过https来传递此条cookie',
          'chrome控制台的application下可查看:',
        ],
        img: '2-15.png',
      },
      {
        title: '登录后，前端做了哪些工作，如何得知已登录',
        des:'',
        link: '',
        content:[
          '前端存放服务端下发的cookie, 简单说就是写一个字段在cookie中表明已登录, 并设置失效日期',
          '或使用后端返回的token, 每次ajax请求将token携带在请求头中, 这也是防范csrf的手段之一',
        ],
        img: '',
      },
      {
        title: 'http状态码',
        des:'',
        link: '',
        content:[
          '1**: 服务器收到请求, 需请求者进一步操作',
          '2**: 请求成功',
          '3**: 重定向, 资源被转移到其他URL了',
          '4**: 客户端错误, 请求语法错误或没有找到相应资源',
          '5**: 服务端错误, server error',
          '301: 资源(网页等)被永久转移到其他URL, 返回值中包含新的URL, 浏览器会自动定向到新URL',
          '302: 临时转移. 客户端应访问原有URL',
          '304: Not Modified. 指定日期后未修改, 不返回资源',
          '403: 服务器拒绝执行请求',
          '404: 请求的资源(网页等)不存在',
          '500: 内部服务器错误',
        ],
        img: '',
      },
      {
        title: 'Http请求头缓存设置方法',
        des:'',
        link: 'https://www.cnblogs.com/zhaow/p/7832829.html',
        content:[
          'Cache-control, expire, last-modify',
        ],
        img: '',
      },
      {
        title: '实现页面回退刷新',
        des:'',
        link: '',
        content:[
          '旧: window.history.back() + window.location.href=document.referrer;',
          '新: HTML5的新API扩展了window.history，使历史记录点更加开放了。可以存储当前历史记录点、替换当前历史记录点、监听历史记录点onpopstate, replaceState',
        ],
        img: '',
      },
      {
        title: '正向代理和反向代理',
        des:'',
        link: 'https://www.cnblogs.com/Anker/p/6056540.html',
        content:[
          '正向代理：',
          '（1）访问原来无法访问的资源，如google （2） 可以做缓存，加速访问资源 （3）对客户端访问授权，上网进行认证 （4）代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息',
          '反向代理',
          '1）保证内网的安全，可以使用反向代理提供WAF功能，阻止web攻击大型网站，通常将反向代理作为公网访问地址，Web服务器是内网。 （2）负载均衡，通过反向代理服务器来优化网站的负载'
        ],
        img: '',
      },
      {
        title: '关于预检请求',
        des:'在非简单请求且跨域的情况下，浏览器会自动发起options预检请求。',
        link: 'https://www.jianshu.com/p/3a10ac906fd0',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: '三次握手四次挥手',
        des:'开启连接用三次握手, 关闭用四次挥手',
        link: 'https://www.jianshu.com/p/ad0904df7d76',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: 'TCP和UDP协议',
        des:'',
        link: '',
        content:[
          'TCP（Transmission Control Protocol：传输控制协议；面向连接，可靠传输',
          'UDP（User Datagram Protocol）：用户数据报协议；面向无连接，不可靠传输',
        ],
        img: '',
      },
      {
        title: '进程和线程的区别',
        des:'',
        link: 'https://www.cnblogs.com/zhuzhu2016/p/5804875.html',
        content:[
          '进程：是并发执行的程序在执行过程中分配和管理资源的基本单位，是一个动态概念，竞争计算机系统资源的基本单位。',
          '线程：是进程的一个执行单元，是进程内科调度实体。比进程更小的独立运行的基本单位。线程也被称为轻量级进程。',
          '一个程序至少一个进程，一个进程至少一个线程。',
        ],
        img: '',
      },
    ]
  }
]
export default netlist