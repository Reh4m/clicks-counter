import { useState } from "react";

import "./App.css";

import Counter from "./components/Counter";
import Button from "./components/Button";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(clicks + 1);

  const restartCounter = () => setClicks(0);

  return (
    <div className="App">
      <div className="main-content">
        <Counter clicks={clicks} />
        <Button
          content="Click"
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button
          content="Restart"
          isClickButton={false}
          handleClick={restartCounter}
        />
      </div>
    </div>
  );
};

export default App;
