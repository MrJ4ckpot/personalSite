// -
// generatoreParole 0.1 by Luigi Marchionni
// 2018 © Luigi Marchionni, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm
// github.com/dsii-2019-unirsm — github.com/fupete
// Educational purposes, MIT License, 2019, San Marino
// —
// Credits/Thanks to:
// Daniele Tabellini
// Paolo Petrangolini
// —
//
// Help:
// [mouse drag] sposta la telecamera
// [mouse rotella] zoom
// —

let easycam; // telecamera peasycam
let _text;
let cubone = 16;
let cella = 4;
let mappa = [];

let scorriCol=0;
let conta=0;
let a, b, c;
let inc = .08;
let sfere = -1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let density = displayDensity();
  pixelDensity(density);
//frameRate(7);


  Dw.EasyCam.prototype.apply = function(n) {
      var o = this.cam;
      n = n || o.renderer,
      n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))

    };

  easycam = new Dw.EasyCam(_renderer, {
    distance: 150,
    center: [0,0,0]
  });

  easycam.setViewport([0, 0, windowWidth, windowHeight]);

  // start with an animated rotation
  easycam.setRotation(Dw.Rotation.create({
    angles_xyz: [0, -PI / 3, PI / 2]
  }), 4000);
  easycam.setDistance(230, 2500);



rectMode(CENTER);
  specularMaterial(200);
colorMode(RGB);
noStroke();

c=0;

}

function draw() {



    if (sfere == -1){
      background(10);
    } else {
      background(230);
    }

noStroke();
translate(-cubone*cella/2, -cubone*cella/2, -cubone*cella/2);

let locX = map(mouseX, 0, width, -cubone, cubone);
let locY = map(mouseX, 0, width, -cubone, cubone);
ambientLight(30);
pointLight(255, 255, 255, locX, locY, 100);

a= 0;




 for (let z=1; z<=cubone; z++){
   a = 0;
   b = 0;

   for (let y=1; y<=cubone; y++){
     a += inc;
     b = 0;
     for (let x=1; x<=cubone; x++){
         b += inc;

         translate(x*cella-cella/2, y*cella-cella/2, z*cella-cella/2);
         fill(100, noise(a-30, b-30, c-30)*255, noise(a, b, c)*255);

         let nebbia = map(noise(a+(z*inc), b+(z*inc), c+(z*inc)), .4, .8, 0, cella/2);

         if ( nebbia >= .6){
           if (sfere == -1){
             box(nebbia*2);
           } else {
             sphere(nebbia);
           }

         }
         translate(-x*cella+cella/2, -y*cella+cella/2, -z*cella+cella/2);
     }
   }

 }


  c += inc/15;
}







function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  sfere = sfere * -1;
}
