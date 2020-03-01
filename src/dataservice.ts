import axios from "axios";

const API_URL = "http://localhost:9001";

export const getAllPosts = async () => {
    const result = await axios.get(`${API_URL}/posts`);
    console.log("got the posts:", result.data);
    return result.data;
};
