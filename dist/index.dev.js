"use strict";

var box = document.getElementById('box');
var po = 10;
var down = 10;
var lef = 10;
var le = 300;
var up = 500;
var r = setInterval(ani, 10);

function ani() {
  if (po >= 300) {
    down += 1;
    box.style.top = down + 'px';
  } else {
    po += 1;
    box.style.left = po + "px";
  }

  if (down >= 500) {
    down = 500;
    le -= 1;
    box.style.left = le + 'px';
  } else {
    lef += 1;
    box.style.right = lef + 'px';
  }

  if (le <= 10) {
    le = 1;
    up -= 1;
    box.style.top = up + 'px';
  }

  if (up <= 10) {
    clearInterval(r);
  }
}