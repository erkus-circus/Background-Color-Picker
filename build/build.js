"use strict";
var $ = function (s) { return document.getElementById(s); };
function whiteOrBlack(r, g, b) {
    var whites = 0; // how many values are closer to white
    var blacks = 0; // how many are closer to black
    var colors = [r, g, b];
    for (var c in colors) {
        if (colors[c] < 255 / 2) {
            // color is closer to white
            whites++;
        }
        else {
            // color is closer to black;
            blacks++;
        }
    }
    // if there are more blacks than white: black or white
    return (blacks > whites) ? "black" : "white";
}
function parseColor(a, b, c) {
    document.body.style.color = "rgb(" + a + "," + b + "," + c + ")"; // set color of text
    var col = whiteOrBlack(a, b, c); // find color (w/b) of values;
    if (col == "white") {
        // set backgrounds if color is white
        $("predicted-text").style.backgroundColor = col;
        $("text").style.backgroundColor = "black";
    }
    else {
        // set backgrounds if color is not white. (black)
        $("predicted-text").style.backgroundColor = col;
        $("text").style.backgroundColor = "white";
    }
    // set info to same color so you can still read it.
    $('color').innerHTML = "(" + a + "," + b + "," + c + ")";
    $('info').style.color = "black";
    // set inverted texts background
    $("inverted-text").style.backgroundColor = "rgb(" + (255 - a) + "," + (255 - b) + "," + (255 - c) + ")";
}
onclick = ontouchend = function () { return parseColor(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)); }; // set random color when clicked
ondblclick = function () {
    parseColor((prompt("Red Input", "0")), (prompt("Green Input", "0")), (prompt("Blue Input", "0"))); // ask for input if color when double clicked
};
