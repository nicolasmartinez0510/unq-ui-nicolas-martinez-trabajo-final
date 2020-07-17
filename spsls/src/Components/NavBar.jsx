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
        <nav className="navbar navbar-dark bg-secondary row p-10 justify-content-between rounded">
            <h1 className = "logo col-1" ></h1>
            <span className="col-8"/>
            <button className="btn btn-success mr-3" onClick= {() => refreshPage()}>New Game</button>
            <button className="btn btn-danger mr-2" type="submit" onClick = {openModal}>More Info</button>
            <button className="btn btn-outline-light mr-1" type="submit" onClick = {goToHome}>Go to home</button>
        </nav>
        {showModal && <ModalMoreInfo closeModal= {closeModal}/>}
        </>
      
      );
    }