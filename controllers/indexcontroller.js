
const courses = require('../data/courses.json')
const categories = require('../data/categories.json')

module.exports = {
    home : (req, res) => {
        /* toda la lógica!!! */
        const {id} = req.params;
        const course = courses.find(course => course.id === +id)
        
        return res.render('home',{
          title : "Kitchening | Home",
          categories,
          courses,
          id,
        });
      }
}