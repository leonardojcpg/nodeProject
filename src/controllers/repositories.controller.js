import repositories from "../database";
import createRepositoryService from "../services/repositories/createRepository.service";
import deleteRepositoryService from "../services/repositories/deleteRepository.service";
import findRepositoryService from "../services/repositories/findRepository.service";
import listRepositoriesService from "../services/repositories/listRepositories.services";
import updateRepositoryService from "../services/repositories/updateRepository.service";

export default class RepositoriesController {
  // criar
  store(request, response) {
    const { title, url, techs } = request.body;

    const repository = createRepositoryService({ title, url, techs });

    return response.status(201).json(repository);
  }

  // listar
  index(request, response) {
    const repositories = listRepositoriesService();

    return response.json(repositories);
  }

  // buscar um recurso
  show(request, response) {
    const {id} = request.params

    try {
        const repository = findRepositoryService({id})
        return response.json(repository)
    } catch(err){
        return response.status(400).json({
            error: "error",
            message: err.message,
        })
    }
  }

  // atualizar
  update(request, response) {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    try {
      const repository = updateRepositoryService({ id, title, url, techs });
      return response.json(repository);
    } catch (err) {
      return response.status(400).json({
        status: "err",
        message: err.message,
      });
    }
  }

  // deletar
  delete(request, response) {
    const { id } = request.params;

    try {
      deleteRepositoryService({ id });
      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({
        error: "error",
        message: err.message,
      });
    }
  }
}
