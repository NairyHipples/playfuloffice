//DOC ready

$(document).ready(function() {
  //Jag har provat en massa funktioner som jag lämnar kvar för att komma ihåg i framtiden
  $('.page-top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
  $('body').click(function(){
    $('.navHeaderCollapse').collapse('hide');
  });

}); // end DOC ready
