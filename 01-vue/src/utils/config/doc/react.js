const reactlist = [
  {
    category:'react相关',
    name:'react',
    children: [
      {
        title: '新旧生命周期',
        des:'',
        link: 'https://segmentfault.com/a/1190000016617400',
        content:[
          '旧: will, did; mount, update...',
          '新: 16版本之后:',
          'getDerivedStateFromProps: 虚拟dom之后，实际dom挂载之前, 每次获取新的props或state之后, 返回新的state, 配合didUpdate可以替代willReceiveProps',
          'getSnapshotBeforeUpdate: update发生的时候，组件更新前触发, 在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法',
          'componentDidCatch: 错误处理',
          '对比: 弃用了三个will, 新增两个get来代替will, 不能混用, 17版本会彻底删除. 新增错误处理',
        ],
        img: '',
      },
      {
        title: 'react核心',
        des:'',
        link: 'https://www.cnblogs.com/mahmud/p/10099672.html',
        content:[
          '虚拟DOM, Diff算法, 遍历key值',
          'react-dom: 提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上 或 配合ref来操作DOM',
          'react-router',
        ],
        img: '',
      },
      {
        title: 'fiber核心(react 16)',
        des:'',
        link: '',
        content:[
          '旧: 浏览器渲染引擎单线程, 计算DOM树时锁住整个线程, 所有行为同步发生, 有效率问题, 期间react会一直占用浏览器主线程，如果组件层级比较深，相应的堆栈也会很深，长时间占用浏览器主线程, 任何其他的操作（包括用户的点击，鼠标移动等操作）都无法执行',
          '新: 重写底层算法逻辑, 引入fiber时间片, 异步渲染, react会在渲染一部分树后检查是否有更高优先级的任务需要处理(如用户操作或绘图), 处理完后再继续渲染, 并可以更新优先级, 以此管理渲染任务. 加入fiber的react将组件更新分为两个时期（phase 1 && phase 2），render前的生命周期为phase1，render后的生命周期为phase2, 1可以打断, 2不能打断一次性更新. 三个will生命周期可能会重复执行, 尽量避免使用',
        ],
        img: '',
      },
      {
        title: '渲染一个react',
        des:'',
        link: '',
        content:[
          '分为首次渲染和更新渲染',
          '生命周期, 建立虚拟DOM, 进行diff算法',
          '对比新旧DOM, 节点对比, 将算法复杂度从O(n^3)降低到O(n)',
          'key值优化, 避免用index作为key值, 兄弟节点中唯一就行',
        ],
        img: '',
      },
      {
        title: '高阶组件',
        des:'高阶组件就是一个函数，且该函数(wrapper)接受一个组件作为参数，并返回一个新的组件。 高阶组件并不关心数据使用的方式和原因，而被包裹的组件也不关心数据来自何处.',
        link: '',
        content:[
          'react-dnd: 根组件, source, target等 export default DragSource(type, spec, collect)(MyComponent)',
          '重构代码库使用HOC提升开发效率',
        ],
        img: '',
      },
      {
        title: 'hook(v16.7测试)',
        des:'在无状态组件(如函数式组件)中也能操作state以及其他react特性, 通过useState',
        link: '',
        content:[
          ''
        ],
        img: '',
      },
      {
        title: 'redux和vuex以及dva：',
        des:'',
        link: '',
        content:[
          'redux: 通过store存储，通过action唯一更改，reducer描述如何更改。dispatch一个action',
          'dva: 基于redux，结合redux-saga等中间件进行封装',
          'vuex：类似dva，集成化。action异步，mutation非异步',
        ],
        img: '',
      },
      {
        title: 'react和vue的区别',
        des:'',
        link: '',
        content:[
          '数据是否可变: react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推崇结合immutable来实现数据不可变; vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。总之，react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。',
          '通过js来操作一切，还是用各自的处理方式: react的思路是all in js，通过js来生成html，所以设计了jsx，还有通过js来操作css，社区的styled-component、jss等; vue是把html，css，js组合到一起，用各自的处理方式，vue有单文件组件，可以把html、css、js写到一个文件中，html提供了模板引擎来处理。',
          '类式的组件写法，还是声明式的写法: react是类式的写法，api很少; 而vue是声明式的写法，通过传入各种options，api和参数都很多。所以react结合typescript更容易一起写，vue稍微复杂。',
          '扩展不同: react可以通过高阶组件（Higher Order Components--HOC）来扩展，而vue需要通过mixins来扩展',
          '什么功能内置，什么交给社区去做: react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些， 比如 redux的combineReducer就对应vuex的modules， 比如reselect就对应vuex的getter和vue组件的computed， vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要。',
        ],
        img: '',
      },
      {
        title: 'react单向数据流怎么理解',
        des:'',
        link: '',
        content:[
          'React是单向数据流，数据主要从父节点传递到子节点（通过props）。如果顶层（父级）的某个props改变了，React会重渲染所有的子节点'
        ],
        img: '',
      },
      {
        title: 'React算法复杂度优化',
        des:'',
        link: '',
        content:[
          'react树对比是按照层级去对比的， 他会给树编号0,1,2,3,4.... 然后相同的编号进行比较。 所以复杂度是n，这个好理解。',
          '关键是传统diff的复杂度是怎么算的？ 传统的diff需要出了上面的比较之外，还需要跨级比较。 他会将两个树的节点，两两比较，这就有n^2的复杂度了。 然后还需要编辑树，编辑的树可能发生在任何节点，需要对树进行再一次遍历操作，因此复杂度为n。加起来就是n^3了。',
        ],
        img: '',
      },
      {
        title: 'React优点',
        des:'',
        link: '',
        content:[
          '声明式, 组件化, 一次学习, 随处编写. 灵活, 丰富, 轻巧, 高效'
        ],
        img: '',
      },
      {
        title: 'React事件机制',
        des:'',
        link: '',
        content:[
          '合成事件：',
          '根据事件类型，采用不同的SyntheticEvent来构造不同的合成事件',
          'syntheticEvent 和原生浏览器事件一样拥有同样的接口，也支持事件冒泡机制。可以通过stopPropgation和preventDefault中断',
          '如果需要访问原生事件对象，可以使用nativeEvent属性',
          '实现机制：',
          'react 的事件机制利用了事件委托机制',
          '没有绑定在真实的dom节点上，而是把事件都绑定在结构的最外层document，统一由这个监听器分发',
          '注册：组件挂载和更新时，将绑定事件分类放入EventPluginHub事件池',
          '触发：根据事件产生的Event对象找到触发事件的组件，再通过组件标识和事件类型从事件池里找到对应的事件监听回调并执行',
          'react中使用原生',
          '在didmount中对真实dom进行原生绑定，在unmount解绑，防止内存泄漏',
          'syntheticEvent的stopPropgation无法阻止原生事件的冒泡，但原生可以组织合成，所以尽量不要混用，除非使用e.target判断',
          '异步回调使用syntheticEvent：',
          '合成事件里，回调执行后会销毁事件对象',
          '异步回调需使用event.persist()告诉react不要回收',
          '与原生冒泡捕获对比：',
          '原生的捕获机制并不常用，且具有 ie 的不兼容问题',
          'react仅实现冒泡机制，无兼容问题，只有document节点上才有 DOM 事件也节约了内存',
          '事件执行：',
          '找到事件触发的DOM和React Component，调用findParent方法',
          '遍历得到所有父组件，存在数组中',
          '从该组件直到最后一个父组件，根据之前事件存储，用 React 事件名 + 组件 key，找到对应绑定回调方法',
        ],
        img: '',
      },
    ]
  }
]
export default reactlist