const $:any = (s:any) => document.getElementById(s);

function whiteOrBlack(r:number,g:number,b:number):string {
    let whites = 0; // how many values are closer to white
    let blacks = 0; // how many are closer to black
    
    let colors = [r,g,b];
    for(let c in colors) {
        if (colors[c] < 255/2) {
            // color is closer to white
            whites++;
        } else {
            // color is closer to black;
            blacks++;
        }
    }
    
    // if there are more blacks than white: black or white
    return (blacks > whites) ? "black" : "white";
}

function parseColor(a:any,b:any,c:any) {

    document.body.style.color = "rgb(" + a + "," + b + "," + c + ")"; // set color of text

    let col = whiteOrBlack(a,b,c); // find color (w/b) of values;

    if (col == "white") {
        // set backgrounds if color is white
        $("predicted-text").style.backgroundColor = col;
        $("text").style.backgroundColor = "black";

    } else {
        // set backgrounds if color is not white. (black)

        $("predicted-text").style.backgroundColor = col;
        $("text").style.backgroundColor = "white";
    }

    
    // set info to same color so you can still read it.
    $('color').innerHTML = "(" + a + "," + b + "," + c + ")";
    $('info').style.color = "black";

    // set inverted texts background
    $("inverted-text").style.backgroundColor = "rgb(" + (255 - a) + "," + (255 - b) + "," + (255 - c) + ")"
}

onclick = () => parseColor(Math.floor(Math.random() *256 ), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)); // set random color when clicked

ondblclick = () => {
    parseColor((prompt("Red Input", "0")), (prompt("Green Input", "0")), (prompt("Blue Input", "0"))) // ask for input if color when double clicked
}
