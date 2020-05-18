export const login = credentials =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          token: '44444',
          user: {
            name: 'marcus',
            email: 'marcus@gmail.com',
          },
        },
      })
    }, 3000)
  })

