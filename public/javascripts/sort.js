'use strict';

$(document).ready(initer);

function initer(){
  $('#fraudLooker').on('change', fraudFilter)
  $('.theC').on('click', sortbyCompany)

}

function sortbyCompany(){
  console.log("yes sir");
  $.get('/users/sortc')
  .done(function(data){
    console.log(data);
    document.body.innerHTML = data
    init();
    initer();
  })
}

function fraudFilter(){
  console.log("boom");
  if ($('#fraudLooker').prop("checked")){
    $(".false").hide()
  }
  else{ $(".false").show()}
}
