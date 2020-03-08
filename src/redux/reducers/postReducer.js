const initialState = {
    posts: [],
    filteredPosts: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_POSTS":
            const sortedPosts = action.posts.sort(function(a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

            return {
                ...state,
                posts: sortedPosts,
                filteredPosts: sortedPosts
            };
        case "CREATE_POST":
            return {
                ...state,
                posts: [action.post, ...state.posts],
                filteredPosts: [action.post, ...state.filteredPosts]
            };
        case "FILTER_POSTS":
            if (action.filter) {
                const filtered = state.posts.filter(
                    p => p.city === action.filter
                );
                return {
                    ...state,
                    filteredPosts: filtered
                };
            } else {
                return { ...state, filteredPosts: state.posts };
            }
        default:
            return state;
    }
}
