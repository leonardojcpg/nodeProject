const express = require("express");
import { v4 as uuid } from "uuid";
import repositoriesRouter from "./routes/repositories.routes";

const app = express();
// para usar um json
app.use(express.json());
// todas as operaçoes que forem feitas no endpoint "/repositories", serão encaminhadas para a rota "repositoriesRouter".
app.use("/repositories", repositoriesRouter);

app.listen(3333, () => {
  console.log("server started!");
});
