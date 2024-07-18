export default class CL_Persona{
    constructor(nombre, sexo){
        this.nombre = nombre;
        this.sexo = sexo;
        this.contHombre = 0;
        this.contMujer = 0;
    }

    set nombre(e){
        this._nombre = +e;
    }

    get nombre(){
        return this._nombre;
    }
    
    set sexo(e){
        this._sexo = e;
    }

    get sexo(){
        return this._sexo;
    }

    procesarPersona(e) {
        if (e.sexo == "F") {
          this.contMujer++;
        } else {
          this.contHombre++;
        }
    }

    calcularPorcentajeMujeres() {
        const total = this.contMujer + this.contHombre;
        return (this.contMujer / total) * 100;
    }
    
      compararCantidad() {
        if (this.contMujer > this.contHombre) {
          return "Hay más mujeres.";
        } else if (this.contHombre > this.contMujer) {
          return "Hay más hombres.";
        } else {
          return "Hay igual cantidad de hombres y mujeres.";
        }
    }
}