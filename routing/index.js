import express from "express";
import nodemon from "nodemon";

const app = express();
// live server:
nodemon
app.use(express.json());

app.all('/student', (req, res, next) => {
    req['unversity']='nnu';
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});

app.get("/student/:student", (req, res) => {
    // const student=req.query.student;
    const student=req.params.student
  res.send(`Hello World! ${student} is Happy!`);
});

app.post("/student", (reqs, res,next)=>{
    reqs['something']='anything';
    next();
},(req, res) => {
    const student=req.body.name;
    console.log(req.body);
    res.send(`Hello World! ${student} is Happy!${req.something}`);
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});


app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);