import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DisplayScores from './DisplayScores';

const ShowPlayer = ({ playerName, scores }) => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setTotalScore(scores.reduce((acc, curr) => acc + curr));
  }, [JSON.stringify(scores)]);

  return (
    <div>
      <h1 className="playerHeader">{`${playerName}: ${totalScore}`}</h1>
      <DisplayScores scores={scores} />
    </div>
  );
};

export default ShowPlayer;

ShowPlayer.propTypes = {
  playerName: PropTypes.string.isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};
