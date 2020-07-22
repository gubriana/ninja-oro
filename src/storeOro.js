export default {
    state: {
        // setea en 0 el almacén
        Oro_Total: 0,
        actividades: []
    },
    // Suma nueva cantidad al almacén
    sumar_oro(puntajeOro) {
        this.state.Oro_Total = this.state.Oro_Total + puntajeOro;        
    },
    agregar_actividades(actividad) {
        this.state.actividades=[...this.state.actividades,actividad];
    },
    // borrar actividades
    reset_actividades() {
        this.state.actividades=[];
    },
    // extra
    reset_oro_total(){
        this.state.Oro_Total = 0;  
    }
  }