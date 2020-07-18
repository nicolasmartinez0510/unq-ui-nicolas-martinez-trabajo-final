import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import ModalMoreInfo from './ModalInfo';
import Game from '../Game';

export default function Navigation() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const goToHome = () => {
      history.push('/');
      Game.clearResult();
    }
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const refreshPage = () => {
      window.location.reload(false);
    }

    return (
      <>
        <nav className="navbar navbar-dark bg-secondary">
            <h1 className = "logo">Stone,Scissor,Paper,Lizard And Spock</h1>
            <span className="col-2"/>
            <button className="btn btn-success" onClick= {() => refreshPage()}>New Game</button>
            <button className="btn btn-danger" type="submit" onClick = {openModal}>More Info</button>
            <button className="btn btn-outline-light" type="submit" onClick = {goToHome}>Go to home</button>
        </nav>
        {showModal && <ModalMoreInfo closeModal= {closeModal}/>}
        </>
      
      );
    }