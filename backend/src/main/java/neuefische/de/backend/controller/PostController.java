package neuefische.de.backend.controller;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserPost;
import neuefische.de.backend.service.MongoPostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PostController {

    private final MongoPostService postService;
    @PostMapping("/post")
    public UserPost addPost(@RequestBody UserPost addUserPost){
        return postService.addPost(addUserPost);
    }

    @GetMapping("/posts")
    public List<UserPost> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/post/")
    public UserPost getPostPageById(@PathVariable String postId){
        return postService.getPostById(postId);
    }
}