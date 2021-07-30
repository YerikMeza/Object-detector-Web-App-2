img = "";
status = "";

function preload() {
   img = loadImage("Desk.jpg");
}

function setup() {
    canvas = createCanvas(650, 500);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) 
    {
      console.error(error);
    }
    else 
    {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 650, 500);

    
}