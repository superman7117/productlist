'use strict';

$(document).ready(init);

function init(){
  $('#newJobBTN').on('click', getNewJobView)
  $('#formBTN').on('click', saveJobAndReturn)
  $('#allAudits').on('click', '.deleteBTN', deleter)
  $('#allAudits').on('click', '.viewBTN', viewJob)
}

function getNewJobView(){
  $.get('/audits/auditList')
  .done(function(data){
    document.body.innerHTML = data
    init();
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
  console.log('im gonna post');
  $.post("/audits/",{
    companyName: companyName,
    auditorName: auditorName,
    todaysDate: todaysDate,
    carType: carType,
    description: description,
    damageLevel: damageLevel,
    picture: picture,
    isFraud: isFraud
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
