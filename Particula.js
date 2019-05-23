class Particula{
  constructor(){
    this.posicion  = createVector();
    this.velocidad = createVector();
    this.aceleracion= createVector();
    this.radio=10;
    this.color=0;
  }
  move(){
    this.velocidad.add(this.aceleracion);
    this.posicion.add(this.velocidad);
  }
  mostrar(){
    fill(this.color);
    circle(this.posicion.x,this.posicion.y,this.radio);
  }
}
