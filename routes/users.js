var express = require('express');
var router = express.Router();
var Audit = require('../models/audit');

/* GET users listing. */
router.post('/delete', function(req, res, next) {
  console.log(req.body.jobId)
  Audit.findById(req.body.jobId, function(err, audits){
    audits.remove(function(err){
      res.status(err ? 400 : 200).send(err || null);
    })
  })
});
router.get('/sortc', function(req, res, next) {
    Audit.find({}, function(err, docs){
      var newDocs = docs.sort('companyName', 'asc')
      res.render('index', {
        title: 'Audi Audit',
        jobs: newDocs
        });

    })

});



module.exports = router;
