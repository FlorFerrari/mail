/* let img;
let circleDiameter = 100;
let positionX = 130;
let positionY = -220;
let activado = false;

let angle = 90; // Ángulo inicial
let radius = 100; // Radio de la órbita

let centerX, centerY; // Centro de la órbita

let x = Math.round(Math.random()); 

console.log(x)

function preload() {
  cromo = loadImage("poema.jpg");
  dibujo1 = loadImage("dibujos/dibujo1.jpeg");
  dibujo2 = loadImage("dibujos/dibujo2.jpeg");
  dibujo3 = loadImage("dibujos/dibujo3.jpeg");
  dibujo4 = loadImage("dibujos/dibujo4.jpeg");
  dibujo5 = loadImage("dibujos/dibujo5.jpeg");
  dibujo6 = loadImage("dibujos/dibujo6.jpeg");
  dibujo7 = loadImage("dibujos/dibujo7.jpeg");
  dibujo8 = loadImage("dibujos/dibujo8.jpeg");
  dibujo9 = loadImage("dibujos/dibujo9.jpeg");
  
}

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  centerX = -200;
  centerY = 100;

  

  if (x == 1){
  vid = createVideo(['video_esfera2.mp4']);  
    vid.play()
    vid.loop();   
    vid.hide();
  } 
  
}

//se muestra esfera 1 o esfera 2?
 if (x == 0) { 

//esfera 1
function draw() {
  background(0);
  
  pointLight(255, 100, 200, -200, 0, 0);
  pointLight(170, 255, 0, 200, 0, 0);
  specularMaterial(0);
  noStroke();
  orbitControl();
  
  //----------------------------piso madera
  push();
  translate(0, 200, 0);
  rotateX(90);
  noStroke();
  texture(dibujo5);
  plane(2000);
  pop();

  //plano
  push();
  translate ( 500, -300, 100)
  ambientLight(255);
  texture(dibujo1);
  plane(800, 900);
  pop();

   //cubo2
   push();
   translate ( -800, -200, -400)
   ambientLight(255);
   texture(dibujo2);
   box(400);
   pop();

   //cubo3
   push();
   translate ( 500, -200, 1200)
   ambientLight(255);
   texture(dibujo3);
   box(500);
   pop();

   push();
   translate ( 100, -100, -900)
   ambientLight(255);
   texture(dibujo5);
   box(400);
   pop();

   push();
   translate ( -900, -500, 800)
   ambientLight(255);
   texture(dibujo7);
   rotateZ(frameCount * 1);
   sphere(200);
   pop();

   push();
   ambientLight(255);
   rotateY(frameCount * 1);
   texture(dibujo9);
   sphere(100);
   pop();

   


  angle += 50;
}

} else {
  function draw() {

    background(20);
    
    pointLight(255, 100, 200, -200, 0, 0);
    pointLight(170, 255, 0, 200, 0, 0);
    specularMaterial(0);
    noStroke();
    orbitControl();
  
    //ESFERA
    push();
    ambientLight(255);
    texture(vid);
    box(1000);
    pop();
  
    angle += 50;
  }

}

 */


function preload() {
  
  dibujo1 = loadImage("dibujos/dibujo1.jpeg");
  dibujo2 = loadImage("dibujos/dibujo2.jpeg");
  dibujo3 = loadImage("dibujos/dibujo3.jpeg");
  dibujo4 = loadImage("dibujos/dibujo4.jpeg");
  dibujo5 = loadImage("dibujos/dibujo5.jpeg");
  dibujo6 = loadImage("dibujos/dibujo6.jpeg");
  dibujo7 = loadImage("dibujos/dibujo7.jpeg");
  dibujo8 = loadImage("dibujos/dibujo8.jpeg");
  dibujo9 = loadImage("dibujos/dibujo9.jpeg");
  
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(20);
    
    pointLight(255, 100, 200, -200, 0, 0);
    pointLight(170, 255, 0, 200, 0, 0);
    specularMaterial(0);
    noStroke();
    orbitControl();
  
    //ESFERA
    push();
    ambientLight(255);
    texture(dibujo1);
    box(500);
    pop();
}