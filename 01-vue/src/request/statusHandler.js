export default {
  0: response => response,
  40101: (response) => {
    console.log('获取token失败')
  },
  'error': (response) => { // 其他错误
    console.log('error')
  },
  'timeout': () => {
    console.log('请求超时')
  },
  'network': () => { // 服务器异常
    console.log('网络请求异常')
  },
}
