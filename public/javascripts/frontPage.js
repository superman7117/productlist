'use strict';

$(document).ready(init);

function init(){
  $('#newJobBTN').on('click', getNewJobView)
  $('#formBTN').on('click', saveJobAndReturn)
  $('#allAudits').on('click', '.deleteBTN', deleter)
  $('#allAudits').on('click', '.viewBTN', viewJob)
  addEmUp()
}
function addEmUp(){
  var numAry =$(".reimbursementAmount").toArray().map(function(elem){
    return $(elem).attr('data');
  })
  console.log('addEmUp',numAry);
  var sum = numAry.reduce(function(acc, x){
    return acc + parseInt(x)
  },0)
  $('#totalReimbursement').append(" $"+sum)
}
function getNewJobView(){
  $.get('/audits/auditList')
  .done(function(data){
    document.body.innerHTML = data
    init();
    initer()
  })
  .fail(function(err){if (err) console.log("ERR",err);})
}

function saveJobAndReturn(e){
  e.preventDefault();
  console.log('here i am!');
  var companyName = $("#companyName").val();
  var auditorName = $("#auditorName").val();
  var todaysDate = $("#todaysDate").val();
  var carType = $("#carType").val();
  var description = $("description").val();
  var damageLevel = $('input[name=howBad]:checked').val();
  var picture = $("#pictureInput").val();
  if ($("#isItFraud").prop('checked')){
    var isFraud = true;
  }
  else{
    var isFraud = false;
  }
  if(damageLevel === 'Totaled'){ var reimbursement = 20000}
  else if(damageLevel === 'Severe'){ var reimbursement = 10000}
  else if(damageLevel === 'Moderate'){ var reimbursement = 5000}
  else if(damageLevel === 'Minimal'){ var reimbursement = 1000}
  else if(damageLevel === 'No Damage'){ var reimbursement = -20}
  else if(damageLevel === 'Not Covered'){ var reimbursement = 0}
  console.log('im gonna post');
  $.post("/audits/",{
    companyName: companyName,
    auditorName: auditorName,
    todaysDate: todaysDate,
    carType: carType,
    description: description,
    damageLevel: damageLevel,
    picture: picture,
    isFraud: isFraud,
    reimbursement: reimbursement
  })
  .done(function(data){
    goHome()
})
.fail(function(err){if (err) console.log("ERR",err);})
}

function goHome(){
  $.get('/')
  .done(function(data){
    document.body.innerHTML = data
    init();
    initer()
  })
  .fail(function(err){if (err) console.log("ERR",err);})
}

function deleter(){
  console.log("what");
  var jobId = $(this).closest(".row").attr('data')
  var thingS = $(this).closest('.row')
  console.log(jobId);
  $.post('/users/delete', {jobId: jobId})
  .done(function(data){
    thingS.remove()
  })
  .fail(function(err){if (err) console.log("ERR",err);})
}
function viewJob(){

  console.log("what");
  var jobId = $(this).closest(".row").attr('data')
  location.href = '/jobView/'+ jobId
  console.log(jobId);
  // $.get('/jobView', {jobId: jobId})
  // .done(function(data){
  //   console.log(data);
  //
  // })
  // .fail(function(err){if (err) console.log("ERR",err);})
}
