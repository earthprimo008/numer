var express = require('express');
var router = express.Router();

let bisectionmodel = require('../models/bisectionmodel');
let trapezoidalmodel = require('../models/trapezoidalmodel');
let compositetrapezoidalmodel = require('../models/compositetrapezoidalmodel');
let simpsonmodel = require('../models/simpsonmodel');

//Bisection

router.get('/showbisectionmodel', function(req, res, next) {
 
  bisectionmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});


router.post('/bisectionmodel',(req,res)=>{
  console.log(req.body);
  let doc = new bisectionmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})


//Trapezoidal

router.get('/showtrapezoidalmodel', function(req, res, next) {
 
  trapezoidalmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});


router.post('/trapezoidalmodel',(req,res)=>{
  console.log(req.body);
  let doc = new trapezoidalmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})


//CompositeTrapzoidal

router.get('/showcompositetrapezoidalmodel', function(req, res, next) {
 
  compositetrapezoidalmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});

router.post('/compositetrapezoidalmodel',(req,res)=>{
  console.log(req.body);
  let doc = new compositetrapezoidalmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//Simpson

router.get('/showsimpsonmodel', function(req, res, next) {
 
  simpsonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});

router.post('/simpsonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new simpsonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})


module.exports = router;

