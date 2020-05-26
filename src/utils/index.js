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

/**
 * @description 在 source 包括 need
 * @param {Array} source 数据源
 * @param {Array} need 需要存在的项目
 */
export function allIn (source, need) {
  if (_.isArray(need)) return need.every(v => source.includes(v))
  return source.includes(need)
}

/**
 * @description 在 source 中是否至少有一个 need 中的项目
 * @param {Array} source 数据源
 * @param {Array} need 需要存在的项目
 */
export function oneOf (source, need) {
  if (_.isArray(need)) return need.some(v => source.includes(v))
  return source.includes(need)
}
