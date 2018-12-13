export interface Router {
  name: string
}

export interface RouterMap {
  [key: string]: Router
}

const routerMap: RouterMap = {
  '/users': {
    name: '用户列表'
  }
}

export default routerMap
