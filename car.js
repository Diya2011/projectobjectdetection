var img=""
var status=""
var objects=[]
function preload(){
    img=loadImage("car.jpeg")
}
function setup(){
    canvas=createCanvas(640,480)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelloaded)
}

function modelloaded(){
    console.log("modelloaded")
    status=true
    objectDetector.detect(img,gotresult)
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects=results
    }
}
function draw(){
    image(img,0,0,640,480)
    if (status != "") {
        fill("purple")
        for (let index =0; index < objects.length; index++) 
        {
    percent=(objects[index].confidence*100).toFixed(1)+"%"
    if (percent>90) {
        document.getElementById("bigobject").innerHTML="big objects are detected"
    }
    else{
        document.getElementById("smallobject").innerHTML="small objects are detected"
 
    }
        text(objects[index].label+percent,objects[index].x,objects[index].y)  
        noFill()
        stroke("purple")    
        rect(objects[index].x,objects[index].y, objects[index].width, objects[index].height)

    
    
    
    
    
    
    
    }    }}