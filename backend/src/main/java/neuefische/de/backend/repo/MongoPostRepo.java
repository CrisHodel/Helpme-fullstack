package neuefische.de.backend.repo;

import neuefische.de.backend.model.UserPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoPostRepo extends MongoRepository<UserPost, String>{
}
