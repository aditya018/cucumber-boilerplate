import LoginPage from '../../pageObject/LoginPage';

/**
 * Perform an login using given email and password
 * @param  {String}   email
 * @param  {String}   password
 */
module.exports = (email, password) => {
    LoginPage.login(email,password);
};
