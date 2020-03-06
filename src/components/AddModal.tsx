import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as postActions from "../redux/actions/postActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function AddModal(props: any) {
    const [title, setTitle]: any = useState("");
    const [feedback, setFeedback]: any = useState("");
    const [city, setCity]: any = useState("");
    const [line, setLine]: any = useState("");
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(title, feedback, city, line);
        props.actions.createPostAction(title, feedback, city, line);
        setTitle("");
        setFeedback("");
        setCity("");
        setLine("");
        setShow(false);
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Lisää palaute
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lisää palaute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Otsikko:
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            Palaute:
                            <textarea
                                value={feedback}
                                onChange={e => setFeedback(e.target.value)}
                            />
                        </label>
                        <label>
                            Kaupunki:
                            <textarea
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </label>
                        <label>
                            Linja:
                            <textarea
                                value={line}
                                onChange={e => setLine(e.target.value)}
                            />
                        </label>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Valmis
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(AddModal);
