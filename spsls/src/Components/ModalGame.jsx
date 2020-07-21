import React from 'react';
import {Modal} from 'react-bootstrap';


export default function ModalGame({component, closeModal,show }) {
    return(
        <>
    <div className= "modalContainer">
        <Modal
            show={show}   
            backdrop="static"  
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick = {closeModal}>
                <Modal.Title>Play!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalContainer">
                    {component}
                </div>
            </Modal.Body>
        </Modal>
    </div>
    </>
);


};