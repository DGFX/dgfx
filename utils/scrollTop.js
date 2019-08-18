window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("myBtn").style.display = "block";
    //document.getElementById("navbar").style.backgroundColor = "#5a62ee";
  } else {
    document.getElementById("myBtn").style.display = "none";
    //document.getElementById("navbar").style.backgroundColor = "#fff";
  }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(function() {
    $("#homeBtn").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    $("#musicBtn").click(function(){
        $("html, body").animate({ scrollTop: $(".music-section").position().top }, 450);
      });
      $("#contactBtn").click(function(){
        $("html, body").animate({ scrollTop: $(".contact-icons").position().top }, 450);
      });
})