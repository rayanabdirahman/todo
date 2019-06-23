import express from "express";
import routes from "./routes/index";

const app = express();
const PORT = 8080;

// direct routes to route file
app.use("/", routes);

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`App running on PORT: ${PORT}`);
});
