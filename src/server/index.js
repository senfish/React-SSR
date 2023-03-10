const express = require('express');
import Counter from '@/router/counter.js';
import React from 'react';
import {renderToString} from 'react-dom/server';
const app = express();

app.use(express.static('public'));

app.get('*', (res, req) => {
  const html = renderToString(<Counter />)
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