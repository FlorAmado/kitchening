const express = require('express');
const router = express.Router();

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */
const {register,login,profile} = require('../controllers/userController');
/* ruta troncal que me lleva al enrrutador = 
                 /users 
*/

 /* /users */

router.get('/register',register);
router.get('/login',login);
router.get('/profile',profile);

module.exports = router;
