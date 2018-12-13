export interface Router {
  name: string;
  requiresAuth: boolean;
}

export interface RouterMap {
  [key: string]: Router;
}

const routerMap: RouterMap = {
  '/users': {
    name: '用户列表',
    requiresAuth: false
  }
}

export default routerMap
