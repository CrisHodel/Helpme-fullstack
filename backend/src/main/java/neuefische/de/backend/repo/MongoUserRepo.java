package neuefische.de.backend.repo;

import neuefische.de.backend.model.User;
import neuefische.de.backend.model.UserPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepo extends MongoRepository<User, String > {
    Optional <User> findUserNoSaveByName(String name);
}
