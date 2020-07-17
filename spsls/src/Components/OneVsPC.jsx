import React from 'react'; 
import { useState } from 'react';
import Game from '../Game'
import ButtonsGroup from './ButtonsGroup';
import Navigation from './NavBar';


// function Puntuacion({pointsP1, pointsP2, text}) {
//         return(
//             <>
//                <div className= "points">
//                    <h1 className= "pointViewer">PLAYER ONE {pointsP1} | {pointsP2} IA</h1>
//                </div>
//                <h3>{text} </h3>
//            </>)
// }


export default function OneVsPC(){

    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);
    const [text, setText] = useState('');
    const [playerChoice, setPlayerChoice] = useState("");
    const [iaChoice, setIAChoice] = useState("");
    const [showData, setShowData] = useState(false);
    
    const playerElection = (election) => {
        const { pointsP1, pointsP2, playerWinner, formP1, formP2 } = Game.playGame(election);

        setPlayerChoice(formP1);
        setIAChoice(formP2);
        setPointsP1(pointsP1);
        setPointsP2(pointsP2);

        if(playerWinner === 'TIE'){
            setText('TIE, IA CHOICE ' + formP2 + ' SAME')
        } else if(playerWinner === 'P1') { 
            setText('PLAYER ONE WINS WITH ' + formP1 ) 
        } else { setText('IA WIN WITH ' + formP2)}
        
        setShowData(true);
    }


    return(
        <div> 
            <Navigation/>
           <div className= "points">
                <h1 className= "pointViewer">PLAYER ONE {pointsP1} | {pointsP2} IA</h1>
           </div>
                <>
                {showData && <h2 className="text-success">{text}</h2>}
                {showData && <h5>You choice {playerChoice} | IA choice {iaChoice}</h5> } 
                {showData && <button onClick = {( () => setShowData(false))}>Next Game</button>}
                </>         
            <ButtonsGroup property= {playerElection}/> 
        </div>
    )
}