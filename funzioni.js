function go_full_screen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
};

function audioplay() {
  var sound = document.getElementById("audio");
  sound.play();
  sound.loop = true;
};

function attiva() {
  visual();
  audioplay();
};

function visual() {
  var show = document.getElementById("jumpscare");
  var question = document.getElementById("question-box");

  if (question !== null) {
    question.style.display = "none";
  }

  if (show !== null) {
    show.style.display = "block";
  }

  var msg = document.getElementById("message");
  if (msg !== null) {
msg.textContent = "CHÓ NGU VCL";
  }
}
