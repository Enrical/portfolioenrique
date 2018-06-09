

$(document).ready(function(){

  $('#skill').mouseenter(function move(){

      var bar1 = document.getElementById("myBar");
      var bar2 = document.getElementById("myBar2");
      var bar3 = document.getElementById("myBar3");
      var bar4 = document.getElementById("myBar4");
  
      var width = 1;
      var id = setInterval(frame, 10);
      
      function frame() {
        if (width >= 70) {
          // clearInterval(id);
        } else {
          width++; 
          bar1.style.width = width + '%'; 
        }
        if (width >= 60) {
          // clearInterval(id);
        } else {
          width++; 
          bar2.style.width = width + '%'; 
        }
        if (width >= 50) {
          // clearInterval(id);
        } else {
          width++; 
          bar3.style.width = width + '%'; 
        }
        if (width >= 40) {
          // clearInterval(id);
        } else {
          width++; 
          bar4.style.width = width + '%'; 
        }
      }
    })
});



// $( "section" ).appendTo( document.body );
//   $( window ).scroll(function() {
//     $( ".card" ).css( "display", "inline" ).fadeOut( "slow" );
//   });

// $(document).ready(function() {
//   $( "section" ).scroll(function() {
//     $( ".card" ).css( "display", "inline" ).fadeOut( "slow" );
//   });
// });