import React, { useEffect } from "react";
import AddModal from "./AddModal";
import * as postActions from "../redux/actions/postActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Discover(props: any) {
    useEffect(() => {
        props.actions.getPostsAction();
    }, [props.actions]);

    return (
        <div>
            <AddModal />
            {props.posts.map(
                (p: { title: string; text: string; date: Date }) => (
                    <div key={p.title}>
                        <div>{p.title}</div>
                        <div>{p.text}</div>
                        <div>{p.date}</div>
                    </div>
                )
            )}
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

function mapStateToProps(state: any) {
    const posts = state.posts.posts;
    return {
        posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
