SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/430896987',function(sound){
    $('#eng1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/787662708',function(sound){
    $('#eng2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/731195665',function(sound){
    $('#eng3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#eeng3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/210294604',function(sound){
      $('#j1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#ej1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/849936557',function(sound){
        $('#j2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#ej2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/849936557',function(sound){
          $('#j3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#ej3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/545239260',function(sound){
            $('#tamil1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#etamil1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/321725260',function(sound){
              $('#tamil2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#etamil2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/321725260',function(sound){
                $('#tamil3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#etamil3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });


});
