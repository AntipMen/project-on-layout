images = ["./image/glasses2.jpg", "./image/glasses3.jpg"];
var ImgNumber = 0;
var ImgLength = images.length - 1;
var delay = 5000;
var lock = false;
var run;

function changeImg(direction) {
  if (document.images) {
    ImgNumber = ImgNumber + direction;
    if (ImgNumber > ImgLength) {
      ImgNumber = 0;
    }
    if (ImgNumber < 0) {
      ImgNumber = ImgLength;
    }
    document.getElementById("slider").src = images[ImgNumber];
  }
}

function auto() {
  if (lock == true) {
    lock = false;
    window.clearInterval(run);
  } else if (lock == false) {
    lock = true;
    run = setInterval("changeImg(1)", delay);
  }
}
auto();
