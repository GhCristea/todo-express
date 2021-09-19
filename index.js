const express = require("express");
const { todosRouter, userRouter } = require("./routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use(todosRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log("app listening on port ", port);
});
