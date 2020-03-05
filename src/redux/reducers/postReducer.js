const initialState = {
    posts: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_POSTS":
            console.log("getteded");
            return { ...state, posts: action.posts };
        case "CREATE_POST":
            console.log("creating");
            return { ...state, posts: [...state.posts, action.post] };
        default:
            return state;
    }
}
