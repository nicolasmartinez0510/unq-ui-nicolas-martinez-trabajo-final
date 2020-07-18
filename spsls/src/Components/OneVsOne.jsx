import React from 'react'
import { useState } from 'react';
import Game from '../Game'
import ButtonsGroup from './ButtonsGroup';
import Navigation from './NavBar'

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
            setText('TIE, Player Two CHOICE ' + electionP2 + ' SAME')
        } else if(playerWinner === 'P1') {
            setColorResult("success") 
            setText('Player One WINS with ' + electionP1 ) 
        } else {
            setColorResult("success") 
            setText('Player Two WIN with ' + electionP2)
         }
        
        setShowData(true);
        setShowButton(false);
        

        // setPlayerTurn(true);
        // setShowButton(false);
    
    }

    const nextRound = () => {
        setShowData(false);
        setPlayerTurn(true);
    }

 

    return(
        <div className = "container">
            <Navigation/>
            <div className= "points">
                <h1 className= "pointViewer">PLAYER ONE {pointsP1} | {pointsP2} PLAYER TWO</h1>
           </div>
            { !showData && 
                <>
                    { playerTurn &&
                            <div className= "playerOne">
                                <h3 className= "text-muted">Player One</h3>
                                <ButtonsGroup property= {playerOneChoice}/>
                            </div>
                    }   
                    { !playerTurn &&         
                        <div className = "playerTwo">
                            <h3 className= "text-muted">Player Two</h3>
                            <ButtonsGroup property={playerTwoChoice}/>
                        </div>
                    }
                </> 
            }
            {showData && <h2 className= {"alert alert-" + colorResult +" m-2"}>{text}</h2>}
            {showData && <h5 className="text-muted">Player one choice {electionP1} | Player two choice {electionP2}</h5> } 
            {showButton && 
                        <div className= "buttonFight">
                            <button className="btn btn-warning pl-4 pr-4 pt-2 pb-2" onClick = {() => checkResult() }>FIGHT!</button>
                        </div>}
            {showData && <button className= "btn btn-warning m-4" onClick= {() => nextRound()}>NEXT ROUND</button>}
        </div>   
    )
}