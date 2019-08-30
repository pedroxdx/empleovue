import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {
      url: process.env.VUE_APP_API_URL,
      httpHeaders: {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic cGVkcm94ZHhAZ21haWwuY29tOnJlYWxtYWRyaWQxMA=="
        }
      }
    },
    formEmpleoBuscador: {
      area: [],
      salario: [],
      disponibilidad: [],
      moneda: [],
      utemporal: [],
      estado: []
    },
    empleosDisponibles: []
  },
  getters: {
    getEmpleosDisponibles: state => {
      return state.empleosDisponibles;
    },
    getFormEmpleoBuscadorArea: state => {
      return state.formEmpleoBuscador.area;
    },
    getFormEmpleoBuscadorSalario: state => {
      return state.formEmpleoBuscador.salario;
    },
    getFormEmpleoBuscadorDisponibilidad: state => {
      return state.formEmpleoBuscador.disponibilidad;
    },
    getFormEmpleoBuscadorMoneda: state => {
      return state.formEmpleoBuscador.moneda;
    },
    getFormEmpleoBuscadorUnidadTemporal: state => {
      return state.formEmpleoBuscador.utemporal;
    },
    getFormEmpleoBuscadorEstado: state => {
      return state.formEmpleoBuscador.estado;
    }
  },
  mutations: {
    CREATE_EMPLEOS_DISPONIBLES: (state, payload) => {
      state.empleosDisponibles = payload;
    },
    CREATE_FORM_EMPLEO_BUSCADOR: (state, payload) => {
      state.formEmpleoBuscador = payload;
    }
  },
  actions: {
    async createFormEmpleoBuscador({ dispatch, commit }) {
      var formEmpleo = {};
      if (localStorage.getItem("formEmpleoBuscador") === null) {
        console.log("API");
        formEmpleo = await dispatch("getFormEmpleoBuscadorAPI");
        localStorage.setItem("formEmpleoBuscador", JSON.stringify(formEmpleo));
      } else {
        console.log("DB");
        formEmpleo = JSON.parse(localStorage.getItem("formEmpleoBuscador"));
      }
      commit("CREATE_FORM_EMPLEO_BUSCADOR", formEmpleo);
      return formEmpleo;
    },
    async getFormEmpleoBuscadorAPI({ state }) {
      const response = await axios.get(
        `${state.api.url}/api/form-empleo-buscador`,
        state.api.httpHeaders
      );
      return response.data;
    },
    async getEmpleosDisponiblesAPI({ commit, state }) {
      const response = await axios.get(
        `${state.api.url}/api/empleos`,
        state.api.httpHeaders
      );
      commit("CREATE_EMPLEOS_DISPONIBLES", response.data);
      return response.data;
    },
    async searchEmpleosDisponibles({ commit, state }, payload) {
      const response = await axios.post(
        `${state.api.url}/api/buscar-empleo`,
        { form: payload },
        state.api.httpHeaders
      );
      commit("CREATE_EMPLEOS_DISPONIBLES", response.data);
      return response.data;
    }
  }
});
