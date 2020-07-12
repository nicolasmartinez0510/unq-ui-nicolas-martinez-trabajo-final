import React from 'react';
import { useHistory } from 'react-router';


export default function MainMenu(){
    const history = useHistory();
    
    // const openOneVsCom = () => history.push('/onevscom')
    // const openOneVsOne = () => history.push('/onevsone', {playerTurn: true})
    

    return(
        <div className= "container">
            <h1 className= "titleMain">
                Welcome!
            </h1>
            <div className= "buttons">
                <div className="buttonContainer"><button type= "button" className="btn btn-success" >Play vs COM</button></div>
                <div className= "buttonContainer"><button type= "button" className= "btn btn-primary" >2 players</button></div>
                <div className="buttonContainer"><button type= "button" className="btn btn-danger">More Info...</button></div>
            </div>
        </div>
    )


}