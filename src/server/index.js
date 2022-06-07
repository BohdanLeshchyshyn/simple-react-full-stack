/* eslint-disable quotes */
const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
  res.set({
    'Content-Security-Policy': `script-src 'self'`,
  });

  next();
});

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
