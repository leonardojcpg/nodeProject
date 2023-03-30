import {repositories} from "../../database";

const updateRepositoryService = ({ id, title, url, techs }) => {
  let repository = repositories.find((item) => item.id === id);

  if (!repository) {
    throw new Error("Repository not found");
  }

  const updateRepo = { id, title, url, techs, likes: 0 };

  repositories.splice(repository);

  repository = updateRepo;

  repositories.push(repository);

  return repository
}

export default updateRepositoryService;
