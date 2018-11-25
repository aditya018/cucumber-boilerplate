import Page from './page';

class LoginPage extends Page {

    get email()  { return browser.element('#email'); }
    get password()  { return browser.element("[name='password']"); }
    get form()      { return browser.element("[name='loginForm']"); }


    open() {
        super.open('');
    }

    submit() {
        this.form.submitForm();
    }

    login(emailId, pwd) {
        this.open();
    	this.email.setValue(emailId);
    	this.password.setValue(pwd);
    	this.submit();
    }

}

export default new LoginPage();
