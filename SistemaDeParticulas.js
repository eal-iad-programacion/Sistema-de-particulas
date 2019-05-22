class SistemaDeParticulas{
  constructor(cantidad_de_particulas){
    this.cantidad_de_particulas = cantidad_de_particulas;
    this.particulas=[];
    for(let i=0; i<this.cantidad_de_particulas;i++){
      this.particulas.push(new Particula());
    }
  }
  aplicarFuerza(fuerza){}
  //cambio en la rama1
  mover(){}
}
