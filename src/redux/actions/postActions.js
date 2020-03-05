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

export function createPostAction(title, text) {
    return (dispatch, getState) => {
        let post;
        createPost(title, text).then(result => {
            post = result;
            console.log(post);
            dispatch({ type: "CREATE_POST", post });
        });
    };
}
