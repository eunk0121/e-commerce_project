import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import Button from "./components/Botton";

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0);

  console.log(totalNumOfClicks);

  const increamentNumOfClicks = () => {
    setTotalNumOfClicks(totalNumOfClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          title="you have clicked"
          hasClicked="false"
          increamentNumOfClicks={increamentNumOfClicks}
        />
        <Button
          title="have you tried clicking?"
          increamentNumOfClicks={increamentNumOfClicks}
        />
        <Button
          title="Don't click this button"
          increamentNumOfClicks={increamentNumOfClicks}
        />
        <p>Total: {totalNumOfClicks}</p>
      </header>
    </div>
  );
}

export default App;
