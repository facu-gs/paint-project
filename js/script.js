var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var colors = ["red","orange","yellow","green","lightgreen","blue","lightblue","darkviolet","pink","black","grey","white"];

var penColor = ["blue"];
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 600, 400);
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, 600, 400);
ctx.stroke();

function drawSquare(xS,color) {
    ctx.fillStyle = color;
    ctx.fillRect(xS,0,50,50);
    ctx.strokeStyle = "black"
    ctx.strokeRect(xS,0,50,50);
}

for(var i = 0; i<13; i++) {
    drawSquare(50*i,colors[i]);
}

var canDraw = false;

function drawCircle(event) {
    if(canDraw) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        if((y<60)) {
            canDraw = false;
        } else {
            ctx.fillStyle = penColor;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

canvas.onmousemove = drawCircle;

function enableDrawing(event) {
        canDraw = true;
    }


function disableDrawing() {
    canDraw = false;
}

function changeColor(event){
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    var X = 50;

    if((x<X) && (y<50)) {
        penColor = colors[0];
    }
    
    if((x<X*2)&&
        (x>X*1)&&
        (y<50)) {

        penColor = colors[1];
    }

    if((x<X*3)&&
        (x>X*2)&&
        (y<50)) {

        penColor = colors[2];
    }

    if((x<X*4)&&
        (x>X*3)&&
        (y<50)) {

        penColor = colors[3];
    }
    if((x<X*5)&&
        (x>X*4)&&
        (y<50)) {

        penColor = colors[4];
    }
    if((x<X*6)&&
        (x>X*5)&&
        (y<50)) {

        penColor = colors[5];
    }
    if((x<X*7)&&
        (x>X*6)&&
        (y<50)) {

        penColor = colors[6];
    }
    if((x<X*8)&&
        (x>X*7)&&
        (y<50)) {

        penColor = colors[7];
    }
    if((x<X*9)&&
        (x>X*8)&&
        (y<50)) {

        penColor = colors[8];
    }
    if((x<X*10)&&
        (x>X*9)&&
        (y<50)) {

        penColor = colors[9];
    }
    if((x<X*11)&&
        (x>X*10)&&
        (y<50)) {

        penColor = colors[10];
    }
    if((x<X*12)&&
        (x>X*11)&&
        (y<50)) {

        penColor = colors[11];
    }
                                                                            
}

canvas.onmousedown = enableDrawing;

canvas.onmouseup = disableDrawing;

canvas.onclick = changeColor;
