import "./styles.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

function ActionIcon({ action }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors
  };
  const Icon = icons[action];
  return <Icon />;
}

function Player({ name = "Player 1", score = 0 }, action = "rock") {
  return (
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
      <div className="action">
        <ActionIcon action={action} size={60} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="center">
      <h1>Rock, Paper, Sissors</h1>
      <div>
        <div className="container">
          <Player name="Player 1" score={0} />
          <Player name="Computer" score={1} />
        </div>
        <div>
          <button className="round-btn">
            <FaHandRock size={20} />
          </button>
          <button className="round-btn">
            <FaHandPaper size={20} />
          </button>
          <button className="round-btn">
            <FaHandScissors size={20} />
          </button>
        </div>
        <div>
          <h2>Player 1 Wins</h2>
        </div>
      </div>
    </div>
  );
}
