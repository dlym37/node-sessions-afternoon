const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession')
require('dotenv').config();
const swag = require('./controllers/swag_controller');
const auth = require('./controllers/auth_controller');
const cart_controller = require('./controllers/cart_controller');
const search = require('./controllers/search_controller');

const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUnitialized: true
}))
app.use(checkForSession);
app.use(express.static(`${__dirname}/build`));
//swag controller:
app.get('/api/swag', swag.read);
//auth controller:
app.post('/api/login', auth.login);
app.post('/api/register', auth.register);
app.post('/api/signout', auth.signout);
app.get('/api/user', auth.getUser);
//cart controller
app.post('/api/cart', cart_controller.add);
app.post('/api/cart/checkout', cart_controller.checkout);
app.delete('/api/cart', cart_controller.delete);
//search controller
app.get('api/search', search.search);
const port = 3000;

app.listen(port, () => {
    console.log('I am listening on port', port)
})