// -
// 10PRINT - labirinti3DKinetic 0.1 by Luigi Marchionni
// 2018 © Luigi Marchionni, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm
// github.com/dsii-2019-unirsm — github.com/fupete
// Educational purposes, MIT License, 2019, San Marino
// —
// Credits/Thanks to:
// Daniele Tabellini
// Paolo Petrangolini
// —


let easycam; // telecamera peasycam

var  cella;
var  altezza;
var  colonne;
var  righe;
var  proSpazio;

var mappa = [];
let _text;
var c;

var ds;

var spostamento = 0;

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
colorMode(HSB);



let density = displayDensity();
pixelDensity(density);

labirinto();



}




function draw() {


background(c-30, 50, 100);



 translate(-windowWidth/2-map(mouseX, 0, width ,-80, 80) , -120, 250);
 rotateX(PI/3-map(mouseY, 0, height ,0, PI/6));
 //rotateZ(-map(mouseX, 0, width ,-PI/24, PI/24));
 translate(spostamento, 0, 0);

 spostamento += .8;

 for (var x=0; x<=colonne; x++){
    for (var y=0; y<=righe; y++){

    if( mappa[x][y] >= 0 && mappa[x][y] < ds){
      carattereSX(c, x, y, altezza);
        }
    else if( mappa[x][y] >= ds && mappa[x][y] < 2){
        carattereDX(c, x, y, altezza);
      } else if ( mappa[x][y] >= 2){
        spazio(c, x, y, altezza);
      }
    }
  }

  translate(1100-spostamento, 200, altezza+30);
  texture(_text);
//  rotateY(map(mouseX, 0,width,0,3));
  noStroke();
  plane(window.innerWidth - 4, window.innerHeight - 4);


   fill(50);
  if (spostamento*2 >= cella){

    for (var x=colonne; x>1; x--){
      for (var y=righe; y>=0; y--){
        var X=x-1;
          mappa[x][y]=mappa[X][y];

       }
     }

    for (var y=0; y<righe; y++){
         mappa[0][y]=random(2+random(1));
         mappa[1][y]=random(2+random(1));
         mappa[2][y]=random(2+random(1));

    }

     spostamento = 0;
      }




}


function carattereDX(color, x, y, cella) {


  noStroke();
  // BASE
  fill(color, 80, 50-y*4);
  beginShape();
  vertex(x*cella, y*cella, 0);
  vertex((x+1)*cella, y*cella, 0);
  vertex((x+1)*cella, (y+1)*cella, 0);
  vertex(x*cella, (y+1)*cella, 0);
  endShape();


  // stroke(100);
  // CIMA
  fill(color, 80, 90-y*4);
  beginShape();
  vertex(x*cella+(cella*5/6), y*cella, altezza);
  vertex((x+1)*cella, y*cella, altezza);
  vertex((x+1)*cella, y*cella+(cella/6), altezza);
  vertex(x*cella+(cella/6), (y+1)*cella, altezza);
  vertex(x*cella, (y+1)*cella, altezza);
  vertex(x*cella, y*cella+(cella*5/6), altezza);
  endShape();

  // FACCIA 1
  fill(color, 80, 70-y*4);
  beginShape();
  vertex(x*cella, y*cella+(cella*5/6), altezza);
  vertex(x*cella+(cella*5/6), y*cella, altezza);
  vertex(x*cella+(cella*5/6), y*cella, 0);
  vertex(x*cella, y*cella+(cella*5/6), 0);
  endShape();

  // FACCIA 6
  fill(color, 80, 75-y*4);
  beginShape();
  vertex(x*cella+(cella/6), (y+1)*cella, altezza);
  vertex((x+1)*cella, y*cella+(cella/6), altezza);
  vertex((x+1)*cella, y*cella+(cella/6), 0);
  vertex(x*cella+(cella/6), (y+1)*cella, 0);
  endShape();

  // FACCIA 2
  fill(color, 80, 70-y*4);
  beginShape();
  vertex(x*cella+(cella*5/6), y*cella, altezza);
  vertex((x+1)*cella, y*cella, altezza);
  vertex((x+1)*cella, y*cella, 0);
  vertex(x*cella+(cella*5/6), y*cella, 0);
  endShape();


  // FACCIA 5
  fill(color, 80, 65-y*4);
  beginShape();
  vertex((x+1)*cella, y*cella+(cella/6), altezza);
  vertex((x+1)*cella, y*cella, altezza);
  vertex((x+1)*cella, y*cella, 0);
  vertex((x+1)*cella, y*cella+(cella/6), 0);
  endShape();


  // FACCIA 5
  fill(color, 80, 80-y*4);
  beginShape();
  vertex(x*cella, (y+1)*cella, altezza);
  vertex(x*cella+(cella/6), (y+1)*cella, altezza);
  vertex(x*cella+(cella/6), (y+1)*cella, 0);
  vertex(x*cella, (y+1)*cella, 0);
  endShape();


  // FACCIA 6
  fill(color, 80, 65-y*4);
  beginShape();
  vertex(x*cella, (y+1)*cella, altezza);
  vertex(x*cella, y*cella+(cella*5/6), altezza);
  vertex(x*cella, y*cella+(cella*5/6), 0);
  vertex(x*cella, (y+1)*cella, 0);
  endShape();
}



