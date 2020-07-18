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
            setText('TIE, Sheldon CHOICE ' + formP2 + ' SAME')
        } else if(playerWinner === 'P1') {
            setColorResult("success") 
            setText('Player One WINS with ' + formP1 ) 
        } else {
            setColorResult("danger") 
            setText('Sheldon WIN with ' + formP2)
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
                <h1 className= "pointViewer">PLAYER ONE {pointsP1} | {pointsP2} SHELDON</h1>
           </div>
                <>
                {showData && <h2 className= {"alert alert-" + colorResult +" m-2"}>{text}</h2>}
                {showData && <h5 className="text-muted">You choice {playerChoice} | Sheldon choice {iaChoice}</h5> } 
                {showData && <button className= "btn btn-warning m-4" onClick = {( () => setShowData(false))}>Next Game</button>}
                </>         
                {!showData && <ButtonsGroup property= {playerElection}/> }
        </div>
    )
}