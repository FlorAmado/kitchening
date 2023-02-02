
const courses = require('../data/courses.json')


module.exports = {
    home : (req, res) => {
        /* toda la lógica! */
        /* const {id} = req.params;
        const course = courses.find(course => course.id === +id) */
        const newCourses = courses.filter(course => course.new);
        const saleCourses = courses.filter(course => course.sale);
        
        return res.render('home',{
          title : "Kitchening | Home",
          courses,
          newCourses,
          saleCourses,
          /* id, */
        });
      }
}