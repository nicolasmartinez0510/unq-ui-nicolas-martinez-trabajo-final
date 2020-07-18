import React from 'react';
import {Modal, Button} from 'react-bootstrap';


export default function ModalMoreInfo({closeModal, show}) {
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
                <Modal.Title>How to play</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href= "https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock" target="blank">
                    <img className = "imgInfo" src = {require('../game_info.png')} alt= ""/>
                </a>

                <p>If you don't understand please &nbsp; 
                    <a href= "https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock" target="blank">
                        click here!
                    </a>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick= {closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
        </>
    )


}

