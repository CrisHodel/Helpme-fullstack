package neuefische.de.backend.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import neuefische.de.backend.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class  UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    @WithMockUser(username = "Cris", password = "123")
    void addUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/signUp")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name":"test",
                                "password": "1234"
                                }"""
                        ).with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "name":"test",
                                "img" : null                     
                                }"""
                )).andExpect(jsonPath("$.id").isNotEmpty());
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "Cris", password = "123")
    void getUserPageById() throws Exception {
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/api/signUp")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "name":"test",
                        "password": "1234",
                        }"""
                )
                .with(csrf())).andReturn();

        String content = response.getResponse().getContentAsString();

        ObjectMapper mapper = new ObjectMapper();
        User user = mapper.readValue(content, User.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/user/" + user.getId()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                         "name":"Cristina",
                         "img" : null                
                        }"""
                )).andExpect(jsonPath("$.id").value(user.getId()));
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "Cristina", password = "1234")
    void getAllUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

}