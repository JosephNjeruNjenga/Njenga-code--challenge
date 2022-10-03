import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setArmy] = useState([]);
  const [viewCollection, setViewCollection] = useState(true)
  const [botSpecs, setBotSpecs] = useState({})

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  function joinArmy(bot) {
    if (!botArmy.includes(bot)) {
    setArmy([...botArmy, bot]);
    }
    setViewCollection(true);
  }

  function removeFromArmy(bot) {
    const newArr = botArmy.filter(slct => slct.id !== bot.id)
    setArmy(newArr)
  }

  function showBotSpecs(bot) {
    setViewCollection(false);
    setBotSpecs(bot);
  }

  function removeBot(id) {
    const newArr = bots.filter(bot => bot.id !== id)
    setBots(newArr)
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE"
    })
  }

  return (
    <div>
      <YourBotArmy bots={botArmy} selectBot={removeFromArmy} removeBot={removeBot} />
      {viewCollection ? (
        <BotCollection
          bots={bots}
          selectBot={showBotSpecs}
          removeBot={removeBot}
        />
      ) : (
        <BotSpecs
          bot={botSpecs}
          goBack={setViewCollection}
          enlist={joinArmy}
        />
      )}
    </div>
  );
}

export default BotsPage;
