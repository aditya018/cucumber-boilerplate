import Page from './page';
import CatagoriesPane from './CatagoriesPane';

class PlayerList extends Page {

    openPlayerConfig(playerName) {
        CatagoriesPane.openPlayerList();
        //browser.pause(3000);
        browser.waitForExist(`a[title='${playerName}']`,5000);
        browser.click(`a[title='${playerName}']`);
    }
}

export default new PlayerList();
