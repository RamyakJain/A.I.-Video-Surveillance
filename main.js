video = "";
object = [];
status
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(495,300);
    canvas.center();
    canvas.position(400, 250);
}
function draw(){
    image(video,0, 0, 495 ,380);
    if (status != ""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++){
            if(object.length == 1){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Object Detected Are: " + object.length;
            }
            else{
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Detected Are: " + object.length;
            }
            r= random(255);
            g = random(255);
            b = random(255);
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label +" "+ percent + "%", object[i].x + 5, object[i].y + 15);
            noFill();
            r2= random(255);
            g2 = random(255);
            b2 = random(255);
            stroke(r2, g2, b2);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
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
    status = true;
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
}