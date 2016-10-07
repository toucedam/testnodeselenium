import Selectors from './selectors';
import BasePage from './BasePage';

class Space extends BasePage {
	constructor (webdriver) {
		super(webdriver);
	}

	isLoaded () {
		return super.waitForDisplayed(goButtonLogin, 50000);
	}

 	sendUsername (username) {
 		this.driver.findElement (By.css(inputEmail)).sendKeys(username);
 	}

 	sendPassword (password) {
		this.driver.findElement(By.css(inputPassword)).sendKeys(password);
 	}

 	pressLoginButton () {
 		this.driver.findElement(By.css(goButtonLogin)).click();
 	}

 	login (username,password) {

 		this.sendUsername(username);
 		this.sendPassword(password);
 		this.pressLoginButton();
 		return this.driver.wait(until.elementLocated(By.css(home)),50000);
 	}

}

export default Space;
	}
}
