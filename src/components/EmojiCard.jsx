import React from "react";

const EmojiCard = (props) => {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span className="emoji-name">{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
};

export default EmojiCard;
