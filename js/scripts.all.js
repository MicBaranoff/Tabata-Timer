(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

    let perm = false;
    let maxRounds = 0;
    let actualRounds = 1;
    let audio_end = document.getElementById('endsound');
    let audio_go = document.getElementById('gosound');
    let audio_start = document.getElementById('startsound');

    $('#go').on('click', function(){
          let len = $('#rounds').val();
          console.log(len);
          if(len>10 && len<=0){
              alert('enter the number of rounds from 1 to 10');
              $('#rounds').val('');
          } else {
            maxRounds = len;
            
            $('.inputbox').hide(500);
            let timerId = setInterval(function(){
                setTimeout(() => {         $('.wrapper').css('background', '#d35400');        audio_go.play();        }, 100);
                setTimeout(() => {        $('.wrapper').css('background', '#fff');          audio_go.pause();          }, 900);
            }, 1000);
            setTimeout(() => {
                 clearInterval(timerId); 
                 audio_start.play(); 
                 $('.timer').fadeIn(500);
                 $('body').css('background', '#2ecc71') ;
                liftOff();
                }, 3999);
            
          }
          $('#rounds').val('');
    });
    // $('#rounds')
    
    function liftOff() { 
       

        if(actualRounds<=maxRounds){
            $('body').css('background', '#2ecc71') ;
            $('.timer').countdown('destroy');
            $('.timer').countdown({
                until:  +20,
                format: 'S',
                onExpiry: liftOff1,
                alwaysExpire: true
            });
            audio_start.play(); 

        }  else {
            $('.timer').countdown('destroy');
            $('.timer').fadeOut(500);
            $('body').css('background', '#f1c40f') ;
            actualRounds = 0;
            maxRounds = 0;
            $('.inputbox').fadeIn(500);
            audio_end.play();

        }

        actualRounds++;
       
       
    }

    function liftOff1() { 
        $('body').css('background', '#e74c3c') ;
        $('.timer').countdown('destroy');
        $('.timer').countdown({
            until:  +10,
            format: 'S',
            onExpiry: liftOff
        });
        audio_go.play(); 
    }


    
    
    
    
   
    



});
},{}]},{},[1]);
