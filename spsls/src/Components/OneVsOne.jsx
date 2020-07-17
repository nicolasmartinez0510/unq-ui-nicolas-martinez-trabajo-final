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
   
   const playerOneChoice = (election) => {
            setElectionP1(election);
            setPlayerTurn(false);  
    }

    const playerTwoChoice = (election) => {
        setElectionP2(election);
        checkResult();
        setPlayerTurn(true);
    }

    const checkResult = () => {
        const { pointsP1, pointsP2 } = Game.playGame(electionP1,electionP2);
        setPointsP1(pointsP1);
        setPointsP2(pointsP2);
    
    }

    return(
        <div>
        <Navigation/>
            <h3>{pointsP1}  {pointsP2}</h3>
        { playerTurn &&
        <div className= "playerOne">
        <h1>Player One</h1>
            <ButtonsGroup property= {playerOneChoice}/>
        </div>
        }
        { !playerTurn &&         
        <div className = "playerTwo">
        <h1>Player Two</h1>
            <ButtonsGroup property={playerTwoChoice}/>
        </div>
        }
        </div>   
    )
}