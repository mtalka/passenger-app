import React, { useEffect } from "react";
import AddModal from "./AddModal";
import * as postActions from "../redux/actions/postActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PostCard from "./PostCard";
import { Navbar } from "react-bootstrap";

function Discover(props: any) {
    useEffect(() => {
        props.actions.getPostsAction();
    }, [props.actions]);

    return (
        <>
            <div>
                {props.posts.map(
                    (p: {
                        title: string;
                        text: string;
                        date: Date;
                        city: string;
                        line: string;
                    }) => (
                        <>
                            <PostCard
                                title={p.title}
                                text={p.text}
                                date={p.date}
                                city={p.city}
                                line={p.line}
                            />
                        </>
                    )
                )}
            </div>
            <Navbar fixed="bottom" className="bottom-bar">
                <AddModal />
            </Navbar>
        </>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

function mapStateToProps(state: any) {
    const posts = state.posts.filteredPosts;
    return {
        posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
