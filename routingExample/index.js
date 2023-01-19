import express from "express";
import birdsRouter from './birds-router.js';

const app = express();

app.use('/birds', birdsRouter)

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
