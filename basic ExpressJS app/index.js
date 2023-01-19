import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.send('<h1>Welcome to you first Express App</h1>');
});

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);

