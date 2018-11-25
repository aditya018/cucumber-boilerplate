import PlayerConfig from '../../pageObject/PlayerConfig';

/**
 * Perform an click action on the given element
 * @param  {String}   width
 * @param  {String}   height
 */
module.exports = (width, height) => {
    var w = PlayerConfig.width.getValue();
    var h = PlayerConfig.height.getValue();
    expect(w).to.equal(width);
    expect(h).to.equal(height);
};
