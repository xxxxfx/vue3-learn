class Axios {
  constructor() {

  }
  request(config) {
    const {url = '', method = 'Get', data = {}} = config
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true) // true是异步发送
    xhr.onload = function() {}
    xhr.send()
  }
}