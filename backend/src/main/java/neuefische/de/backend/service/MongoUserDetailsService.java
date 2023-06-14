package neuefische.de.backend.service;

import lombok.RequiredArgsConstructor;
import neuefische.de.backend.model.UserDTO;
import neuefische.de.backend.model.UserNoSave;
import neuefische.de.backend.repo.MongoUserRepo;
import org.springframework.security.core.userdetails.User;
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

    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        UserNoSave optionalUserNoSave = userRepo.findUserNoSaveByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("User with this username: " + name + "not found"));
        return new User(optionalUserNoSave.getName(), optionalUserNoSave.getPassword(), List.of());

    }
   /*public UserDTO addUser(UserNoSave userNoSave){
        userNoSave.setId(generateId.generateUId());
        userNoSave.getPassword(passwordEncoder.encode(userNoSave.getPassword()));
        userRepo.insert(userNoSave);
        return new UserDTO(
                userNoSave.getId(),
        userNoSave.getName(),
        userNoSave.getImg()
        );
}*/
public UserDTO getUserPageById(String id){
    Optional<UserNoSave> userNoSave = userRepo.findById(id);
    return userNoSave.get().convertUserToUserDTO();
}
public List<UserDTO> getAllUser(){
        List<UserNoSave> userNoSaves = new ArrayList<>(userRepo.findAll());
        List<UserDTO> userDTOS = new ArrayList<>();
        for(UserNoSave userNoSave : userNoSaves){
            userDTOS.add(userNoSave.convertUserToUserDTO());
        }
        return userDTOS;
    }
}
