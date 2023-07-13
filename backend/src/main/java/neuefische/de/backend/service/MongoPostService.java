package neuefische.de.backend.service;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserAnswer;
import neuefische.de.backend.model.UserPost;
import neuefische.de.backend.repo.MongoPostRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MongoPostService {

    private final MongoPostRepo postRepo;

    public UserPost addPost(UserPost addUserPost){
        postRepo.insert(addUserPost);
        return addUserPost;
    }

    public List<UserPost> getAllPosts() {
        return postRepo.findAll();
    }

    public UserPost getPostById(String postId){
        Optional<UserPost> userPost = postRepo.findById(postId);
        return userPost.get();
    }

}
