import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, selectBot, removeBot }) {
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
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{displayCards}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
