const { createProxyMiddleware } = require('http-proxy-middleware')
const DEV_SERVER = 'localhost:1010'

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${DEV_SERVER}`,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': '',
      },
    }),
  )

  app.use(
    createProxyMiddleware('/ws', {
      target: `ws://${DEV_SERVER}`,
      ws: true,
    }),
  )
}
