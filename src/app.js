const express = require("express");
import { v4 as uuid } from "uuid";
import repositoriesRouter from "./routes/repositories.routes";
import sessionRouter from "./routes/sessions.routes";
import userRouter from './routes/users.routes'

const app = express();
// para usar um json
app.use(express.json());

// todas as operaçoes que forem feitas no endpoint "/repositories", serão encaminhadas para a rota "repositoriesRouter".
app.use("/repositories", repositoriesRouter);
app.use("/users", userRouter)
app.use("/sessions", sessionRouter)


app.listen(3333, () => {
  console.log("server started!");
});
