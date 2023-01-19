import express from 'express';
import { body, validationResult } from 'express-validator';
// create express instance
const app = express();
// extract json data
app.use(express.json());
const operations = ['+', '-', '/', '*'];
app.post('/calculate', 
[
    body('x').exists().withMessage('x must be defined here').bail().isInt({ min: 0, max: 100 }).withMessage('x value must not be greater than 100'),
    body('y').exists().isInt(),
    body('operation').exists().isIn(operations).withMessage(`please ensure operation value is one of the following ${operations.join(', ')}`)
]
, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    }
  
    const { x ,y ,operation } = req.body;
    let result;
    switch (operation) {
        case '+' :
            result = x + y;
            break;
        case '-': 
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }
    res.send({ result })
})

app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
