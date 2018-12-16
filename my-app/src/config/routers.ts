export interface Router {
  name: string;
  requiresAuth: boolean;
}

export interface RouterMap {
  [key: string]: Router;
}

const routerMap: RouterMap = {
  '/login': {
    name: '登录',
    requiresAuth: false
  },
  '/dashboard': {
    name: '仪表盘',
    requiresAuth: true
  },
  '/users': {
    name: '用户列表',
    requiresAuth: true
  }
}

export default routerMap
