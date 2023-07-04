package neuefische.de.backend.controller;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserDTO;
import neuefische.de.backend.model.User;
import neuefische.de.backend.service.MongoUserDetailsService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public UserDTO login() {
      return userService.login( SecurityContextHolder.getContext().getAuthentication().getName());
    }

    @GetMapping("/user/{id}")
    public UserDTO getUserPageById(@PathVariable String id) {
        return userService.getUserPageById(id);
    }

    @GetMapping("/users")
    public List<UserDTO> getAllUser() {
        return userService.getAllUser();
    }
}

