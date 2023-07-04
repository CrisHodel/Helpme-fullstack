import axios from "axios";
import { useState } from "react";

export default function useUser() {
    const [user, setUser] = useState<{id: string, name: string, img: string }>({id: "", name: "", img: "" });

    function login(username: string, password: string) {
        return axios
            .post("/api/signIn", undefined, {
                auth: {
                    username,
                    password,
                },
            })
            .then((response) => setUser(response.data))
            .catch((error) => {
                console.error("Login failed:", error);
                throw error;
            });
    }

    return { login, user };
}
