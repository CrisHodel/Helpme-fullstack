package neuefische.de.backend.repo;

import neuefische.de.backend.controller.UserAnswerController;
import neuefische.de.backend.model.UserAnswer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoAnswerRepo extends MongoRepository<UserAnswer, String> {
}
