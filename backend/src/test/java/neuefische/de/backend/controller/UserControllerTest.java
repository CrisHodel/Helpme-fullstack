package neuefische.de.backend.controller;

import org.junit.jupiter.api.Test;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.http.MediaType;
        import org.springframework.security.test.context.support.WithMockUser;
        import org.springframework.test.annotation.DirtiesContext;
        import org.springframework.test.web.servlet.MockMvc;
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
        mockMvc.perform(MockMvcRequestBuilders.post("/api/signUp/user")
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
}