function carattereSX(color, x, y, cella) {

  noStroke();
  // BASE
  fill(color, 80, 50-y*4);
  beginShape();
  vertex(x*cella, y*cella, 0);
  vertex((x+1)*cella, y*cella, 0);
  vertex((x+1)*cella, (y+1)*cella, 0);
  vertex(x*cella, (y+1)*cella, 0);
  endShape();

  // stroke(100);
  // CIMA
  fill(color, 80, 90-y*4);
  beginShape();
  vertex(x*cella, y*cella, altezza);
  vertex(x*cella+(cella/6), y*cella, altezza);
  vertex((x+1)*cella, y*cella+(cella*5/6), altezza);
  vertex((x+1)*cella, (y+1)*cella, altezza);
  vertex(x*cella+(cella*5/6), (y+1)*cella, altezza);
  vertex(x*cella, y*cella+(cella/6), altezza);
  endShape();

  // FACCIA 1
  fill(color, 80, 70-y*4);
  beginShape();
  vertex(x*cella+(cella*5/6), (y+1)*cella, altezza);
  vertex(x*cella, y*cella+(cella/6), altezza);
  vertex(x*cella, y*cella+(cella/6), 0);
  vertex(x*cella+(cella*5/6), (y+1)*cella, 0);
  endShape();

  // FACCIA 4
  fill(color, 80, 65-y*4);
  beginShape();
  vertex(x*cella+(cella/6), y*cella, altezza);
  vertex((x+1)*cella, y*cella+(cella*5/6), altezza);
  vertex((x+1)*cella, y*cella+(cella*5/6), 0);
  vertex(x*cella+(cella/6), y*cella, 0);
  endShape();

  // FACCIA 2
  fill(color, 80, 70-y*4);
  beginShape();
  vertex(x*cella, y*cella, altezza);
  vertex(x*cella, y*cella+(cella/6), altezza);
  vertex(x*cella, y*cella+(cella/6), 0);
  vertex(x*cella, y*cella, 0);
  endShape();

  // FACCIA 3
  fill(color, 80, 65-y*4);
  beginShape();
  vertex(x*cella, y*cella, altezza);
  vertex(x*cella+(cella/6), y*cella, altezza);
  vertex(x*cella+(cella/6), y*cella, 0);
  vertex(x*cella, y*cella, 0);
  endShape();


  // FACCIA 5
  fill(color, 80, 65-y*4);
  beginShape();
  vertex((x+1)*cella, y*cella+(cella*5/6), altezza);
  vertex((x+1)*cella, (y+1)*cella, altezza);
  vertex((x+1)*cella, (y+1)*cella, 0);
  vertex((x+1)*cella, y*cella+(cella*5/6), 0);
  endShape();


  // FACCIA 6
  fill(color, 80, 80-y*4);
  beginShape();
  vertex((x+1)*cella, (y+1)*cella, altezza);
  vertex(x*cella+(cella*5/6), (y+1)*cella, altezza);
  vertex(x*cella+(cella*5/6), (y+1)*cella, 0);
  vertex((x+1)*cella, (y+1)*cella, 0);
  endShape();
}

function spazio(color, x, y, cella) {

  noStroke();
  // BASE
  fill(color, 80, 50-y*4);
  beginShape();
  vertex(x*cella, y*cella, 0);
  vertex((x+1)*cella, y*cella, 0);
  vertex((x+1)*cella, (y+1)*cella, 0);
  vertex(x*cella, (y+1)*cella, 0);
  endShape();
}



function labirinto() {
  cella = 85+int(random(40));
   c = random(255);
  altezza = cella/2;

  colonne = int(1920/cella)*2;

  righe = int(1080/cella);
print(colonne+"x"+righe);
  for (var x=0; x<=colonne+10; x++){
    mappa[x] = [];
    for (var y=0; y<=righe+10; y++){
      mappa[x][y] = random(2+random(1));
      print(mappa[x][y]);
    }
  }

  ds = random(0.3, 1.7);

  _text = createGraphics(window.innerWidth + 24, window.innerHeight - 4);
  _text.textFont('courier');
  _text.textAlign(RIGHT);
  _text.textSize(50);
  _text.fill(240);
  _text.text('click anywhere or \nmove the mouse', width * 0.5, height * 0.5);



}


function mouseClicked() {

  labirinto();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
