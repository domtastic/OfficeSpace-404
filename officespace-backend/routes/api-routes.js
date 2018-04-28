const userCtrl = require('../controllers/userCtrl');
const sessionCtrl = require('../controllers/sessionCtrl');
const emailCtrl = require('../controllers/emailCtrl');
// console.log(db, 'this is db')
module.exports = function (app) {

    //login endpoint
    app.post('/api/login', userCtrl.login)

    // signin enpoint logic
    app.post('/api/signUp', userCtrl.signUp);

    //endpoint for grabbing session user object to be used accrossed entire app.
    // app.get('/api/session', sessionCtrl.getSession);
    app.get('/api/session', sessionCtrl.getSession);
    app.get('/api/logout', userCtrl.logout)

    //get user info endpoint via query params
    app.get('/api/profile/:username', userCtrl.getAny);
    //update profile route
    app.put('/api/update/:username', userCtrl.update);

//    emails
    app.post('/api/emailSignUp', emailCtrl.signUp);
}
