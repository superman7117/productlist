'use strict';

var express = require('express');
var router = express.Router();

var Audit = require('../models/audit')

router.get('/auditList', function(req, res, next) {
    res.render('auditList',{title: "Audi Audit"})
});


router.get('/', function(req, res, next) {
  Audit.find({}, function(err, audits){
    res.status(err ? 400 : 200).send(err || audits);
  })
});

// router.get('/:auditId/delete', function(req, res, next) {
//   Audit.findByID(req.params.auditId, function(err, audits){
//     res.status(err ? 400 : 200).send(err || audits);
//   })
// });




router.post('/', function(req,res){
  var audit = new Audit(req.body);
  audit.save(function(err, saveAudit){
    res.status(err ? 400 : 200).send(err || saveAudit);
  });


})


module.exports = router;
