let img;
let bg;

function setup() {
 bg=loadImage('city.jpg',);
 createCanvas(400,400);
 img=loadImage('city.png');
}


function draw() {
 imageMode(CORNER);
 background(bg);
 
 
 translate(width/2,height/2);
 
 
 
 
 
 if(pmouseX===mouseX && pmouseY===mouseY){
 rotate(millis()/10000);

 }else{
 angle=atan2(height/2-mouseY,width/2-mouseX); 
 
 rotate(angle);
 }
 imageMode(CENTER);
 image(img,0,0,img.width/7,img.height/7);
 }
 
