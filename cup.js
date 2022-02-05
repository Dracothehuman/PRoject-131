img="";

function preload(){
    img = loadImage("cup.jpg");
}

function setup(){ 
    canvas = createCanvas(780, 540);
    canvas.center()
}

function draw(){
    image(img , 0 , 0, 780, 540);
    fill("#FF0000");
    text("cup", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(40, 60, 450, 375);
}