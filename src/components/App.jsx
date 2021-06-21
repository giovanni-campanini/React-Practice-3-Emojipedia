import React from "react";
import EmojiCard from "./EmojiCard";
import emojis from "../emojipedia";

const showEmoji = (found) => {
  return (
    <EmojiCard
      key={found.id}
      emoji={found.emoji}
      name={found.name}
      meaning={found.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(showEmoji)}</dl>
    </div>
  );
}

export default App;
