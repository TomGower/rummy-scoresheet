import React from 'react';
import PropTypes from 'prop-types';

const AddPlayers = ({ submitFunc }) => (
  <form onSubmit={submitFunc} className="add-players">
    <label htmlFor="playerName">
      Player name:
      <input type="text" id="playerName" name="playerName" />
    </label>
    <br />
    <input type="submit" value="Add Player" />
  </form>
);

export default AddPlayers;

AddPlayers.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};
