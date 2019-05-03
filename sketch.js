let sistema_de_particulas;
function setup() {
  createCanvas(400, 400);
  sistema_de_particulas = new SistemaDeParticulas();
}

function draw() {
  background(220);
  sistema_de_particulas.mover();
}