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

