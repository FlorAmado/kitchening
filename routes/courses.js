const express =require('express');
const router = express.Router();

const {list,detail,category} = require('../controllers/coursesController')

/* /products */ /* courses */

router.get('/list',list);
router.get('/detail/:id',detail); // /courses/detail/+parametro obligatorio
//  http://localhost:3000/courses/detail/cocina/2
// devuelve objetos con strings
router.get('/category/:idCategory/:order?',category);
module.exports = router;