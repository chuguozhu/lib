var combo = require('connect-combo');
var path = require('path');
var connect = require('connect');

var dir = path.join(__dirname, '/');

var app = connect()
  .use(combo({
    directory: dir,
    proxy: 'http://g.alicdn.com/',
    cache: true,
    log: true,
    static: true
  }))
  .listen(1111);
  console.log('127.0.0.1:1111')