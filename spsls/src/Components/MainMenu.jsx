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
            <div className="pictureMainContainer">
                <img className= "pictureMain" src= {require('../icons/stone.svg')}/>
                <img className= "pictureMain" src= {require('../icons/paper.svg')}/>
                <img className= "pictureMain" src= {require('../icons/scissors.svg')}/>
                <img className= "pictureMain" src= {require('../icons/lizard.svg')}/>
                <img className= "pictureMain" src= {require('../icons/spock.svg')}/>
            </div>
            <h1 className= "titleMain">
                ¡Stone, Paper,Lizard and Spock Game!
            </h1>
            <div className= "buttons">
                <div className="buttonContainer"><button type= "button" className="btn btn-success p-3" onClick = {() => openOneVsCom()}>Play vs COM<img className= "miniLogo" src= {require('../icons/joystick.svg')}/></button></div>
                <div className= "buttonContainer"><button type= "button" className= "btn btn-primary" onClick = {() => openOneVsOne()} >2 players<img className= "miniLogo" src= {require('../icons/battle.svg')}/></button></div>
                <div className="buttonContainer"><button type= "button" className="btn btn-danger" onClick = {() => openModal()}>More Info<img className= "miniLogo" src= {require('../icons/info.svg')}/></button></div>
            </div>
        </div>
        {showModal && <ModalMoreInfo closeModal= {closeModal}/>}
        </>
    )


}