'use strict';

$(document).ready(initer);

function initer(){
  $('#fraudLooker').on('change', fraudFilter)
  $('.theC').on('click', sortbyCompany)

}

function sortbyCompany(){
  $.get('/users/sortc')
  .done(function(data){})
}

function fraudFilter(){
  console.log("boom");
  if ($('#fraudLooker').prop("checked")){
    $(".false").hide()
  }
  else{ $(".false").show()}
}
