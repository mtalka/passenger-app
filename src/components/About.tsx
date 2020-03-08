import React from "react";
import { Card } from "react-bootstrap";

function About() {
    return (
        <div>
            <Card bg="danger" text="white" className="about-card">
                <Card.Body>
                    <Card.Title>Menikö hermot?</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
