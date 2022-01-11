const performancelist = [
  {
    category:'前端性能优化',
    name:'performance',
    children: [
      {
        title: '性能优化方法',
        des:'',
        link: 'https://segmentfault.com/a/1190000015883378?utm_source=tag-newest',
        content:[
          '减少HTTP请求（合并css、js，雪碧图/base64图片）',
          '压缩（css、js、图片皆可压缩,使用webpack uglify和 svg）',
          '样式表放头部，脚本放底部',
          '使用CDN（这部分，不少前端都不用考虑，负责发布的兄弟可能会负责搞好）',
          'http缓存',
          'bosify图片压缩: 根据具体情况修改图片后缀或格式 后端根据格式来判断存储原图还是缩略图',
          '懒加载, 预加载',
          '替代方案: 骨架屏, SSR',
          'webpack优化',
        ],
        img: '',
      },
    ]
  }
]
export default performancelist