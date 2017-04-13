var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {

  req.db.connect(req.cs, function(e,d){
      res.render('index', { data: d });
  })
  
});

router.post('/add', function(req,res,next){
  req.db.connect(req.cs, function(err,db){
    if(err) throw err;
    var body= {'Name':  req.body.fname, 
    'Category': req.body.category,
    'Latitude': req.body.Latitude,
    'Longitude': req.body.Longitude
  };
  var options= {'upsert':true};
db.collection('location').update({},body,options,function(err,Upserted){
  if(err) throw err;
  console.dir("Succesfuly: Upserted: " + Upserted);
  res.locals.name= req.body.fname;
  res.render('showBack');
  return db.close();

})

})
})

router.get('/search', function(req,res,next){
  
      res.render('search');
  
  
    })

router.post('/search', function(req,res,next){


 req.db.connect(req.cs, function(err,db){
    if(err) throw err;
    var query= {'Name':  req.body.fname};
    
    
db.collection('location').find(query,{}).toArray(function(err,docsArr){

  if(err) throw err;
  console.log(docsArr);
  res.render('locations', {location:docsArr, success:true});

  return db.close;

 
})
  

})

})



  

module.exports = router;
