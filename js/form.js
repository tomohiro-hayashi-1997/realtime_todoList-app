$(document).ready(function(){
  $('#task').blur(function() {
       if($(this).val().length === 0){
         $('.task-text').removeClass("focus");
       }
       else { return; }
     })
     .focus(function() {
       $('.task-text').addClass("focus")
     });
});