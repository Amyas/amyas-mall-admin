/**
 * @description 筛选匹配异步路由
 *
 * @param {*} menuSource 接口获取的路由
 * @param {*} asyncRoutes  router里的路由
 */
export function filterAsyncRoutes (menuSource, asyncRoutes) {
  function maker (routes, sourceItem) {
    if (hasRouteChildren(sourceItem)) {
      routes = routes.concat(sourceItem.children.reduce(maker, []))
    } else {
      const route = asyncRoutes.find(v => v.name === sourceItem.route_name)
      routes.push(route)
    }
    return routes
  }
  return menuSource.reduce(maker, [])
}

/**
 * @description 判断当前路由是否存在子路由
 *
 * @param {Object} item 路由
 */
export function hasRouteChildren (item = {}) {
  if (item.children && item.children.length) return true
  return false
}
