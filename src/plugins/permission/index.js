import Store from '@/store'
import * as utils from '@/utils'

/**
 * @description 权限检查
 * @param {String|Array} value 需要的权限
 * @param {Object}} config {Boolean} all 全部匹配
 * @param {Object}} config {Boolean} not 取反
 */
export function permission (value = '', { all = false, not = false } = {}) {
  if (_.isArray(value) || _.isString(value)) {
    const permissions = Store.state.permission.flatUserMenu
      .filter(v => v.permission_tag)
      .map(v => v.permission_tag)
    console.log(utils)

    let hasPermission = utils[all ? 'allIn' : 'oneOf'](permissions, value)
    if (not) hasPermission = !hasPermission

    return hasPermission
  } else {
    return false
  }
}

export default {
  install (Vue) {
    Vue.directive('permission', {
      inserted (el, binding) {
        const { modifiers, value } = binding
        const hasPermission = permission(value, modifiers)
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    })
    Vue.prototype.$permission = permission
  }
}
