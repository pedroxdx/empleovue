import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    empleosDisponibles: [
      {
        imagen: "mcdonald.jpg",
        empleo: "Mesero",
        fecha: "2017-08-17 16:32:42",
        salario: 4000,
        descripcion: "",
        signo: "$",
        moneda: "MXN",
        unidad_temporal: "Mes",
        region: {
          estado: "Yucatán",
          ciudad: "Mérida"
        }
      },
      {
        imagen: "caesars.png",
        empleo: "Cocinero",
        fecha: "2017-08-15 13:12:18",
        salario: 12500,
        descripcion:
          "Cocinero especializado en la preparación de pescado y productos marítimos.",
        signo: "$",
        moneda: "MXN",
        unidad_temporal: "Mes",
        region: {
          estado: "Yucatán",
          ciudad: "Mérida"
        }
      }
    ]
  },
  getters: {
    getEmpleosDisponibles: state => {
      return state.empleosDisponibles;
    }
  },
  mutations: {},
  actions: {}
});
