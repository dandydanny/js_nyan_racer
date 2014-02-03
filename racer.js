$(document).ready(function() {
  $('#countdown').css("font-size", ($(document).height() / 2) + "px" );
  $('.racer_table td').css("height", $('.racer_table td').width())
});

$(window).resize(function() {
  $('#countdown').css("font-size", ($(document).height() / 2) + "px" );
  $('.racer_table td').css("height", $('.racer_table td').width())
});

var race = function(){
  $(document).on('keyup', function(event) {
    if(event.keyCode === 65) { //a
      advancePlayer("1");
    }
    if(event.keyCode === 74) { //j
      advancePlayer("2");
    }
  });
}

var advancePlayer = function(player) {
  active = $("#player" + player + "_strip>td.active");
  active.removeClass("active");
  active.addClass("trail");
  active.next().addClass("active");
  if ($("#player" + player + "_strip>td:last").hasClass("active")) {
    var r=confirm("Player " + player + " wins!\n\nPlay again?\n");
    if(r === true){
      window.location.reload();
    } else {}
  }
}

function initializaPlay() {
  var timeOut = setTimeout(initializaPlay, 1000);
  $('#countdown').html(time);
  if(time === 0){
    $('#countdown').html("");
    clearTimeout(timeOut);
    race();
  }
  time--;
}

var time = 3;
initializaPlay();
