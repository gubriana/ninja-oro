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
    reset_oro_total(){
        this.state.Oro_Total = 0;  
    },
    duplicar_oro_total() {
        this.state.Oro_Total = this.state.Oro_Total * 2;  
    },
    agregar_actividades(actividad) {
        this.state.actividades.push(actividad)
    }
  }