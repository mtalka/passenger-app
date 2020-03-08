import React from "react";
import { Card } from "react-bootstrap";

function PostCard(props: any) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const dateString = new Date(props.date).toLocaleDateString(
        "fi-FI",
        options
    );

    const dateKey = new Date(props.date).getTime();

    return (
        <div key={dateKey} className="post-card">
            <Card>
                <Card.Header className="post-card-title">
                    {props.title}
                </Card.Header>
                <Card.Body>
                    <Card.Text>{props.text}</Card.Text>
                    <div className="date-string">
                        Kaupungissa {props.city}, linjalla {props.line}{" "}
                        <div>{dateString}</div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default PostCard;
