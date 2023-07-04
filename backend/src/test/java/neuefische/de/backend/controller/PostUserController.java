package neuefische.de.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import neuefische.de.backend.model.UserPost;
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
public class PostUserController {

    @Autowired
    MockMvc mockMVC;
    @Test
    @DirtiesContext
    @WithMockUser(username = "Test", password = "123")
    void addPost() throws Exception {
        mockMVC.perform(MockMvcRequestBuilders.post("/api/post")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "title":"te",
                                "userName":"test",
                                "description": "123456"
                                }"""
                        ).with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "title":"te",
                                "userName":"test",
                                "description": "123456"                                         
                                }"""
                )).andExpect(jsonPath("$.postId").isNotEmpty());
    }

    /*@Test
    @DirtiesContext
    @WithMockUser(username = "Test", password = "123")
    void checkIfIsEmptyList() throws Exception {
        mockMVC.perform(MockMvcRequestBuilders.get("/api/posts"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));*/

    @Test
    @DirtiesContext
    @WithMockUser(username = "Test", password = "123")
    void getPostPageById() throws Exception {
        MvcResult response = mockMVC.perform(MockMvcRequestBuilders.post("/api/post")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        "title":"test",
                        "userName":"test1",
                        "description": "123456"
                        }"""
                ).with(csrf())).andReturn();

        String content = response.getResponse().getContentAsString();

        ObjectMapper mapper = new ObjectMapper();
        UserPost userPost = mapper.readValue(content, UserPost.class);

        mockMVC.perform(MockMvcRequestBuilders.get("/api/post" + userPost.getPostId()))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                         {
                                         "title":"test",
                                         "userName":"test1",
                                         "description": "123456"                                       
                                         }
                                """
                )).andExpect(jsonPath("$.postId").value(userPost.getPostId()));
    }
}
