import Page from './page';

class CatagoriesPane extends Page {

    get catagories()  { return browser.element('div.categories'); }
    get publish()  { return browser.element('div.category.publish'); }
    get playerList()      { return browser.element("a[href*='players/list']"); }

    openPlayerList() {
       this.playerList.waitForExist(3000);
       this.playerList.click();
    }

}

export default new CatagoriesPane();
