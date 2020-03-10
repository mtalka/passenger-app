import React from "react";
import { Card } from "react-bootstrap";

function About() {
    return (
        <div>
            <Card bg="danger" text="white" className="about-card">
                <Card.Body>
                    <Card.Title>Menikö hermot?</Card.Title>
                    <Card.Text>Et ole yksin.
                        <br></br><br></br>
                        Kuratoimme saapuneet palautteet ja lähetämme ne kerran vuosineljänneksessä paperisena kunkin kaupungin liikelaitokselle.
                        <br></br><br></br>
                        Yksityisautoillen olisit jo perillä.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
