import { getAllPosts, createPost } from "../../dataservice";

export function getPostsAction() {
    return (dispatch, getState) => {
        let posts = [];
        getAllPosts().then(result => {
            posts = result;
            dispatch({ type: "GET_POSTS", posts });
        });
    };
}

export function createPostAction(title, text, city, line) {
    return (dispatch, getState) => {
        let post;
        createPost(title, text, city, line).then(result => {
            post = result;
            dispatch({ type: "CREATE_POST", post });
        });
    };
}

export function filterPosts(filter) {
    return { type: "FILTER_POSTS", filter };
}
