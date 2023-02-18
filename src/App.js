import { useEffect, useState } from "react";
import "./App.scss";
import Cookie from "./components/Cookie/Cookie";
import Score from "./components/Score/Score";
import cookie from "./image/cookie.png";

const App = () => {
  const [number, setNumber] = useState(0);
  const [increase, setIncrease] = useState(1);
  const [increaseBy2, setIncreaseBy2] = useState(false);
  const [increaseBy4, setIncreaseBy4] = useState(false);
  const [increaseBy10, setIncreaseBy10] = useState(false);
  const [finishGame, setFinishGame] = useState(false);

  const increaseNumber = (numberIncrease) => {
    if (numberIncrease === 2 && number >= 100) {
      setIncrease(2);
      setIncreaseBy2(true);
      setTimeout(() => {
        setIncreaseBy2(false);
      }, 2000);
    }
    if (numberIncrease === 4 && number >= 200) {
      setIncrease(4);
      setIncreaseBy4(true);
      setTimeout(() => {
        setIncreaseBy10(false);
      }, 2000);
    }
    if (numberIncrease === 10 && number >= 1000) {
      setIncrease(10);
      setIncreaseBy10(true);
      setTimeout(() => {
        setIncreaseBy10(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (number >= 10000) {
      setFinishGame(true);
    }
  }, [number]);

  return (
    <div className="App">
      {!finishGame && (
        <>
          <div className="title">
            <p>Cookie Clicker</p>
          </div>
          <div className="cookie-clicker">
            <div onClick={() => setNumber(number + increase)}>
              <img src={cookie} alt="cookie" className="image" />
            </div>
          </div>
          <div className="score-show">
            <div>
              <p>{`Score: ${number}`}</p>
            </div>
          </div>
          <div class="upgrade-buttons">
            <div className="button-wrapper">
              <button onClick={() => increaseNumber(2)}>100</button>
              {increaseBy2 && <p>Value increased by 2</p>}
            </div>
            <div className="button-wrapper">
              <button onClick={() => increaseNumber(4)}>200</button>
              {increaseBy4 && <p>Value increased by 4</p>}
            </div>
            <div className="button-wrapper">
              <button onClick={() => increaseNumber(10)}>1000</button>
              {increaseBy10 && <p>Value increased by 10</p>}
            </div>
          </div>
        </>
      )}
      {finishGame && (
        <div className="finishMessage">
          <h1>You are the Cookie Master</h1>
        </div>
      )}
    </div>
  );
};

export default App;
