import React from 'react'
import './memorycards.css';
import { Badge } from "react-bootstrap";


const HeaderCard = ({ moves, bestScore, handleRestart }) => {
  return (
    <div className="memory_header_container">
      <div className="header">
        <h1 className="memorygame_title">A toi de jouer !</h1>
        <div className="header_container">
          <div className="number_container">
            {localStorage.getItem("bestScore") && (
              <div className="btn-group-vertical shadow">
                <button type="button btn-success" class="btn btn-dark px-4">Retournements : <Badge bg="light text-dark">{moves}</Badge></button>
                <button type="button btn-success" class="btn btn-dark px-4 btn-outline-secondary text-white">Meilleur Score : <Badge bg="light text-dark" >{bestScore}</Badge></button>
              </div>
            )}
          </div>
        </div>
        <div className="reshuffle">
          <button className="header_card_button shadow" onClick={handleRestart}>
            <span className="memory_base_txt" >Rejouer</span>
            <div className="marquee" aria-hidden="true">
              <span>Rejouer</span>
              <span>Rejouer</span>
              <span>Rejouer</span>
            </div>
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default HeaderCard
