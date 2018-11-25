import PlayerConfig from '../../pageObject/PlayerConfig';

/**
 * Update player config and save changes
 * @param  {String}   width
 * @param  {String}   height
 */
module.exports = (width, height) => {
    PlayerConfig.updateName(`${width}x${height} example player`);
    PlayerConfig.updateFixedSize(width, height);
    PlayerConfig.validateFixedSize(width,height);
    PlayerConfig.save();
};
