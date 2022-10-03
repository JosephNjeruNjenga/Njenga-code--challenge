import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, selectBot, removeBot }) {
  const displayCards = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        selectBot={selectBot}
        removeBot={removeBot}
      />
    );
  });

  return (
    <div className="ui four column grid">
      <div className="row">{displayCards}</div>
    </div>
  );
}

export default BotCollection;
