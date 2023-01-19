import express from "express";

const app = express();

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name} !`);
});
/**
 * Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

 */
app.get("/:from-:to", (req, res) => {
    res.send(`from ${req.params.from} - to ${req.params.to}`);
});
  


/***
 * multiple handlers
 */
app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
