import React from 'react';
import { useState } from 'react';
import ModalMoreInfo from './ModalInfo';

export default function Navigation({ property }) {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
      <>
        <nav className="navbar navbar-dark">
            <span className="col-8"/>
            <button className="btn btn-success" onClick= {() => property()}>New Game</button>
            <button className="btn btn-danger" type="submit" onClick = {openModal}>Reglas</button>
        </nav>
        <ModalMoreInfo closeModal= {closeModal} show={showModal}/>
        </>
      
      );
    }