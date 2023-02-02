const fs = require('fs');
const courses = require('../data/courses.json')
const chefs = require('../data/chefs.json');
const chefsSort= chefs.sort((a,b)=> a.name > b.name ? 1 : a.name < b.name ? -1 : 0)

module.exports = {
    list : (req,res) => {
        return res.render('courses/list',{
        title:"Lista de cursos",
            courses : courses.filter(course => course.visible)
        })
    },
    detail : (req,res) => {
        const {id} = req.params;
        const course = courses.find(course => course.id === +id)

        return res.render('courses/detail',{
            title:"Detalle del curso",
            ...course,
           /*  id,  */
        })
    },
    add : (req,res) => {
        return res.render('courses/formAdd',{
            chefs : chefsSort
        })
    },
    edit : (req,res) => {
        const {id} = req.params;

        const course = courses.find(course => course.id === +id);
        return res.render('courses/formEdit',{
            ...course,
            chefs: chefsSort
        })
    },
    store: (req,res) => {
        /* voy a guardar la info del curso */
        /* la info q viaja por post la recibo por el objeto body */
        const {title,price,description,section,chef,visible} = req.body;
        
        const newCourse = {
            id : courses[courses.length - 1].id + 1,
            title :title.trim(),
            price : +price,
            description: description.trim(),
            image: null,
            chef ,
            sale : section === "sale" && true,
            newest : section === "newest" && true,
            free : section === "free" && true,
            visible: visible ? true : false
        }
        courses.push(newCourse);
        fs.writeFileSync('./data/courses.json',JSON.stringify(courses, null, 3), 'utf-8');
        return  res.redirect('/courses/list');
        /* return  res.send(newCourse) */
      /* return  res.send(req.body) */
    }
};
