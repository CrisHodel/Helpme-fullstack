package neuefische.de.backend.service;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.controller.UserAnswerController;
import neuefische.de.backend.model.UserAnswer;
import neuefische.de.backend.model.UserPost;
import neuefische.de.backend.repo.MongoAnswerRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MongoAnswerService {
    private final MongoAnswerRepo answerRepo;

    public UserAnswer addAnswer(UserAnswer addAnswer){
        answerRepo.insert(addAnswer);
        return addAnswer;
    }
    public UserAnswer getAnswerById(String answerId){
        Optional<UserAnswer> userAnswer = answerRepo.findById(answerId);
        return userAnswer.get();
    }
}
