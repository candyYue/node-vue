// https://github.com/nan-gong/vuepress-demo/tree/master/docs/tech/interview#5-%E5%88%A0%E6%A0%BC%E5%8C%96%E7%9A%84%E5%8E%9F%E7%90%86
const csslist = [
  {
    category:'CSS相关',
    name:'css',
    children: [
      {
        title: '万能居中',
        des:'',
        link: '',
        content:[
          'margin: 0 auto;水平',
          'text-align: center;水平',
          '行高，垂直',
          '表格，center,middle；水平垂直',
          'display:table-cell；模拟表格，all',
          '绝对定位，50%减自身宽高',
          '绝对定位，上下左右全0，margin:auto',
          '绝对定位加相对定位。不需要知道宽高',
          'IE6，IE7：给父元素设一个font-size:高度/1.14,vertical-align:middle'
        ],
        img: '',
      },
      {
        title: 'BFC优化',
        des:'块格式化上下文, 特性',
        link: 'https://www.jianshu.com/p/0d713b32cd0d',
        content: ['使 BFC 内部浮动元素不会到处乱跑（清除浮动）', '和浮动元素产生边界（在非浮动元素加margin）'],
        img: '',
      },
      {
        title: '盒模型哪两种模式？什么区别？如何设置',
        des:'',
        link: '',
        content:['标准模式: box-sizing: content-box(默认); 宽高不包括内边距和边框','怪异模式: box-sizing: border-box'],
        img: '',
      },
      {
        title: '常用清除浮动的方法，如不清除浮动会怎样？',
        des:'当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷.',
        link: 'https://blog.csdn.net/h_qingyi/article/details/81269667',
        content:[
          '额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）',
          '父元素添加overflow:hidden; (触发BFC)',
          '使用after伪元素清除浮动（推荐使用）',
          '使用before和after双伪元素清除浮动',
        ],
        img: '',
      },
      {
        title: '删格化的原理',
        des:'',
        link: '',
        content:[
          '比如antd的row和col, 将一行等分为24份, col是几就占几份, 底层按百分比实现; 结合媒体查询, 可以实现响应式',
        ],
        img: '',
      },
      {
        title: '纯css实现三角形',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '0-5.png',
      },
      {
        title: '高度不定，宽100%，内一div高不确定，如何实现垂直居中？',
        des:'',
        link: '',
        content:[
          'verticle-align: middle;',
          '绝对定位50%加translateY(-50%)',
          '绝对定位，上下左右全0，margin:auto',
        ],
        img: '',
      },
      {
        title: '至少两种方式实现自适应布局',
        des:'',
        link: '',
        content:[
          'rem, em',
          'vh, vw',
          '百分比',
          '媒体查询',
          'bs, antd等的栅格布局',
        ],
        img: '',
      },
      {
        title: '设置一段文字的大小为6px',
        des:'',
        link: '',
        content:[
          '谷歌最小12px, 其他浏览器可以更小',
          '通过transform: scale实现',
        ],
        img: '',
      },
      {
        title: 'css菊花图',
        des:'四个小圆点一直旋转',
        link: 'https://blog.csdn.net/candy_home/article/details/81540247',
        content:[
          '',
        ],
        img: '0-9.png',
      },
      {
        title: '关于em',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '0-10.png',
      },
      {
        title: '关于vh, vw',
        des:'',
        link: '',
        content:[
          'vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。 vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。 vmin：vw和vh中较小的那个。 vmax：vw和vh中较大的那个。',
        ],
        img: '',
      },
      {
        title: 'Flex布局',
        des:'',
        link: 'https://www.runoob.com/w3cnote/flex-grammar.html',
        content:[
          'flex-direction控制主副轴',
          'flex-wrap控制换行(默认不换行)',
          'flex-flow是上两个的结合',
          'justify-content主轴对齐方式',
          'align-items交叉轴对齐方式',
        ],
        img: '',
      },
      {
        title: 'overflow原理',
        des:'',
        link: 'https://www.jianshu.com/p/7e04ed3f4bea',
        content:[
          'overflow: hidden能清除块内子元素的浮动影响. 因为该属性进行超出隐藏时需要计算盒子内所有元素的高度, 所以会隐式清除浮动',
          '创建BFC条件(满足一个):float的值不为none；overflow的值不为visible；position的值为fixed / absolute；display的值为table-cell / table-caption / inline-block / flex / inline-flex。',
        ],
        img: '',
      },
      {
        title: '实现自适应的正方形:',
        des:'',
        link: '',
        content:[
          '使用vw, vh',
          'width百分比, height: 0, padding-top(bottom): 50%',
        ],
        img: '',
      },
      {
        title: '标准模式和怪异模式',
        des:'',
        link: '',
        content:[
          'document.compatMode属性可以判断是否是标准模式，当 document.compatMode为“CSS1Compat”，是标准模式，“BackCompat”是怪异模式。',
          '怪异模式是为了兼容旧版本的浏览器, 因为IE低版本document.documentElement.clientWidth获取不到',
          '怪异模式盒模型: box-sizing: border-box; 标准模式: box-sizing: content-box',
        ],
        img: '',
      },
      {
        title: 'CSS3实现环形进度条',
        des:'',
        link: '',
        content:[
          '两个对半矩形遮罩, 使用rotate以及overflow: hidden进行旋转',
        ],
        img: '',
      },
      {
        title: 'css优先级',
        des:'选择器的特殊性值表述为4个部分，用0,0,0,0表示。',
        link: 'https://www.cnblogs.com/wangmeijian/p/4207433.html',
        content:[
          'ID选择器的特殊性值，加0,1,0,0。',
          '类选择器、属性选择器或伪类，加0,0,1,0。',
          '元素和伪元素，加0,0,0,1。',
          '通配选择器*对特殊性没有贡献，即0,0,0,0。',
          '最后比较特殊的一个标志!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。',
        ],
        img: '',
      }]
  }
]
export default csslist