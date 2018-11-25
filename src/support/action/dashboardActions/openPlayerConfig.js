import PlayerList from '../../pageObject/PlayerList';

/**
 * Open player config for a given player name
 * @param  {String}   playerName
 */
module.exports = (playerName) => {
    PlayerList.openPlayerConfig(playerName);
};
