'use strict';

var mongoose = require('mongoose');

var auditSchema = mongoose.Schema({
  companyName: {type: String},
  auditorName: {type: String},
  todaysDate: {type: String},
  carType: {type: String},
  description: {type: String},
  damageLevel: {type: String},
  picture: {type: String},
  reimbursement: {type: Number},
  isFraud: {type: Boolean, default: false}
});


var Audit = mongoose.model("Audit", auditSchema);

module.exports = Audit;