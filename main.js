narizX= 0;
narizY= 0;
function preload(){
zorrito= loadImage("https://i.postimg.cc/d133f4mc/filtrozorro.png");
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

function modelLoaded(){
    console.log('PoseNet está inicializado');
}

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
            narizX= results[0].pose.nose.x-50;
            narizY= results[0].pose.nose.y-100;

        }
    }

}


function draw(){
image(video, 25, 25, 250, 250);
//stroke("#d11171");
//fill("#648abd");
//circle(narizX,narizY,20)
image(zorrito,narizX,narizY,100,100);
}
function take_snapshot(){
    save("foto!.png");
}