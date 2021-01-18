video = "";
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(480,300);
    canvas.center();
    canvas.position(400, 250);
}
function draw(){
    image(video,0, 0, 480 ,380);
}
function start(){
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD Is Initialized");
    video.loop();
    video.speed(1);
    video.volume(0);
}