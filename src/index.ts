import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => res.send({ hello: "world" }));

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`App running on PORT: ${PORT}`);
});
