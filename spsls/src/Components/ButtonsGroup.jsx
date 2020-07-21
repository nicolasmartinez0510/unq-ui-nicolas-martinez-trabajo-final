import React from 'react';

export default function ButtonsGroup ({ property, playerState }) { 
    return( 
        <>
        { playerState && 
        <div className= "buttonsGame">
            <img onClick={() => property("STONE")} className="buttonGame" src={require('../buttons/rock.png')} alt= '' />
            <img onClick={() => property("PAPER")} className="buttonGame" src={require('../buttons/paper.png')} alt= '' />
            <img onClick={() => property("SCISSOR")} className="buttonGame" src={require('../buttons/scissors.png')} alt= ''/>
            <img onClick={() => property("LIZARD")} className="buttonGame" src={require('../buttons/lizard.png')} alt= ''/>
            <img onClick={() => property("SPOCK")} className="buttonGame" src={require('../buttons/spock.png')} alt= '' />
        </div>
        }
        { !playerState && 
            <div className= "buttonsGame">
            <img onClick={() => property("STONE")} className="buttonGame" src={require('../buttons/rockR.png')} alt= '' />
            <img onClick={() => property("PAPER")} className="buttonGame" src={require('../buttons/paperR.png')} alt= '' />
            <img onClick={() => property("SCISSOR")} className="buttonGame" src={require('../buttons/scissorsR.png')} alt= ''/>
            <img onClick={() => property("LIZARD")} className="buttonGame" src={require('../buttons/lizardR.png')} alt= ''/>
            <img onClick={() => property("SPOCK")} className="buttonGame" src={require('../buttons/spockR.png')} alt= '' />
        </div>
        }
        </>
    )
}
