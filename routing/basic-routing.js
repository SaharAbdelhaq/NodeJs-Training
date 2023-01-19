import express from "express";

const app = express();
app.use(express.json());
// attach univeristy
app.all('/student', (req, res, next) => {
  req['university'] = 'nnu';
  next() // pass control to the next handler
});
app.post("/student", (req, response, next) => {
  req['something'] = 'anything';
  if (req.body.name === 'noor') {
    response.send(`${req.body.name} is not happyvery happy!`);
  }
  if (typeof req.body.name !== 'string') {
    throw new Error();
  }
  if (req.body.name.length > 30) {
    throw new Error();
  }
  next();
},(request, res) => {
  const student = request.body.name;
  console.log(request.body)
  res.send(`${student} is very happy! ${request.university} ${request.something}`);
});

app.post("/dana", (req, res) => {
  throw new Error();
  res.send("");
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
