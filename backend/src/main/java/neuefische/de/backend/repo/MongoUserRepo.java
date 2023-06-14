package neuefische.de.backend.repo;

import neuefische.de.backend.model.UserNoSave;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepo extends MongoRepository<UserNoSave, String > {
    Optional <UserNoSave> findUserNoSaveByName(String name);
}
