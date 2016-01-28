var express = require('express');
var router = express.Router();
var Audit = require('../models/audit')
/* GET home page. */
router.get('/', function(req, res, next) {
    Audit.find({}, function(err, audits){
      console.log("\n\nAudits!!", audits);
      res.render('index', {
        title: 'Audi Audit',
        jobs: audits
        });
  });
});

module.exports = router;
