var nav = document.getElementById("dropdown");
var hamburger = document.getElementById("hamburger");
var close = document.getElementById("closeIcon");

var navProduct = document.getElementById("navProduct");
var titlePro = document.getElementById("protitle");

var navCompany = document.getElementById("navCompany");
var titleCom = document.getElementById("comtitle");

var navConnect = document.getElementById("navConnect");
var titleCon = document.getElementById("contitle");

let intViewportWidth = window.innerWidth;

function navOpen() {
  nav.style.display = "flex";
  hamburger.style.display = "none";
  close.style.display = "block";
}
function navClose() {
  nav.style.display = "none";
  hamburger.style.display = "block";
  close.style.display = "none";
}

function product() {
  if (intViewportWidth <= 375) {
    if (navProduct.style.display === "block") {
      titlePro.style.color = "hsl(208, 49%, 24%)";
      navProduct.style.display = "none";
      document.querySelector("#arrow2").style.transform = "rotate(360deg)";
    } else {
      titlePro.style.color = "hsl(240, 2%, 79%)";
      navProduct.style.display = "block";
      document.querySelector("#arrow2").style.transform = "rotate(180deg)";
    }
  } else {
    if (navProduct.style.display === "block") {
      titlePro.style.color = "hsl(240, 2%, 79%)";
      navProduct.style.display = "none";
      document.querySelector("#arrow1").style.transform = "rotate(360deg)";
    } else {
      titlePro.style.color = " hsl(0, 0%, 100%)";
      navProduct.style.display = "block";
      document.querySelector("#arrow1").style.transform = "rotate(180deg)";
    }
  }
}

function company() {
  if (intViewportWidth <= 375) {
    if (navCompany.style.display === "block") {
      titleCom.style.color = "hsl(208, 49%, 24%)";
      navCompany.style.display = "none";
      document.querySelector("#arrow4").style.transform = "rotate(360deg)";
    } else {
      titleCom.style.color = "hsl(240, 2%, 79%)";
      navCompany.style.display = "block";
      document.querySelector("#arrow4").style.transform = "rotate(180deg)";
    }
  } else {
    if (navCompany.style.display === "block") {
      document.querySelector("#arrow3").style.transform = "rotate(360deg)";
      titleCom.style.color = "hsl(240, 2%, 79%)";
      navCompany.style.display = "none";
    } else {
      document.querySelector("#arrow3").style.transform = "rotate(180deg)";
      titleCom.style.color = " hsl(0, 0%, 100%)";
      navCompany.style.display = "block";
    }
  }
}

function connect() {
  if (intViewportWidth <= 375) {
    if (navConnect.style.display === "block") {
      titleCon.style.color = "hsl(208, 49%, 24%)";
      navConnect.style.display = "none";
      document.querySelector("#arrow6").style.transform = "rotate(360deg)";
    } else {
      titleCon.style.color = "hsl(240, 2%, 79%)";
      navConnect.style.display = "block";
      document.querySelector("#arrow6").style.transform = "rotate(180deg)";
    }
  } else {
    if (navConnect.style.display === "block") {
      document.querySelector("#arrow5").style.transform = "rotate(360deg)";
      navConnect.style.display = "none";
      titleCon.style.color = "hsl(240, 2%, 79%)";
    } else {
      document.querySelector("#arrow5").style.transform = "rotate(180deg)";
      titleCon.style.color = " hsl(0, 0%, 100%)";
      navConnect.style.display = "block";
    }
  }
}
