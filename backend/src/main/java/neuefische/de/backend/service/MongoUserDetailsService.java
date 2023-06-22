package neuefische.de.backend.service;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserDTO;
import neuefische.de.backend.model.User;
import neuefische.de.backend.repo.MongoUserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {
    private final MongoUserRepo userRepo;
    private final GenerateId generateId;

    private final PasswordEncoder passwordEncoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();


    public UserDTO addUser(User userToAdd) {
        userToAdd.setId(generateId.generateUId());
        userToAdd.setPassword(passwordEncoder.encode(userToAdd.getPassword()));
        userRepo.insert(userToAdd);
        return new UserDTO(
                userToAdd.getId(),
                userToAdd.getName(),
                userToAdd.getImg()
        );
    }
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        User optionalUser = userRepo.findUserNoSaveByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("User with this username: " + name + "not found"));
        return new org.springframework.security.core.userdetails.User(optionalUser.getName(), optionalUser.getPassword(), List.of());
    }

    public UserDTO getUserPageById(String id){
    Optional<User> user = userRepo.findById(id);
    return user.get().convertUserToUserDTO();
}
    public List<UserDTO> getAllUser(){
        List<User> users = new ArrayList<>(userRepo.findAll());
        List<UserDTO> userDTOS = new ArrayList<>();
        for(User user : users){
            userDTOS.add(user.convertUserToUserDTO());
        }
        return userDTOS;
    }
}
