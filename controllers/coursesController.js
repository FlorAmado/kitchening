const courses = require('../data/courses.json')
const categories = require('../data/categories.json')


module.exports = {
    list : (req,res) => {
        return res.render('courses/list',{
        title:"Lista de cursos",
            courses
        })
    },
    detail : (req,res) => {
        const {id} = req.params;
        const course = courses.find(course => course.id === +id)

        return res.render('courses/detail',{
            title:"Detalle del curso",
            course,
            id, 
        })
    },
    category : (req,res) => {
        const {idCategory,order} = req.params;
        const coursesFound = courses.filter(course => course.categoryId === +idCategory)

        let coursesOrder = coursesFound;
        if(order){
            if (order === "asc") {
                //manera ascendente
                coursesOrder = coursesFound.sort((prevCourse,nextCourse)=>{//sert, metodo que ordena
                    return prevCourse.price - nextCourse.price
                })
        }else{ //manera descendente
            coursesOrder = coursesFound.sort((prevCourse,nextCourse)=>{//sert, metodo que ordena
                return  nextCourse.price - prevCourse.price
            })
        }
        return res.render('courses/list',{
            title:`Producto y su categoria id ${idCategory}`,
            courses:coursesOrder, 
            categories
        })
    }
    }
}
