song1 = "";
song2 = "";
leftWristx, rightWristx, leftWristy, rightWristy = 0;
scoreLeftWrist = 0;
 function preload() 
{ song1 = loadSound("music.mp3");
  song2 = loadSound("music2.mp3");
}

function setup() {
        canvas = createCanvas(600, 500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function draw() 
{ image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    song1_status = song1.isPlaying();
    if(scoreLeftWrist > 0.2){
    circle(leftWristx, leftWristy, 20);
    song2.stop(); 
    if(song1_status == false){
        song1.play();
        document.getElementById("song").innerHTML = "Playing - HarryPotter Theme Song";
    }
    }
}

function modelLoaded(){
    console.log("posenet is initi");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("leftx = "+ leftWristx + "rightx = "+ rightWristx + "lefty = "+ leftWristy + "righty = "+ rightWristy);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}