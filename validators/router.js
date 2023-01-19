import express from 'express';
import { body, validationResult } from 'express-validator';
import { getComputerPrediction, getWinner, predictions } from './service.js';

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the about route
router.post('/', 
[
  body('data').isIn(predictions).withMessage(`data should be one of ${predictions.join(', ')}`)
],
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  }
  next();
},
(req, res) => {
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
