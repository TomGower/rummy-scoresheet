import React, { useRef, useState } from 'react';
import AddPlayers from './components/AddPlayers';
import ScoreUpdater from './components/ScoreUpdater';
import ShowPlayer from './components/ShowPlayer';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [playerScores, setPlayerScores] = useState({});
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const playerFormRef = useRef();
  const scoreRef = useRef();

  const resetGame = () => {
    setPlayers([]);
    setPlayerScores([]);
    setRoundsPlayed(0);
  };

  const addPlayer = (event) => {
    event.preventDefault();
    const newPlayer = event.target.playerName.value;
    if (!newPlayer) return;
    if (players.indexOf(newPlayer) !== -1) {
      // eslint-disable-next-line no-alert
      alert('All players must have a different name.');
      playerFormRef.current.reset();
      return;
    }
    setPlayers([...players, newPlayer]);
    setPlayerScores({ ...playerScores, [newPlayer]: [0] });
    playerFormRef.current.reset();
  };

  const updateScore = (event) => {
    event.preventDefault();
    let oldScores = playerScores;
    const { target } = event;
    players.forEach((player) => {
      if (target[player].value) {
        let oldPlayerScore = oldScores[player];
        // this if/else block could be a ternary operator, but I think this looks better
        if (oldPlayerScore.length === 1 && oldPlayerScore[0] === 0) {
          oldPlayerScore = [+target[player].value];
        } else {
          oldPlayerScore.push(+target[player].value);
        }
        oldScores = { ...oldScores, [player]: oldPlayerScore };
      }
    });
    setPlayerScores(oldScores);
    setRoundsPlayed(roundsPlayed + 1);
    scoreRef.current.reset();
  };

  return (
    <div>
      <h1>Gin Rummy Scoresheet</h1>
      <button type="button" onClick={resetGame}>
        Start a New Game
      </button>
      <AddPlayers submitFunc={addPlayer} ref={playerFormRef} />
      <div>{`You have played ${roundsPlayed} rounds.`}</div>
      <ScoreUpdater updateScore={updateScore} players={players} ref={scoreRef} />
      <div className="playerContainer">
        {players.map((player) => (
          <ShowPlayer playerName={player} key={player} scores={playerScores[player]} />
        ))}
      </div>
    </div>
  );
};

export default App;
