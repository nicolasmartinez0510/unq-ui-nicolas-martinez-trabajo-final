import React from 'react'


export default function ButtonsGroup ({ property }) { 
    return( 
        <div className= "buttonsGame">
            <img onClick={() => property('STONE')} className="buttonGame" src={require('../buttons/rock.png')} alt= '' />
            <img onClick={() => property('PAPER')} className="buttonGame" src={require('../buttons/paper.png')} alt= '' />
            <img onClick={() => property('SCISSOR')} className="buttonGame" src={require('../buttons/scissors.png')} alt= ''/>
            <img onClick={() => property('LIZARD')} className="buttonGame" src={require('../buttons/lizard.png')} alt= ''/>
            <img onClick={() => property('SPOCK')} className="buttonGame" src={require('../buttons/spock.png')} alt= '' />
        </div>
    )
}