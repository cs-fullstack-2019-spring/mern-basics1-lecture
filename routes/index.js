var express = require('express');
var router = express.Router();
var yelpStoreCollection = require('../models/YelpStoreSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addToDatabase/:name/:address', (req, res)=>{
  yelpStoreCollection.create({
    name: req.params.name,
    address: req.params.address,
  }, (errors, results)=>{
    if (errors) res.send(errors);
    else res.send("Created!!!");
  })
});

router.get('/getInfo', (req, res)=>{
  yelpStoreCollection.find({}, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});

module.exports = router;
