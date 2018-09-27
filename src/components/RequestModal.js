import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import RequestForm from './RequestForm'
import './RequestModal.css'

const RequestModal = (props) => {
    const {show, handleClose} = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>On-Leave Request Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RequestForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RequestModal;