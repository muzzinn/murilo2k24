let posicaoXbolinha=300
let posicaoYbolinha=200
let diametro=50
function setup() {
  createCanvas(600, 400);
  background (222, 222, 222)
   cor=color (random(0,255),random(0,255),random(0,255))
  background (140,255,255)
}
           function draw(){
             
    circle
(posicaoXbolinha,posicaoYbolinha,diametro)
          fill(cor)
      if(mouseIsPressed){
      cor=color(random(0, 255), random(0,255),random(0,255))
      }
          
              
}