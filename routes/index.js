const express = require('express');
const router = express.Router();

const {home} = require('../controllers/indexcontroller');

/* 
const controller = require('../controllers/indexcontroller'); -> opcion de PlayG-> opcion de PlayG
 */
/* tmb se puede hacer asi
const router= require('express').Router();
requiero express y de express solo me traigo router
*/
router.get('/', home );
/* GET home page. */
/*                    (objeto que maneja peticiones, maneja respuestas, da continuidad al proceso)       */
/* router.get('/', controller.home ); -> opcion de PlayG */


/* function(req, res, next) {
  return res.render('home'/* ,{ 
    title: 'Comision 18' } );
}); */

/* metodo render, renderiza. recibe 2 parametros la vista para renderizar y el obj con propiedad title,con valor :express */
module.exports = router;