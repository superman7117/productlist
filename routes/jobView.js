var express = require('express');
var router = express.Router();
var Audit = require('../models/audit');

// router.get('/dude', function(req, res, next) {
// });


router.get('/:jobId', function(req, res, next) {
  Audit.findById(req.params.jobId, function(err, audits){
      console.log("\n\nAudits!!", audits);
      res.render('jobView', {
        title: 'Audi Audit',
        jobs: audits
        });
  });

});


module.exports = router;
