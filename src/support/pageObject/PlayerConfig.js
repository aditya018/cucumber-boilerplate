import Page from './page';
import CatagoriesPane from './CatagoriesPane';

class PlayerConfig extends Page {

	get playerName() { return browser.element('#player-name'); }
    get fixedStyle() { return browser.element('#fixed')}
    get width () { return browser.element("input[title='width']")}
    get height () { return browser.element("input[title='height']")}
    get saveButton () { return browser.element("button[type=submit]")}

    updateName(name) {
            this.playerName.waitForExist(3000);
            this.playerName.setValue(name);
    }

    updateFixedSize(width, height){
            this.fixedStyle.waitForExist(3000);
            this.fixedStyle.click();
            this.width.setValue(width);
            this.height.setValue(height);
            this.fixedStyle.click();
    }

    validateFixedSize(width, height){
           var w = this.width.getValue();
           var h = this.height.getValue();

            expect(w).to.equal(width);
            expect(h).to.equal(height);
    }

    save(){
            this.saveButton.waitForEnabled();
            this.saveButton.click();
    }
}

export default new PlayerConfig();
