import React from 'react';
import { useState } from 'react';
import ModalMoreInfo from './ModalInfo';
import OneVsPC from './OneVsPC';
import OneVsOne from './OneVsOne';
import ModalGame from './ModalGame'
import Game from '../Game';

export default function MainMenu(){

    const [showModal, setShowModal] = useState(false);
    const [showOneVsPc, setShowOneVsPc] = useState(false);
    const [showOneVsOne, setShowOneVsOne] = useState(false);

    const openOneVsCom = () => setShowOneVsPc(true);
    const openOneVsOne = () => setShowOneVsOne(true);

    const openModal = () => setShowModal(true);

    const closeModal = () => {
        setShowModal(false);
        setShowOneVsPc(false);
        setShowOneVsOne(false);
        Game.clearResult();
    }

    return(
        <>
        <div className= "container">
            <div className="pictureMainContainer">
                <img className= "pictureMain" src= {require('../icons/stone.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('../icons/paper.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('../icons/scissors.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('../icons/lizard.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('../icons/spock.svg')} alt= ""/>
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
        <ModalMoreInfo closeModal= {closeModal} show={showModal}/>
        <ModalGame component={<OneVsOne/>} closeModal={closeModal} show ={showOneVsOne}/>
        <ModalGame component={<OneVsPC/>} closeModal={closeModal} show={showOneVsPc}/>
        </>
    )


}