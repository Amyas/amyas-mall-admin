/**
 * @description 扁平化路由
 * @param {Array} arr 路由
 */
export function flatRoutes (arr) {
  return arr.reduce((routes, current) => {
    const { children, ...route } = current
    routes.push(route)
    if (children && children.length) {
      return routes.concat(flatRoutes(children))
    }
    return routes
  }, [])
}

/**
 * @description 筛选匹配异步路由
 * @param {*} menuSource 接口获取的路由
 * @param {*} asyncRoutes  router里的路由
 */
export function filterAsyncRoutes (menuSource, asyncRoutes) {
  function maker (routes, sourceItem) {
    const currentAsyncRoute = flatRoutes(asyncRoutes).find(v => v.name === sourceItem.route_name)

    // 如果接口返回的路由前端并没有实现就不显示了
    if (!currentAsyncRoute) return routes

    const { children, ...route } = currentAsyncRoute

    // 存在子路由，递归一下
    if (hasRouteChildren(sourceItem)) {
      route.children = sourceItem.children.reduce(maker, [])
    }

    routes.push(route)

    return routes
  }
  return menuSource.reduce(maker, [])
}

/**
 * @description 判断当前路由是否存在子路由
 * @param {Object} item 子路由
 */
export function hasRouteChildren (item = {}) {
  if (item.children && item.children.length) return true
  return false
}
