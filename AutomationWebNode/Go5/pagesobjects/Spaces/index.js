import Selectors from './selectors';
import BasePage from './BasePage';

class Spaces extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	goToRecommended () {
		return this.goTo(Selectors.goToRecommended);
	}
	goToMySpaces(){
		return this.goTo(Selectors.oToMySpaces);
	}
}

export default Spaces;

