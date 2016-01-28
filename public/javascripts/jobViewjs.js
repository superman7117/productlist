'use strict';

$(document).ready(init);

function init(){
  $(".backToHome").on('click', goHome)
}

function goHome(){
  console.log("look at me");
  location.href = '/'

}
