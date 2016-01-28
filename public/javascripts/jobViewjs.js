'use strict';

$(document).ready(init);

function init(){
  startHerUp()
}

function startHerUp(){
  var jobId = location.href.split('/').pop();
  $.get('/jobView', {jobId: jobId})
  .done(function(data){
    console.log(data);

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
