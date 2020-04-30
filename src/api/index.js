import apis from './apis'

const install = Vue => {
  Vue.prototype.$apis = apis
}

const WmApi = apis
WmApi.install = install

export default WmApi
