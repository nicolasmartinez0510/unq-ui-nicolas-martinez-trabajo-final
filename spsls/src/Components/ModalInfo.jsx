import React from 'react';
import {Modal, Button} from 'react-bootstrap';


export default function ModalMoreInfo({closeModal}) {
    return(
        <>
        <div className= "modalContainer">
        <Modal.Dialog>
            <Modal.Header closeButton onClick = {closeModal}>
                <Modal.Title>How to play</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href= "https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock" target="_blank">
                    <img className = "imgInfo" src = {require('../game_info.png')}/>
                </a>

                <p>If you don't understand please &nbsp; 
                    <a href= "https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock" target="_blank">
                        click here!
                    </a>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick= {closeModal}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
        </>
    )


}


{/* <div className ="modal" tabIndex="-1" role="dialog">
            <div className ="modal-dialog">
                <div className ="modal-content">
                    <div className ="modal-header">
                        <h5 className ="modal-title">More info</h5>
                        <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className ="modal-body">
                        
                    </div>
                    <div className ="modal-footer">
                        <button type="button" className ="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className ="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> */}