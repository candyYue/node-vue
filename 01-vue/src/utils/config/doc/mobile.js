const mobilelist = [
  {
    category:'移动端相关',
    name:'mobile',
    children: [
      {
        title: '移动端兼容适配',
        des:'',
        link: '',
        content:[
          'rem, em, 百分比',
          '框架的栅格布局',
          'media query媒体查询',
          '手淘团队的一套flexible.js, 自动判断dpr进行整个布局视口的放缩',
        ],
        img: '',
      },
      {
        title: 'flexible如何实现自动判断dpr',
        des:'',
        link: '',
        content:[
          '判断机型, 找出样本机型去适配. 比如iphone以6为样本, 宽度375px, dpr是2'
        ],
        img: '',
      },
      {
        title: '为什么以iPhone6为标准的设计稿的尺寸是以750px宽度来设计的呢？',
        des:'',
        link: '',
        content:[
          'iPhone6的满屏宽度是375px，而iPhone6采用的视网膜屏的物理像素是满屏宽度的2倍，也就是dpr(设备像素比)为2, 并且设计师所用的PS设计软件分辨率和像素关系是1:1。所以为了做出的清晰的页面，设计师一般给出750px的设计图，我们再根据需求对元素的尺寸设计和压缩。'
        ],
        img: '',
      },
      {
        title: '如何处理异形屏iphone X',
        des:'',
        link: '',
        content:[
          'safe area: 默认放置在安全区域以避免遮挡, 但会压缩',
          '在meta中添加viewport-fit=cover: 告诉浏览器要讲整个页面渲染到浏览器中，不管设备是圆角与否，这个时候会造成页面的元素被圆角遮挡',
          'padding: constant(env): 解决遮挡问题',
        ],
        img: '',
      },
      {
        title: '移动端首屏优化',
        des:'',
        link: '',
        content:[
          '采用服务器渲染ssr',
          '按需加载配合webpack分块打包, 通过entry和commonChunkPlugin',
          '很有必要将script标签➕异步',
          '有轮播图 最好给个默认 另外要处理图片懒加载',
          '打包线上也要注意去掉map 文件',
          '组件, 路由懒加载',
          'webpack的一切配置 肯定是必须的',
          '压缩图片 https://tinypng.com/',
          '建议还是用webpack的图片压缩插件',
          '骨架屏',
          'Loading页面',
        ],
        img: '',
      },
      {
        title: 'PWA全称Progressive Web App，即渐进式WEB应用',
        des:'一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能 解决了哪些问题？',
        link: 'https://segmentfault.com/a/1190000012353473?utm_source=tag-newest',
        content:[
          '可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏',
          '实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能',
          '实现了消息推送 它解决了上述提到的问题，这些特性将使得 Web 应用渐进式接近原生 App。',
        ],
        img: '',
      },
      {
        title: '离线包方案',
        des:'',
        link: '',
        content:[
          '现在 web 页面在移动端的地位越来越高，大部分主流 App 采用 native + webview 的 hybrid 模式，加载远程页面受限于网络，本地 webview 引擎，经常会出现渲染慢导致的白屏现象，体验很差，于是离线包方案应运而生。动态下载的离线包可以使得我们不需要走完整的 App 审核发布流程就完成了版本的更新'
        ],
        img: '',
      },
      {
        title: '自适应和响应式布局的区别',
        des:'',
        link: 'https://baijiahao.baidu.com/s?id=1627060039271152391&wfr=spider&for=pc',
        content:[
          '自适应布局通过检测视口分辨率，来判断当前访问的设备是：pc端、平板、手机，从而请求服务层，返回不同的页面；响应式布局通过检测视口分辨率，针对不同客户端在客户端做代码处理，来展现不同的布局和内容。',
          '自适应布局需要开发多套界面，而响应式布局只需要开发一套界面就可以了。',
          '自适应对页面做的屏幕适配是在一定范围：比如pc端一般要大于1024像素，手机端要小于768像素。而响应式布局是一套页面全部适应。',
          '自适应布局如果屏幕太小会发生内容过于拥挤。而响应式布局正是为了解决这个问题而衍生出的概念，它可以自动识别屏幕宽度并做出相应调整的网页设计。',
        ],
        img: '',
      },
    ]
  }
]
export default mobilelist