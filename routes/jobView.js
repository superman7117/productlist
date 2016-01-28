var express = require('express');
var router = express.Router();
var Audit = require('../models/audit');


router.get('/:jobId', function(req, res, next) {
  console.log("YPPPPPPPPPPP", req.body.jobId)
  Audit.findById(req.body.jobId, function(err, audits){
      console.log('SINGLE!!!!!!', audits);


      res.render('jobView');
  })
});

router.get('/:jobId', function(req, res, next) {
      res.render('jobView');
});


module.exports = router;
