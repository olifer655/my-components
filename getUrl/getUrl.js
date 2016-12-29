/**
 * @param url {String} - 路由
 * absolute path: https://h5.ele.me/sales/a/, http/https is required
 * OR
 * relative path: /sales/ or ../a or ./a
 * @param param {Object} - 路由中所带的参数
 * @param type {String} - hash || search （hash is default.）
 * @param animationType {Number} - 页面打开方式——0： 新页面自下而上压进, 1：新页面自右向左压进
 * @return 完整的 url
 */

const getUrl = (url, param = {}, type = 'hash', animationType = 1) => {
  let result = ''

  let checkUrl = url => {
    let parser = document.createElement('a')

    parser.href = url
    return parser.href
  }

  if (JSON.stringify(param) !== '{}') {
    result = type === 'hash' ? '#' : '?'
    for (var key in param) {
      let value = param[key]
      if (typeof value === 'object' && value) {
        result += `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}&`
      } else {
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
      }
    }
  }

  if (!/^https?:\/\//.test(url)) {
    url = checkUrl(url)
  }

  result = `${url}${result.replace(/&$/, '')}`

  return result
}

export default getUrl
