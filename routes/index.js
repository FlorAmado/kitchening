const express = require('express');
const router = express.Router();
/* tmb se puede hacer asi
const router= require('express').Router();
requiero express y de express solo me traigo router
*/

/* GET home page. */
/*                    (objeto que maneja peticiones, maneja respuestas, da continuidad al proceso)       */
router.get('/', function(req, res, next) {
  res.render('home'/* ,{ 
    title: 'Comision 18' } */);
});
/* metodo render, renderiza. recibe 2 parametros la vista para renderizar y el obj con propiedad title,con valor :express */
module.exports = router;
