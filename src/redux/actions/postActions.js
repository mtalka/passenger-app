import { getAllPosts, createPost } from "../../dataservice";

export function getPostsAction() {
    return (dispatch, getState) => {
        let posts = [];
        getAllPosts().then(result => {
            posts = result;
            console.log(posts);
            dispatch({ type: "GET_POSTS", posts });
        });
    };
}

export function createPostAction(title, text, city, line) {
    return (dispatch, getState) => {
        let post;
        createPost(title, text, city, line).then(result => {
            post = result;
            console.log(post);
            dispatch({ type: "CREATE_POST", post });
        });
    };
}
