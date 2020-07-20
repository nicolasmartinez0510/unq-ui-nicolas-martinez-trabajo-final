import React from 'react';
import { useState } from 'react';
import ModalMoreInfo from './Components/ModalInfo';
import OneVsPC from './Components/OneVsPC';
import OneVsOne from './Components/OneVsOne';
import ModalGame from './Components/ModalGame'
import Game from './Game';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){

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
                <img className= "pictureMain" src= {require('./icons/stone.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('./icons/paper.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('./icons/scissors.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('./icons/lizard.svg')} alt= ""/>
                <img className= "pictureMain" src= {require('./icons/spock.svg')} alt= ""/>
            </div>
            <h1 className= "titleMain">
                ¡Stone, Paper,Lizard and Spock Game!
            </h1>
            <div className= "buttons">
                <div className="buttonContainer"><button type= "button" className="btn btn-success p-3" onClick = {() => openOneVsCom()}>Play vs IA<img className= "miniLogo" src= {require('./icons/joystick.svg')} alt=""/></button></div>
                <div className= "buttonContainer"><button type= "button" className= "btn btn-primary" onClick = {() => openOneVsOne()} >Dos Jugadores<img className= "miniLogo" src= {require('./icons/battle.svg')} alt=""/></button></div>
                <div className="buttonContainer"><button type= "button" className="btn btn-danger" onClick = {() => openModal()}>Reglas<img className= "miniLogo" src= {require('./icons/info.svg')} alt=""/></button></div>
            </div>
        </div>
        <ModalMoreInfo closeModal= {closeModal} show={showModal}/>
        <ModalGame component={<OneVsOne/>} closeModal={closeModal} show ={showOneVsOne}/>
        <ModalGame component={<OneVsPC/>} closeModal={closeModal} show={showOneVsPc}/>
        </>
    )


}