import express from 'express';
import { getComputerPrediction, getWinner } from './service.js';

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the about route
router.post('/', (req, res) => {
  const userPrediction = req.body.data;
  const computerPrediction = getComputerPrediction();
  const winner = getWinner(userPrediction, computerPrediction);
  res.send({
    user: userPrediction,
    computer: computerPrediction,
    winner
  });
})


export default router