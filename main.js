var size;
function setup(){
    // For video
    video = createCapture(VIDEO);
    video.size(550, 500);
    // Creating Canvas
    canvas = createCanvas(450, 500);
    canvas.position(700, 150);
    // posenet
    poseNet = ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log("pose is here");
}

function gotPoses(results){
    console.log(results);
    if(results.length > 0){
        size = results[0].pose.leftWrist.x - results[0].pose.rightWrist.x;
        console.log(size);
    }
    else{
    }
}

function draw(){
    if(size != null){
        background("white");
        textSize(size);
        fill("black");
        text("me", 50, 250);
    }
}