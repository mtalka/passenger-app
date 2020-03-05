import React from "react";
import { Card } from "react-bootstrap";

function PostCard(props: any) {
    return (
        <div key={props.title} className="post-card">
            <Card>
                <Card.Header>
                    <div>{props.title}</div>
                </Card.Header>
                <Card.Body>
                    <div>{props.text}</div>
                    <div>{props.date}</div>
                    <div>{props.city}</div>
                    <div>{props.line}</div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default PostCard;
