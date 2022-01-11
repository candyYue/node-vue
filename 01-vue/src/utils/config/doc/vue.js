const vuelist = [
  {
    category:'vue相关',
    name:'vue',
    children: [
      {
        title: '双向数据绑定v-model',
        des:'通过v-model VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的。',
        link: '',
        content:[
          ''
        ],
        img: '3-0.png',
      },
      {
        title: 'vue父子组件传递参数',
        des:'',
        link: '',
        content:[
          '父 -->子: 通过props',
          '子 -->父: 通过 $$refs 或 $emit',
        ],
        img: '',
      },
      {
        title: 'vue传递参数方法',
        des:'',
        link: '',
        content:[
          '父子组件传参如上, v-bind : v-on @',
          '兄弟组件传参:(通过EventBus事件总线实现)',
        ],
        img: '3-1.png',
      },
      {
        title: 'vue自定义组件',
        des:'可以使用独立可复用的自定义组件来构成大型应用, 采用帕斯卡命名法或横线连接, 通过以上方式进行组件间通信. 每一个组件都是Vue实例, 可以使用生命周期钩子.',
        link: '',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: 'vue自定义指令',
        des:'',
        link: 'https://baijiahao.baidu.com/s?id=1603883371090691442&wfr=spider&for=pc',
        content:[
          '除核心指令之外的指令, 使用directive进行注册.',
          '指令自定义钩子函数: bind, inserted, update, componentUpdated, unbind'
        ],
        img: '',
      },
      {
        title: 'vuex组成和原理',
        des:'',
        link: 'https://baijiahao.baidu.com/s?id=1618794879569468435&wfr=spider&for=pc',
        content:[
          '组成: 组件间通信, 通过store实现全局存取',
          '修改: 唯一途径, 通过commit一个mutations(同步)或dispatch一个actions(异步)',
          '简写: 引入mapState、mapGetters、mapActions',
        ],
        img: '',
      },
      {
        title: 'vue-router的原理，例如hashhistory和History interface这些东西要弄明白',
        des:'',
        link: '',
        content:[
          'vue-router用法: 在router.js或者某一个路由分发页面配置path, name, component对应关系',
          '每个按钮一个value, 在watch功能中使用this.$router.push实现对应跳转, 类似react的this.history.push',
          '或直接用router-link to去跳转, 类似react的link to',
          'vue-router原理: 通过hash和History interface两种方式实现前端路由',
          'HashHistory: 利用URL中的hash（“#”）;replace()方法与push()方法不同之处在于，它并不是将新路由添加到浏览器访问历史的栈顶，而是替换掉当前的路由',
          'History interface: 是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作. pushState(), replaceState() 这下不仅是读取了，还可以对浏览器历史记录栈进行修改',
        ],
        img: '',
      },
      {
        title: 'vue的seo问题',
        des:'seo关系到网站排名, vue搭建spa做前后端分离不好做seo, 可通过其他方法解决:',
        link: '',
        content:[
          'SSR服务端渲染: 将同一个组件渲染为服务器端的 HTML 字符串.利于seo且更快.',
          'vue-meta-info, nuxt, prerender-spa-plugin页面预渲染等',
        ],
        img: '',
      },
      {
        title: 'vueSSR服务端渲染',
        des:'',
        link: 'https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: '生命周期内create和mounted的区别',
        des:'',
        link: '',
        content:[
          'created: 在模板渲染成html前调用，即通常初始化某些数据，然后再渲染成视图。',
          'mounted: 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作和方法。'
        ],
        img: '',
      },
      {
        title: '监听watch',
        des:'对应一个对象，键是观察表达式，值是对应回调。值也可以是methods的方法名，或者是对象，包含选项。在实例化时为每个键调用 $watch()',
        link: '',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: '登录验证拦截(通过router)',
        des:'',
        link: '',
        content:[
          '先设置requireAuth:',
          '再配置router.beforeEach:'
        ],
        img: '3-2.png',
      },
      {
        title: 'v-for key值',
        des:'不写key值会报warning, 和react的array渲染类似. 根据diff算法, 修改数组后, 写key值会复用, 不写会重新生成, 造成性能浪费或某些不必要的错误',
        link: '',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: 'vue3.0的更新和defineProperty优化',
        des:'',
        link: 'https://www.oschina.net/news/101906/vue-3-0-updates?from=singlemessage',
        content:[
          '放弃 Object.defineProperty ，使用更快的原生 Proxy (访问对象拦截器, 也称代理器)',
          '提速, 降低内存使用, Tree-shaking更友好',
          '支持IE11等',
          '使用Typescript'
        ],
        img: '',
      },
      {
        title: 'vue使用this获取变量',
        des:'正常要通过vm.$options.data访问，但实例vm会遍历data中的变量，并挂在到this上， this.$root传参取值',
        link: '',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: 'vue解除双向绑定',
        des:'',
        link: '',
        content:[
          'let obj = JSON.parse(JSON.stringify(this.temp1));'
        ],
        img: '',
      },
      {
        title: 'vue异步组件',
        des:'',
        link: '',
        content:[
          '为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染'
        ],
        img: '3-3.png',
      },
      {
        title: 'MVC与MVVM',
        des:'',
        link: '',
        content:[
          'model-数据层 view-视图层 controller-控制层',
          'MVC的目的是实现M和V的分离，单向通信，必须通过C来承上启下',
          'MVVM中通过VM（vue中的实例化对象）的发布者-订阅者模式实现双向绑定，数据绑定，dom事件监听',
          '区别：MVC和MVVM的区别并不是VM完全取代了C，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用',
        ],
        img: '',
      },
      {
        title: 'vue渐进式',
        des:'',
        link: '',
        content:[
          '小到可以只使用核心功能，比如单文件组件作为一部分嵌入；大到使用整个工程，vue init webpack my-project来构建项目；VUE的核心库及其生态系统也可以满足你的各式需求（core+vuex+vue-route）'
        ],
        img: '',
      },
    ]
  }
]
export default vuelist