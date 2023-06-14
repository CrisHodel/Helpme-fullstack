package neuefische.de.backend.service;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class GenerateId {
    public String generateUId(){
        return UUID.randomUUID().toString();
    }
}
