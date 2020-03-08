import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
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
            <Button
                variant="danger"
                onClick={handleShow}
                className="add-modal-button"
            >
                Lisää palaute
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lisää palaute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className="form-style">
                        <Form.Group controlId="formTitle">
                            <Form.Label>Otsikko</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(e.target.value)}
                                placeholder="Syötä otsikko"
                            />
                        </Form.Group>
                        <Form.Group controlId="formText">
                            <Form.Label>Palaute</Form.Label>
                            <Form.Control
                                type="text"
                                value={feedback}
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setFeedback(e.target.value)}
                                placeholder="Kirjoita kaikki mitä sydämellä on"
                            />
                        </Form.Group>
                        <Form.Group controlId="formSelect">
                            <Form.Label>Valitse kaupunki</Form.Label>
                            <Form.Control
                                as="select"
                                value={city}
                                onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                ) => setCity(e.target.value)}
                            >
                                <option value="" selected disabled>
                                    Valitse
                                </option>
                                <option value="Helsinki">Helsinki</option>
                                <option value="Turku">Turku</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formLine">
                            <Form.Label>Linja</Form.Label>
                            <Form.Control
                                type="text"
                                value={line}
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setLine(e.target.value)}
                                placeholder="Linjan numero"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            value="Submit"
                            type="submit"
                            onClick={handleClose}
                        >
                            Valmis
                        </Button>
                    </Form>
                </Modal.Body>
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
