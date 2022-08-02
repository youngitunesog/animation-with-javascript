"use strict";

var box = document.getElementById('box');
var po = 10;
var down = 10;
var lef = 10;
var r = setInterval(ani, 50);

function ani() {
  if (po >= 150) {
    down += 1;
    box.style.top = down + 'px';
  } else {
    po += 1;
    box.style.left = po + "px";
  }

  if (down >= 150) {
    lef += 1;
    box.style.right = lef + 'px';
  }
}