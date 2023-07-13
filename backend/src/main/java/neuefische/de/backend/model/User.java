package neuefische.de.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("User")
public class User {

    private String id;
    private String name;
    private String password;
    private String img;

    public UserDTO convertUserToUserDTO() {
        return new UserDTO(
                id,
                name,
                img
        );
    }

}
