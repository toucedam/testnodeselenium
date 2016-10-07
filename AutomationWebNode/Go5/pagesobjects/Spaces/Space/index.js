import Selectors from './selectors';
import BasePage from './BasePage';

class Space extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	goToLeftSpace () {

		 this.goTo(Selectors.openMenu)
		 then(() => {
				this.goTo(Selectors.leaveSpace)
				});
	}

	goToMySpaces(){
		return this.goTo(Selectors.goToMySpaces);
	}
}

export default Spaces;

