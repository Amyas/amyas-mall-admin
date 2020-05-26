import * as permission from './modules/permission'

export default {
  permission
}

/**
 * @description 断言
 * @param {Boolean} condition 条件
 * @param {String} module 模块
 * @param {String} msg 提示内容
 */
export function assert (condition, module, msg) {
  if (!condition) throw new Error(`[${module}] ${msg}`)
}
