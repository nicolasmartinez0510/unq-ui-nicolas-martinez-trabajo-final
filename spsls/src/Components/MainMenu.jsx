import React from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router';
import ModalMoreInfo from './ModalInfo';


export default function MainMenu(){
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const openOneVsCom = () => history.push('/onevscom');
    const openOneVsOne = () => history.push('/onevsone');
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return(
        <>
        <div className= "container">
            <h1 className= "titleMain">
                Welcome to 
                STONE, PAPER, SCISSOR, LIZARD AND SPOCK!
            </h1>
            <div className= "buttons">
                <div className="buttonContainer"><button type= "button" className="btn btn-success" onClick = {() => openOneVsCom()}>Play vs COM</button></div>
                <div className= "buttonContainer"><button type= "button" className= "btn btn-primary" onClick = {() => openOneVsOne()} >2 players</button></div>
                <div className="buttonContainer"><button type= "button" className="btn btn-danger" onClick = {() => openModal()}>More Info...</button></div>
            </div>
        </div>
        {showModal && <ModalMoreInfo closeModal= {closeModal}/>}
        </>
    )


}