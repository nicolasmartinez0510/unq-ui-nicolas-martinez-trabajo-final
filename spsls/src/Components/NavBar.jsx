import React from 'react';
import { useState } from 'react';
import ModalMoreInfo from './ModalInfo';
import Game from '../Game';

export default function Navigation({ property }) {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
      <>
        <nav className="navbar navbar-dark">
            <span className="col-8"/>
            <button className="btn btn-success" onClick= {() => property()}>New Game</button>
            <button className="btn btn-danger" type="submit" onClick = {openModal}>More Info</button>
        </nav>
        <ModalMoreInfo closeModal= {closeModal} show={showModal}/>
        </>
      
      );
    }