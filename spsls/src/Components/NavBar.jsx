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

    return (
      <>
        <nav className="navbar navbar-dark bg-secondary row p-10 justify-content-between rounded">
            <h1 className = "logo col-1" >PLAY</h1>
            <span className="col-8"/>
            <button className="btn btn-danger my-2 my-sm-0 col-1" type="submit" onClick = {openModal}>More Info</button>
            <button className="btn btn-outline-light col-1 mr-2" type="submit" onClick = {goToHome}>Go to home</button>
        </nav>
        {showModal && <ModalMoreInfo closeModal= {closeModal}/>}
        </>
      
      );
    }