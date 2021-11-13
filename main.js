Song="";
function preload(){
Song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
camera=createCapture(VIDEO);
camera.hide();
}

function modelLoaded(){
    console.log("Your Model Is REady To Use");
}

function play(){
Song.play();
}

function draw(){
image(camera,0,0,600,500);
}