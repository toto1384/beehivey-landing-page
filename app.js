/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
console.log('init script');
window.onscroll = function() {
    console.log('on scroll');
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = (-(document.getElementById('navbar').offsetHeight)).toString();
  }
  prevScrollpos = currentScrollPos;
}