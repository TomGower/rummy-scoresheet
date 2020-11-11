import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ScoreUpdate = ({ updateScore, players }, ref) => {
  return (
    <form onSubmit={updateScore} ref={ref}>
      <div className="playerContainer">
        {players.map((player) => (
          <label htmlFor={player} key={player}>
            {`Points for ${player}:`}
            <input type="number" id={`${player}score`} name={player} />
          </label>
        ))}
      </div>
      <br />
      <input type="submit" value="Update Scores" disabled={players.length === 0} />
    </form>
  );
};

export default forwardRef(ScoreUpdate);

ScoreUpdate.propTypes = {
  updateScore: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};
