import React from 'react';
import PropTypes from 'prop-types';

const ScoreUpdate = ({ updateScore, players }) => {
  return (
    <form onSubmit={updateScore}>
      <div className="playerContainer">
        {players.map((player) => {
          return (
            <label htmlFor={player} key={player}>
              {`Points for ${player}:`}
              <input type="text" id={`${player}score`} name={player} />
            </label>
          );
        })}
      </div>
      <br />
      <input type="submit" value="Update Scores" disabled={players.length === 0} />
    </form>
  );
};

export default ScoreUpdate;

ScoreUpdate.propTypes = {
  updateScore: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};
