// https://github.com/nan-gong/vuepress-demo/tree/master/docs/tech/interview#5-%E5%88%A0%E6%A0%BC%E5%8C%96%E7%9A%84%E5%8E%9F%E7%90%86
const jslist = [
  {
    category:'JS相关',
    children:[
      {
        title: 'ES5和ES6继承方式区别',
        des:'',
        link: '',
        content:[
          'ES5定义类以函数形式, 以prototype来实现继承',
          'ES6以class形式定义类, 以extend形式继承',
        ],
        img: '',
      },
      {
        title: 'Generator了解',
        des:'ES6 提供的一种异步编程解决方案, Generator 函数是一个状态机，封装了多个内部状态。',
        link: 'https://es6.ruanyifeng.com/#docs/generator',
        content:[
          '',
        ],
        img: '1-1.png',
      },
      {
        title: '手写Promise实现',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-2.png',
      },
      {
        title: 'Promise优缺点',
        des:'',
        link: '',
        content:[
          '优点: 解决回调地狱, 对异步任务写法更标准化与简洁化',
          '缺点: 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消; 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部; 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成). 极简版promise封装:',
        ],
        img: '',
      },
      {
        title: '观察者模式',
        des:'又称发布-订阅模式, 举例子说明. 实现: 发布者管理订阅者队列, 并有新消息推送功能. 订阅者仅关注更新就行',
        link: 'https://www.cnblogs.com/gradolabs/p/4786782.html',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: '手写实现bind',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-5.png',
      },
      {
        title: '手写实现4种继承',
        des:'',
        link: 'https://www.jianshu.com/p/159b07f2d877',
        content:[
          '',
        ],
        img: '1-6.png',
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
          '304: Not Modified. 指定日期后未修改, 不返回资源',
        ],
        img: '',
      },
      {
        title: 'Object.create实现（原型式继承，特点：实例的__proto__指向构造函数本身）',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: 'async和await：(ES8)',
        des:'',
        link: '',
        content:[
          'Generator函数的语法糖，将*改成async，将yield换成await。',
          '是对Generator函数的改进, 返回promise。',
          '异步写法同步化，遇到await先返回，执行完异步再执行接下来的.',
          '内置执行器, 无需next()',
        ],
        img: '',
      },
      {
        title: '算法和数据结构：',
        des:'',
        link: '',
        content:[
          '算法： 解决具体问题所需要的解决方法。执行效率最快的最优算法。时间复杂度。输入，输出，有穷性，确定性，可行性。冒泡排序，二叉树遍历，最长回文，二分查找，指针，链表等，堆栈，队列等。力扣，codewar，算法导论。',
          '数据结构： 逻辑结构：集合、线性、树形、图形结构 物理结构：顺序、链式存储结构',
        ],
        img: '',
      },
      {
        title: '封装JSONP',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-12.png',
      },
      {
        title: '手动实现map(forEach以及filter也类似)',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-13.png',
      },
      {
        title: 'js实现checkbox全选以及反选',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-14.png',
      },
      {
        title: '对原型链的理解？prototype上都有哪些属性',
        des:'',
        link: 'https://www.jianshu.com/p/17b2d4dd6867',
        content:[
          '在js里，继承机制是原型继承。继承的起点是 对象的原型（Object prototype）。',
          '一切皆为对象，只要是对象，就会有 proto 属性，该属性存储了指向其构造的指针。',
          'Object prototype也是对象，其 proto 指向null。',
          '对象分为两种：函数对象和普通对象，只有函数对象拥有『原型』对象（prototype）。',
          'prototype的本质是普通对象。',
          'Function prototype比较特殊，是没有prototype的函数对象。',
          'new操作得到的对象是普通对象。',
          '当调取一个对象的属性时，会先在本身查找，若无，就根据 proto 找到构造原型，若无，继续往上找。最后会到达顶层Object prototype，它的 proto 指向null，均无结果则返回undefined，结束。',
          '由 proto 串起的路径就是『原型链』。',
          '通过prototype可以给所有子类共享属性',
          '函数（Function）才有prototype属性，对象（除Object）拥有__proto__',
          '实例的__proto__等于构造函数的prototype',
          '实例的constructor指向构造函数',
        ],
        img: '',
      },
      {
        title: '为什么使用继承',
        des:'',
        link: '',
        content:[
          '通常在一般的项目里不需要,因为应用简单,但你要用纯js做一些复杂的工具或框架系统就要用到了,比如webgis、或者js框架如jquery、ext什么的,不然一个几千行代码的框架不用继承得写几万行,甚至还无法维护',
        ],
        img: '',
      },
      {
        title: 'setTimeout时间延迟为何不准',
        des:'',
        link: '',
        content:[
          'js是单线程, 先执行同步主线程, 再执行异步任务队列',
        ],
        img: '',
      },
      {
        title: '事件循环述，宏任务和微任务有什么区别？',
        des:'',
        link: 'https://www.jianshu.com/p/03b89adb3ddd',
        content:[
          '先主线程后异步任务队列',
          '先微任务再宏任务',
        ],
        img: '',
      },
      {
        title: 'let const var作用域',
        des:'',
        link: '',
        content:[
          'var全局作用域，可以跨块访问, 不能跨函数访问，有变量提升',
          'let const块级作用域, 存在暂时性死区',
        ],
        img: '',
      },
      {
        title: '节流和防抖',
        des:'',
        link: 'https://www.cnblogs.com/walls/p/6399837.html',
        content:[
          '',
        ],
        img: '1-20.png',
      },
      {
        title: '实现一个sleep函数',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-21.png',
      },
      {
        title: '闭包',
        des:'概念: 内层函数能够访问外层函数作用域的变量；缺点: 引起内存泄漏（释放内存）',
        link: '',
        content:[
          '作用：',
          '保护this指向',
          '使用闭包修正打印值',
          '实现柯里化',
          '实现node commonJs 模块化, 实现私有变量',
          '保持变量与函数活性, 可延迟回收和执行'
        ],
        img: '',
      },
      {
        title: 'Immutable.js',
        des:'Facebook出品, 倡导数据的不可变性, 用的最多就是List和Map.',
        link: 'https://www.jianshu.com/p/0fa8c7456c15',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: ' js实现instanceof',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-24.png',
      },
      {
        title: 'ES6的模块引入和CommonJs区别',
        des:'',
        link: 'https://www.cnblogs.com/unclekeith/archive/2017/10/17/7679503.html',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: '严格模式',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-27.png',
      },
      {
        title: 'typescript缺点',
        des:'',
        link: '',
        content:[
          '并不是严格意义的js的超集, 与js不完全兼容, 会报错',
          '更多的限制, 是一种桎梏',
          '有些js第三方库没有dts, 有问题',
        ],
        img: '',
      },
      {
        title: '构造函数实现原理（new操作符做了什么）',
        des:'',
        link: '',
        content:[
          '构造函数中没有显示的创建Object对象, 实际上后台自动创建了一个空对象',
          '直接给this对象赋值属性和方法, this即指向创建的对象',
          '没有return返回值, 后台自动返回了该对象',
          '该对象继承构造函数的原型',
        ],
        img: '1-30.png',
      },
      {
        title: 'for in 和 for of区别',
        des:'',
        link: 'https://www.jianshu.com/p/c43f418d6bf0',
        content:[
          'for in遍历数组会遍历到数组原型上的属性和方法, 更适合遍历对象',
          'forEach不支持break, continue, return等',
          '使用for of可以成功遍历数组的值, 而不是索引, 不会遍历原型',
          'for in 可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性',
        ],
        img: '',
      },
      {
        title: 'JS实现并发控制:',
        des:'',
        link: '',
        content:[
          '使用消息队列以及setInterval或promise进行入队和出队',
        ],
        img: '',
      },
      {
        title: 'ajax和axios、fetch的区别',
        des:'',
        link: 'https://www.jianshu.com/p/8bc48f8fde75',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: 'promise.finally实现',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-34.png',
      },
      {
        title: '实现symbol',
        des:'',
        link: 'https://segmentfault.com/a/1190000015262174',
        content:[
          '',
        ],
        img: '1-35.png',
      },
      {
        title: 'Object.create()创建对象',
        des:'',
        link: 'https://www.jianshu.com/p/28d85bebe599',
        content:[
          '',
        ],
        img: '',
      },
      {
        title: 'ES6装饰器',
        des:'是一种函数，用于改变类或方法的功能，起到注释作用函数：',
        link: '',
        content:[
        ],
        img: '1-36.png',
      },
      {
        title: '实现fetch abort',
        des:'',
        link: '',
        content:[
          '',
        ],
        img: '1-37.png',
      },
      {
        title: '使用xhr实现fetch',
        des:'',
        link: '',
        content:[
          'fetch是ajax替代品，基于promise。',
          '类似于jquey ajax，但不是ajax封装，而是原生js,，没有使用XHR对象',
          '比ajax方便，但仍然不完善，建议使用axios库',
          'fetch有而axios没有的问题：',
          '兼容性问题',
          '默认不带cookie，需要手动设置credentials',
          '跨域问题，需要手动设置mode',
          '返回400、500不识别为reject',
          '无法abort和timeout',
        ],
        img: '1-38.png',
      },
      {
        title: 'JS中数值存储',
        des:'',
        link: '',
        content:[
          'javascript 中所有的数值类型都是双精度存储的，使用 64bit，64bit 等于 8byte',
          '中文占2个字节（byte） 中文里标点也占2个字节（byte） 英文里的子母不分大小写，一个子母占1个字节（字节） 英文里的标点占1个字节。 1字节（byte）=8位（bits）',
          '当任何数字在进行位运算时 js 内部会将其转换成32位有符号整型',
        ],
        img: '',
      },
      {
        title: 'this指向：',
        des:'',
        link: 'https://juejin.cn/post/6844903729624252424',
        content:[
          '谁调用了方法，该方法的this就指向谁;',
          '优先级：箭头函数 > new绑定 > 显示绑定 > 隐式绑定',
        ],
        img: '',
      },
    ]
  }
]
export default jslist