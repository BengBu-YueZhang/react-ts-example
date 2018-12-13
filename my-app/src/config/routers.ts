export interface Router {
  name: string;
  requiresAuth: boolean;
}

export interface RouterMap {
  [key: string]: Router;
}

const routerMap: RouterMap = {
  '/dashboard': {
    name: '仪表盘',
    requiresAuth: false
  },
  '/users': {
    name: '用户列表',
    requiresAuth: false
  }
}

export default routerMap
