import React from 'react';
import { useState } from 'react';
import Game from '../Game'
import ButtonsGroup from './ButtonsGroup';


export default function OneVsPC(){

    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);
    const [text, setText] = useState('');
    
    
    const playerElection = (election) => {
        const { pointsP1, pointsP2, playerWinner} = Game.playGame(election);
        setPointsP1(pointsP1);
        setPointsP2(pointsP2);
        checkPlayerWinner(playerWinner);
    }

    const checkPlayerWinner = (playerWinner) => {
        if(playerWinner === 'Anyone'){
            setText('TIE')
        } else if(playerWinner === 'P1') { 
            setText('Player one win') 
        } else { setText('IA WIN')}
    }

    return(
        <div> 
           <h3>{pointsP1}  {pointsP2}</h3>
            <h3>{text} </h3>
            <ButtonsGroup property= {playerElection}/> 
        </div>
    )
}