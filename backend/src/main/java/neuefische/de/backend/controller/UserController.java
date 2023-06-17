package neuefische.de.backend.controller;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserDTO;
import neuefische.de.backend.model.User;
import neuefische.de.backend.service.MongoUserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final MongoUserDetailsService userService;

    @PostMapping("/signUp/user")
    public UserDTO addUser(@RequestBody User userToAdd){
        return userService.addUser(userToAdd);
    }
}
