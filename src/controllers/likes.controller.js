import likeRepositoryService from "../services/likes/likeRepository.service";

export default class LikesController {
  store(request, response) {
    const { id } = request.params;

    try {
      const repository = likeRepositoryService({ id });
      return response.json(repository);
    } catch (err) {
      return response.status(400).json({
        error: "error",
        message: err.message,
      });
    }
  }
}
