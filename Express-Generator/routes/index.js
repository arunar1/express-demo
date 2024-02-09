var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend' });
});

router.get('/express',(req,res,next)=>{
  console.log(req.query.course)
  res.render('index',{title:'Express',subtitle:`This is developed for study purpose and ${req.query.course.toUpperCase()} is the fundamental`})
});

module.exports = router;
