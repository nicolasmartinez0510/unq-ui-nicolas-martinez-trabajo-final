import React from 'react'; 
import { useState } from 'react';
import Game from '../Game'
import ButtonsGroup from './ButtonsGroup';
import Navigation from './NavBar';

export default function OneVsPC({show,}){

    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);
    const [text, setText] = useState("");
    const [playerChoice, setPlayerChoice] = useState("");
    const [iaChoice, setIAChoice] = useState("");
    const [showData, setShowData] = useState(false);
    const [colorResult, setColorResult] = useState("");
    
    const playerElection = (election) => {
        const { pointsP1, pointsP2, playerWinner, formP1, formP2 } = Game.playGame(election);

        setTimeout( () => {
        setPlayerChoice(formP1);
        setIAChoice(formP2);
        setPointsP1(pointsP1);
        setPointsP2(pointsP2);

        if(playerWinner === 'TIE'){
            setColorResult("warning")
            setText('Empate!, Sheldon tambien esocogio ' + formP2)
        } else if(playerWinner === 'P1') {
            setColorResult("success") 
            setText('Ganaste! :)') 
        } else {
            setColorResult("danger") 
            setText('Perdiste :c ,Sheldon gana con ' + formP2)
         }
        
        setShowData(true);
        }, 1000);
    }

    const resetData = () => {
        setShowData(false);
        setPointsP1(0);
        setPointsP2(0);
        Game.clearResult();
    }

    return(
        <div className = "container"> 
            <Navigation property={resetData}/>
                <>
                {showData && <h2 className= {"alert alert-" + colorResult +" m-2"}>{text}</h2>}
                {showData && <h5 className="text-muted">Tu eleccion: {playerChoice} | Eleccion de Sheldon: {iaChoice}</h5> } 
                {showData && <button className= "btn btn-warning m-4" onClick = {( () => setShowData(false))}>Next Round</button>}
                </>         
                {!showData && <ButtonsGroup property= {playerElection} playerState={true}/> }
                <div className= "points">
                <h4 className= "pointViewer">
                    MIS PUNTOS
                        <h3 className= "pointCounter">{pointsP1}</h3> 
                    PUNTOS DE SHELDON 
                        <h3 className="pointCounter">{pointsP2}</h3> </h4>
           </div>
        </div>
    )
}