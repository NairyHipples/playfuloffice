//DOC ready

$(document).ready(function() {
  //Jag har provat en massa funktioner som jag lämnar kvar för att komma ihåg i framtiden
  $('body').click(function(){
    $('.navHeaderCollapse').collapse('hide');
  });

  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1500);
}); // end DOC ready
