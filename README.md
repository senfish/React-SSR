# React-SSR
学习React-SSR原理


## 什么是SSR

```js
const express = require('express');
const app = express()

app.get('/', (req, res) => {
 res.send(
 `
   <html>
     <head>
       <title>hello</title>
     </head>
     <body>
       <h1>hello</h1>
       <p>world</p>
     </body>
   </html>
 `
 )
})

app.listen(3001, () => {
 console.log('listen:3001')
})
```

ssr ： 服务端返回一个html文件，
csr ： 服务端返回js，让js负责渲染


## 支持router
建立一个公共的app.js
client.js
```js
import {
  BrowserRouter
} from 'react-router-dom';
const root = document.getElementById('root');
import routesConfig from './routesConfig';
import {useRoutes} from 'react-router-dom';

hydrateRoot(root, 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App () {
  return (
    useRoutes(routesConfig)
  )
};
```

server.js
```js
const express = require('express');
import App from '../App.js';
import Counter from '../router/counter'
import {StaticRouter} from 'react-router-dom/server'
import React from 'react';
import {renderToString} from 'react-dom/server';
const app = express();

app.use(express.static('public'));

app.get('*', (res, req) => {
  const html = renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  )
  console.log('html: ', html);
  req.send(`
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000)
```


