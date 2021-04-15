

let parametri = {

  resolution: 15,
  scale: 1,
  shape: "ellipse",
  visualization: "heightmap",


  /*

  coloreSfondo: 150, // Slider: inserire valore all'avvio dello sketch
  diametroEllisse: 150,

  mostraQuadrato: false, // Spunta: inserire stato iniziale
  xQuadrato: 50,
  coloreQuadrato: [ 0, 128, 255 ], // Color Picker: Inserire array RGB

  testo: "cambiami", // Inserimento testo: inserire valore iniziale
  yTesto: 50, // Inserimento testo: non aggiungere nulla
  dimensioniTesto: 32,

  weird: function(){     // Pulsante chiama funzione: scrivere la funzione che si intende richiamare
    weirdStroke = 30+random(80);
    weirdColor = [random(255),random(255),random(255)];
  }*/

};




// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function(){

  var gui = new dat.GUI();

  var risolusci = gui.add(parametri, 'resolution', 5, 25); // EVENTO: Viene chiamata una funzione al variare del parametro
    risolusci.onFinishChange(function() {  // La funzione viene chiamata DOPO aver cambiato il valore
    iniziaVideo();
  });


   gui.add(parametri, 'scale', .1, 1.5);
   gui.add(parametri, 'shape', ['rect', 'ellipse'] );
   gui.add(parametri, 'visualization', ['heightmap', 'mesh'] );





  /*

  var gui = new dat.GUI();
  gui.add(parametri, 'coloreSfondo', 0, 255); // Slider: inserire valore inferiore e maggiore

  var evento1 = gui.add(parametri, 'diametroEllisse', 50, 500); // EVENTO: Viene chiamata una funzione al variare del parametro

  evento1.onChange(function() {  // La funzione viene chiamata MENTRE si cambia il valore
    coloreEllisse=random(255);
  });

    evento1.onFinishChange(function() {  // La funzione viene chiamata DOPO aver cambiato il valore
    alert("BRAVO, hai vinto un MAPPAMONDO!");
  });


  var f1 = gui.addFolder('Quadrato'); // Crea una tendina che nasconde i prossimi parametri
  f1.add(parametri, 'mostraQuadrato' ); // Spunta: non inserire nulla
  f1.add(parametri, 'xQuadrato', 0, 350);
  f1.addColor(parametri, 'coloreQuadrato'); // Color Picker: non inserire nulla

  var f2 = gui.addFolder('Testo');
  f2.add(parametri, 'testo', [ 'Terrazzo', 'Sgabello', 'Formaggio', 'Cannuccia'] ); // Tendina: inserire array di valori
  f2.add(parametri, 'yTesto', 50, 400 );
  f2.add(parametri, 'dimensioniTesto', 16, 80);

  gui.add(parametri, 'weird'); // Pulsante chiama funzione: non aggiungere nulla*/
}





var video;
var u,v;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  iniziaVideo();

}

function draw() {
  background(40);

  rotateX(map(mouseY, 0, height, -PI/9, PI/9));
  rotateY(map(mouseX, 0, width, PI/4, -PI/4));
  translate(-video.width*vScale/2, -video.height*vScale/2, -500);


  video.loadPixels();


/*
  for (var y = 2; y < video.height; y++) {
    for (var x = 2; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, 500);
      noStroke();
      fill(20, bright*2, 120);
      rectMode(CENTER);

      translate (0, 0, +w);

if ( parametri.shape == "ellipse"){
  ellipse(x * vScale, y * vScale, vScale*parametri.scale, vScale*parametri.scale);
} else {
  rect(x * vScale, y * vScale, vScale*parametri.scale, vScale*parametri.scale);
}
      translate (0, 0, -w);
    }
  }*/


  for (let x = 2; x < video.width; x++) {

    if( parametri.visualization == "mesh"){
      beginShape(TRIANGLE_STRIP);
    }

      stroke(255);

      for (let y = 2; y < video.height; y++) {
          var w = map(bright(video, 0, x, y), 0, 255, 0, 500);
          noFill();

    if( parametri.visualization == "mesh"){

          var w2 = map(bright(video, 0, x+1, y), 0, 255, 0, 500);

          vertex(x* vScale, y*vScale, w, u, v);
          vertex((x+1) * vScale , y*vScale, w2, u, v);
          u +=vScale;
        } else {
          translate (0, 0, +w);

          if ( parametri.shape == "ellipse"){
          ellipse(x * vScale, y * vScale, vScale*parametri.scale, vScale*parametri.scale);
               } else {
                   rect(x * vScale, y * vScale, vScale*parametri.scale, vScale*parametri.scale);
                  }
          translate (0, 0, -w);
        }
      }

    if( parametri.visualization == "mesh"){
      u = 0;
      v +=vScale;
      endShape();
    }
  }







}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function iniziaVideo(){
  vScale = parametri.resolution;
  video = createCapture(VIDEO);
  video.size(width / vScale /1.3, height / vScale);
  video.hide();
}

function bright(video, mod, x, y){
  var index = (video.width - x + 1 + ((y+mod) * video.width)) * 4;
  var r = video.pixels[index + 0];
  var g = video.pixels[index + 1];
  var b = video.pixels[index + 2];
  var bright = (r + g + b) / 3;

  return bright;
}
