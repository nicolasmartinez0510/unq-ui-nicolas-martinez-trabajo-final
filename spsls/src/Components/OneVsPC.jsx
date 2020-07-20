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
    }

    const resetData = () => {
        setPointsP1(0);
        setPointsP2(0);
        Game.clearResult();
    }

    return(
        <div className = "container"> 
            <Navigation property={resetData}/>
           <div className= "points">
                <h2 className= "pointViewer">
                    TUS PUNTOS
                        <h1 className= "pointCounter">{pointsP1}</h1> 
                    PUNTOS DE SHELDON 
                        <h1 className= "pointCounter">{pointsP2}</h1> </h2>
           </div>
                <>
                {showData && <h2 className= {"alert alert-" + colorResult +" m-2"}>{text}</h2>}
                {showData && <h5 className="text-muted">Tu eleccion: {playerChoice} | Eleccion de Sheldon: {iaChoice}</h5> } 
                {showData && <button className= "btn btn-warning m-4" onClick = {( () => setShowData(false))}>Next Round</button>}
                </>         
                {!showData && <ButtonsGroup property= {playerElection}/> }
        </div>
    )
}