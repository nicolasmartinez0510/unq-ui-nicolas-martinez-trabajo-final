import React from 'react'
import { useState } from 'react';
import Game from '../Game'
import ButtonsGroup from './ButtonsGroup';
import Navigation from './NavBar';

export default function OneVsOne(){
    const [ playerTurn, setPlayerTurn ] = useState(true);

    const [electionP1, setElectionP1] = useState('');
    const [electionP2, setElectionP2] = useState('');

    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);
    
    const [text, setText] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [showData, setShowData] = useState(false);
    const [colorResult, setColorResult] = useState("");
   
   const playerOneChoice = (election) => {
            setElectionP1(election);
            setPlayerTurn(false);  
    }

    const playerTwoChoice = (election) => {
        setElectionP2(election);
        setShowButton(true);
    }

    const checkResult = () => {
        const { pointsP1, pointsP2, playerWinner} = Game.playGame(electionP1,electionP2);

        setPointsP1(pointsP1);
        setPointsP2(pointsP2);

        if(playerWinner === 'TIE'){
            setColorResult("warning")
            setText('Empate! El jugador dos tambien escogio ' + electionP2 )
        } else if(playerWinner === 'P1') {
            setColorResult("primary") 
            setText('El Jugador Uno Gana!') 
        } else {
            setColorResult("danger") 
            setText('El Jugador Dos Gana!')
         }
        
        setShowData(true);
        setShowButton(false);
    
    }

    const nextRound = () => {
        setShowData(false);
        setPlayerTurn(true);
    }

    const resetData = () => {
        setShowData(false);
        setPlayerTurn(true);
        setPointsP1(0);
        setPointsP2(0);
        Game.clearResult();
    }
 
    return(
        <div className = "container">
            <Navigation property={resetData}/>
            { !showData && 
                <>
                    { playerTurn &&
                            <div className= "playerOne">
                                <img className= "logoGame" src= {require('../icons/one.svg')} alt=""/>
                                <ButtonsGroup property= {playerOneChoice} playerState={playerTurn}/>
                            </div>
                    }   
                    { !playerTurn &&         
                        <div className = "playerTwo">
                            <img className= "logoGame" src= {require('../icons/two.svg')} alt=""/>
                            <ButtonsGroup property={playerTwoChoice} playerState={playerTurn}/>
                        </div>
                    }
                </> 
            }
            {showData && <h2 className= {"alert alert-" + colorResult +" m-2"}>{text}</h2>}
            {showData && <h5 className="text-muted">Eleccion Jugador Uno: {electionP1} | Eleccion Jugador Dos: {electionP2}</h5> } 
            {showButton && 
                        <div className= "buttonFight">
                            <button className="btn btn-warning pl-4 pr-4 pt-2 pb-2 mb-2" onClick = {() => checkResult() }>Fight!</button>
                        </div>}
            {showData && <button className= "btn btn-warning m-4" onClick= {() => nextRound()}>Next Round</button>}
             <div className= "points">
                <h4 className= "pointViewer">
                    PUNTOS JUGADOR UNO
                        <h3 className= "pointCounter">{pointsP1}</h3> 
                    PUNTOS JUGADOR DOS <h3 className= "pointCounter">{pointsP2}</h3> </h4>
           </div>
        </div>   
    )
}
