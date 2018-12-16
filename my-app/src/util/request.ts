/**
 * 假的请求
 */
export function login (): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        token: 'love199471',
        msg: 'success'
      })
    }, 2000)
  })
}

export function logout (): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        msg: 'success'
      })
    }, 500)
  })
}

export function getDashboardData (): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        msg: 'success'
      })
    }, 500)
  })
}

export function getUsers (): Promise<any> {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        msg: 'success',
        data: [
          {
            username: '张越',
            age: 24,
            job: '前端开发'
          },
          {
            username: '王琼',
            age: 24,
            job: '前端开发'
          },
          {
            username: '戴伟',
            age: 24,
            job: 'Node开发'
          },
          {
            username: '李航',
            age: 24,
            job: 'Node开发'
          }
        ]
      })
    }, 500)
  })
}
