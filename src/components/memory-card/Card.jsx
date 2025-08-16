import React from 'react'
import backpic from "../../pictures/frame.jpg";
import classnames from "classnames";
import "./memorycards.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <div
      className={classnames("memory_card", {
        "is_flipped": isFlipped,
        "is_inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card_face card_font-face">
        <img src={backpic} alt="backpic" className="memory_card_img" />
      </div>
      <div className="card_face card_back_face">
        <img src={card.image} alt="frontpic" className="memory_card_img" />
      </div>
    </div>
  );
};
export default Card;