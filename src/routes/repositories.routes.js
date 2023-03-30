import { Router } from "express";
import LikesController from "../controllers/likes.controller";
import RepositoriesController from "../controllers/repositories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const repositoriesRouter = Router();

const repositoriesController = new RepositoriesController();
const likesController = new LikesController();

repositoriesRouter.use(ensureAuthMiddleware)
// do middleware pra baixo vai passar pela verificacao 

repositoriesRouter.get("", repositoriesController.index);
repositoriesRouter.get("/:id", repositoriesController.show);
repositoriesRouter.post("", repositoriesController.store);
repositoriesRouter.put("/:id", repositoriesController.update);
repositoriesRouter.delete("/:id", repositoriesController.delete);
repositoriesRouter.post("/:id/like", likesController.store);

export default repositoriesRouter;
