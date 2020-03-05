import axios from "axios";

const API_URL = "http://localhost:9001";

export const getAllPosts = async () => {
    const result = await axios.get(`${API_URL}/posts`);
    console.log("got the posts:", result.data);
    return result.data;
};

export const createPost = async (title: string, text: string) => {
    console.log(title, text);
    const result = await axios.post(`${API_URL}/posts`, {
        title,
        text
    });
    console.log("created post:", result.data);
    return result.data;
};
