let angle = 90; // Ángulo inicial
let centerX, centerY; // Centro de la órbita

let x = Math.floor(Math.random() * 5) + 1;

console.log(x)



function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  centerX = -200;
  centerY = 100;
  
}

//se muestra esfera 1 o esfera 2?
 if (x == 1) { //--------------------------------------MUNDO 1

  function preload() {
    cromo = loadImage("img/mundo1/dibujo1.jpeg");
    dibujo1 = loadImage("img/mundo1/dibujo1.jpeg");
    dibujo2 = loadImage("img/mundo1/dibujo2.jpeg");
    dibujo3 = loadImage("img/mundo1/dibujo3.jpeg");
    dibujo4 = loadImage("img/mundo1/dibujo4.jpeg");
    dibujo5 = loadImage("img/mundo1/dibujo5.jpeg");
    dibujo6 = loadImage("img/mundo1/dibujo6.jpeg");
    dibujo7 = loadImage("img/mundo1/dibujo7.jpeg");
    dibujo8 = loadImage("img/mundo1/dibujo8.jpeg");
    dibujo9 = loadImage("img/mundo1/dibujo9.jpeg");
    
  }

  
function draw() {
  background(0);
  pointLight(255, 100, 200, -200, 0, 0);
  pointLight(170, 255, 0, 200, 0, 0);
  specularMaterial(0);
  noStroke();
  orbitControl();
  
  //----------piso 
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

} else if (x == 2){ //--------------------------------------MUNDO 2
  
function preload(){
  vid = createVideo(['img/mundo2/segundomundo.mp4']);  
  vid.play()
  vid.loop();   
  vid.hide();
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
    texture(vid);
    box(1000);
    pop();
  
    angle += 50;
  }

  } else if (x == 3){
    
    console.log("mundo3")
    let angle = 0;
let sonido;
let z3 = -110;
let z4 = -110;

let zDirection3 = 1;
let zDirection4 = 1;
let vid;
let sh;

function preload() {
  sonido = loadSound("img/mundo3/mundo3-audio.mp3");
  vid = createVideo("img/mundo3/luispazos.mp4");
  sh = createVideo("img/mundo3/mundo3-sh.mp4");
  vid.loop();
  sh.loop();
  sonido.loop();
}

function setup() {
  createCanvas(600, 600, WEBGL);
  vid.hide(); // Oculta los elementos DOM del video
  sh.hide(); // Oculta los elementos DOM del video
}

function draw() {
  background(20);
  noStroke();
  ambientLight(150);
  directionalLight(13, 135, 65, 0, 0, -1);

  z3 += 0.8 * zDirection3;
  z4 += 0.6 * zDirection4;

  if (z3 <= -150 || z3 >= -39) {
    zDirection3 *= -1;
  }
  if (z4 <= -210 || z4 >= -39) {
    zDirection4 *= -1;
  }

  // Cubo con textura de video
  push();
  pointLight(1, 134, 0, -300, 0, 0);
  translate(180, -160, z4);
  rotateX(angle * 0.63);
  texture(sh);
  box(62, 62, 62); // Cambiado de sphere a box
  pop();

  // Cubo con textura de video
  push();
  pointLight(0, 58, 90, -300, 0, 0);
  translate(-200, 0, z3);
  rotateX(angle * 0.63);
  texture(sh);
  box(42, 42, 42); // Cambiado de sphere a box
  pop();

  // Cubo con textura de video
  push();
  translate(-140, 140, z3);
  texture(sh);
  rotateZ(angle * 0.63);
  box(140, 140, 140); // Cambiado de sphere a box
  pop();

  // Plano con textura de video
  push();
  pointLight(0, 134, 0, 0, -300, 0);
  texture(vid);
  specularMaterial(20, 18, 77);
  translate(0, 0, -40);
  plane(width * 2, height * 2); // Se eliminó el tercer parámetro para evitar la repetición
  pop();
}

function mousePressed() {
  sonido.play(); // Inicia el sonido al hacer clic
}

  } else if (x == 4){
    let poe;
let audio1;
let audio2;


function preload() {
  audio1 = loadSound("img/mundo4/mundo4-voz.mp3");
  audio2 = loadSound("img/mundo4/mundo4-arpa.wav");
}

function setup() {
  createCanvas(600, 600);

  poe = createVideo("img/mundo4/mundo4-video.mp4");
  poe.hide();
  poe.loop();
  audio1.setVolume(1);
  audio2.setVolume(1);
  poe.volume(1);
}

function draw() {
  background(0);
  tint(255);
  image(poe, 0, 0);
  tint(255, 150, 0);
  image(poe, 0, 0, mouseX, height);

  if (mouseX > 550) {
    poe.pause();
  }
}

function keyPressed() {
  if (key == "a") {
    audio1.play();
  }

  if (key == "s") {
    audio2.play();
  }
}

document.oncontextmenu = function () {
  return false;
};


  } else {
    function preload(){
      vid = createVideo(['img/mundo5/mundo5.mp4']);  
      vid.play()
      vid.loop();   
      vid.hide();
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
        texture(vid);
        box(1000);
        pop();
      
        angle += 50;
      }
  }





