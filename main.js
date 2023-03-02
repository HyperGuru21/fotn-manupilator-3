leftWristx = 0;
rightWristx = 0;
difference = 0;


function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(1000 , 200);


    video = createCapture(VIDEO);
    video.size(550 , 550);


    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on('pose' , gotPoses);

}

function draw(){
    background('#ffff4d');
    textSize(difference);
    fill('teal');
    text("Zahi" , 100, 100);
}

function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){

    if (results.lenght > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
    
}