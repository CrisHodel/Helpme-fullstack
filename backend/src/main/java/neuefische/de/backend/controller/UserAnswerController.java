package neuefische.de.backend.controller;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserAnswer;
import neuefische.de.backend.model.UserPost;
import neuefische.de.backend.service.MongoAnswerService;
import neuefische.de.backend.service.MongoPostService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserAnswerController {

    private final MongoAnswerService answerService;

    @PostMapping("/answer")
    public UserAnswer addUserAnswer(@RequestBody UserAnswer userAnswer){
        return answerService.addAnswer(userAnswer);
    }
    @GetMapping("/answer/{answerId}")
    public UserAnswer getAnswerPageById(@PathVariable String answerId){
        return answerService.getAnswerById(answerId);
    }
}
