const express =require('express');
const router = express.Router();

const {list,detail,add,edit,store,update} = require('../controllers/coursesController')

/* /courses */

// /courses/detail/+parametro obligatorio
//  http://localhost:3000/courses/detail/cocina/2
// devuelve objetos con strings
router
    .get('/list',list)
    .get('/detail/:id',detail)
    .get('/add',add)
    .post('/add',store)
    .get('/edit/:id',edit)
    .post('/update/:id',update)//reemplazar recurso con info dada

module.exports = router;