package neuefische.de.backend.controller;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserDTO;
import neuefische.de.backend.model.User;
import neuefische.de.backend.service.MongoUserDetailsService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final MongoUserDetailsService userService;

    @PostMapping("/signUp")
    public UserDTO addUser(@RequestBody User userToAdd){
        return userService.addUser(userToAdd);
    }

    @PostMapping("/signIn")
    void login() {
        SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/user/{id}")
    public UserDTO getUserPageById(@PathVariable String id) {
        return userService.getUserPageById(id);
    }
}

