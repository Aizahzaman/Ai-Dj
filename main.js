right_wrist_x=0;
right_wrist_y=0;
left_wrist_x=0;
left_wrist_y=0;
right_score=0;
left_score=0;
Song="";
function preload(){
Song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.position(450,250);   
camera=createCapture(VIDEO);
camera.hide();
myModel=ml5.poseNet(camera,modelLoaded);
myModel.on("pose",result);
}

function modelLoaded(){
console.log("Your Model Is Ready To Use");
}

function result(answer){
if(answer.length>0){
console.log(answer);
right_wrist_x=answer[0].pose.rightWrist.x;
right_wrist_y=answer[0].pose.rightWrist.y;
left_wrist_x=answer[0].pose.leftWrist.x;
left_wrist_y=answer[0].pose.leftWrist.y;
right_score=answer[0].pose.keypoints[10].score;
left_score=answer[0].pose.keypoints[9].score;
}
}

function play(){
Song.play();
Song.setVolume(1);
Song.rate(1);

}

function draw(){
image(camera,0,0,600,500);
fill("#fc0303");
stroke("#fc0303");
circle(right_wrist_x,right_wrist_y,30);

if(left_score>0.2){
    circle(left_wrist_x,left_wrist_y,30);
    if(left_wrist_y>=500 && left_wrist_y<=450){
        Song.setVolume(0.1);
        document.getElementById("volume").innerHTML="Volume:0.1";
    }
    else if(left_wrist_y>=449 && left_wrist_y<=400){
        Song.setVolume(0.2);
        document.getElementById("volume").innerHTML="Volume:0.2";
    }
    else if(left_wrist_y>=399 && left_wrist_y<=350){
        Song.setVolume(0.3);
        document.getElementById("volume").innerHTML="Volume:0.3";
    }
    else if(left_wrist_y>=349 && left_wrist_y<=300){
        Song.setVolume(0.4);
        document.getElementById("volume").innerHTML="Volume:0.4";
    }
    else if(left_wrist_y>=299 && left_wrist_y<=250){
        Song.setVolume(0.5);
        document.getElementById("volume").innerHTML="Volume:0.5";
    }
    else if(left_wrist_y>=249 && left_wrist_y<=200){
        Song.setVolume(0.6);
        document.getElementById("volume").innerHTML="Volume:0.6";
    }
    else if(left_wrist_y>=199 && left_wrist_y<=150){
        Song.setVolume(0.7);
        document.getElementById("volume").innerHTML="Volume:0.7";
    }
    else if(left_wrist_y>=149 && left_wrist_y<=100){
        Song.setVolume(0.8);
        document.getElementById("volume").innerHTML="Volume:0.8";
    }
    else if(left_wrist_y>=99 && left_wrist_y<=50){
        Song.setVolume(0.9);
        document.getElementById("volume").innerHTML="Volume:0.9";
    }
    else if(left_wrist_y>=49 && left_wrist_y<=0){
        Song.setVolume(1);
        document.getElementById("volume").innerHTML="Volume:1";
    }
}
}