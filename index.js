const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://contract.mexc.com',
  changeOrigin: true,
  secure: true,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = '*';
  }
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy działa na porcie ${port}`);
});
