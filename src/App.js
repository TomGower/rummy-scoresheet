/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import AddPlayers from './components/AddPlayers';
import ScoreUpdater from './components/ScoreUpdater';
import ShowPlayer from './components/ShowPlayer';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [playerScores, setPlayerScores] = useState({});
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const playerFormRef = useRef();

  const resetGame = () => {
    setPlayers([]);
    setPlayerScores([]);
    setRoundsPlayed(0);
  };

  const addPlayer = (event) => {
    event.preventDefault();
    const newPlayer = event.target.playerName.value;
    if (!newPlayer) return;
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
        if (oldPlayerScore.length === 1 && oldPlayerScore[0] === 0) {
          oldPlayerScore = [+target[player].value];
        } else {
          oldPlayerScore.push(+target[player].value);
        }
        oldScores = { ...oldScores, [player]: oldPlayerScore };
        document.getElementById(`${player}score`).value = '';
      }
    });
    setPlayerScores(oldScores);
    setRoundsPlayed(roundsPlayed + 1);
  };

  useEffect(() => {
    console.log('players', players);
    console.log('playerScores', playerScores);
  }, [players, playerScores]);

  return (
    <div>
      <h1>Hi There</h1>
      <button type="button" onClick={resetGame}>
        Start a New Game
      </button>
      <AddPlayers submitFunc={addPlayer} ref={playerFormRef} />
      <div>{`You have played ${roundsPlayed} rounds.`}</div>
      <ScoreUpdater updateScore={updateScore} players={players} />
      <div className="playerContainer">
        {players.map((player) => (
          <ShowPlayer playerName={player} key={player} scores={playerScores[player]} />
        ))}
      </div>
    </div>
  );
};

export default App;
