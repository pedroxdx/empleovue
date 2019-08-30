<template>
    <article class="busqueda">
    	<form id="busqueda-form" @submit.prevent="submit" method="post">
    		<div class="form-group">
				<label class="control-label" for="busquedaempleo-area">Vacante</label>						    
                <div class="form-inline">
                    <div class="custom-control custom-checkbox my-1">
                        <input 
                            type="checkbox"
                            v-model="formEmpleoBuscador.selected_area" 
                            class="custom-control-input" 
                            value="1"
                            id="selectedArea">
                        <label class="custom-control-label" for="selectedArea"></label>
                    </div>		    
                    <select
                        v-model="formEmpleoBuscador.area" 
                        class="custom-select my-1">
                        <option
                            v-for="area of getFormEmpleoBuscadorArea"
                            :key="area.id" 
                            :value="area.id">{{ area.nombre }}</option>
                    </select>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-disponibilidad">Disponibilidad</label>						    
				<div class="form-inline">
                    <div class="custom-control custom-checkbox my-1">
                        <input 
                            type="checkbox"
                            v-model="formEmpleoBuscador.selected_disponibilidad" 
                            class="custom-control-input" 
                            value="1"
                            id="selectedDisponibilidad">
                        <label class="custom-control-label" for="selectedDisponibilidad"></label>
                    </div>
                    <select
                        v-model="formEmpleoBuscador.disponibilidad" 
                        class="custom-select my-1">
                        <option
                            v-for="disponibilidad of getFormEmpleoBuscadorDisponibilidad"
                            :key="disponibilidad.id" 
                            :value="disponibilidad.id">{{ disponibilidad.nombre }}</option>
                    </select>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-salario">Salario</label>							
                <div class="form-inline">
				    <div class="custom-control custom-checkbox my-1">
                        <input 
                            type="checkbox" 
                            v-model="formEmpleoBuscador.selected_salario" 
                            class="custom-control-input" 
                            value="1"
                            id="selectedSalario">
                        <label class="custom-control-label" for="selectedSalario"></label>
                    </div>								
                    <select
                        v-model="formEmpleoBuscador.salario" 
                        class="custom-select my-1 mr-2">
                        <option
                            v-for="salario of getFormEmpleoBuscadorSalario" 
                            :key="salario.id"
                            :value="salario.id">{{ salario.nombre }}</option>
                    </select>														    				
                    <select 
                        v-model="formEmpleoBuscador.moneda"
                        class="custom-select my-1 mr-2">
                        <option 
                            v-for="moneda of getFormEmpleoBuscadorMoneda"
                            :key="moneda.id"
                            :value="moneda.id">{{ moneda.nombre }}</option>
                    </select>								
                    <select 
                        v-model="formEmpleoBuscador.utemporal"
                        class="custom-select my-1 mr-2">
                        <option
                            v-for="utemporal of getFormEmpleoBuscadorUnidadTemporal" 
                            :key="utemporal.id"
                            :value="utemporal.id">{{ utemporal.nombre }}</option>
                    </select>							
                </div>
				<div class="form-inline">
					<label class="control-label" for="busquedaempleo-salario_aproximado">Salario Aproximado</label>								
                    <div class="custom-control custom-checkbox my-1 ml-2">
                        <input 
                            type="checkbox" 
                            v-model="formEmpleoBuscador.selected_salario_aprox"
                            class="custom-control-input" 
                            value="1"
                            id="selectedSalarioAprox">
                        <label class="custom-control-label" for="selectedSalarioAprox"></label>
                    </div>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-estado">Estado</label>						    
				<div class="form-inline">
					<div class="custom-control custom-checkbox my-1">
                        <input 
                            type="checkbox" 
                            v-model="formEmpleoBuscador.selected_estado"
                            class="custom-control-input" 
                            value="1"
                            id="selectedEstado">
                        <label class="custom-control-label" for="selectedEstado"></label>
                    </div>						    	
					<select 
                        v-model="formEmpleoBuscador.estado"
                        class="custom-select estado-mx">
                        <option 
                            v-for="estado of getFormEmpleoBuscadorEstado"
                            :key="estado.id"
                            :value="estado.id">{{ estado.nombre }}</option>
                    </select>							
                </div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-sm-6 col-md-6 avanzada">
				    <!--<a href="#">Busq. Avanzada</a>-->
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6">
				    <button type="submit" class="btn btn-busqueda">Buscar</button>
				</div>
			</div>
		</form>
    </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "FormEmpleoBuscador",
    data() {
        return {
            formEmpleoBuscador: {
                selected_area: false,
                area: 1,
                selected_disponibilidad: false,
                disponibilidad: 1,
                selected_salario: false,
                salario: 1,
                moneda: 1,
                utemporal: 3,
                selected_salario_aprox: false,
                selected_estado: false,
                estado: 31
            }
        }
    },
    created() {
        this.$store.dispatch("createFormEmpleoBuscador");
    },
    computed: {
        ...mapGetters([
                        "getFormEmpleoBuscadorArea",
                        "getFormEmpleoBuscadorSalario",
                        "getFormEmpleoBuscadorDisponibilidad",
                        "getFormEmpleoBuscadorMoneda",
                        "getFormEmpleoBuscadorUnidadTemporal",
                        "getFormEmpleoBuscadorEstado"
                    ])
    },
    methods: {
        submit() {
            this.$store.dispatch("searchEmpleosDisponibles", this.formEmpleoBuscador);
        }
    }
}
</script>

<style scoped>

article.busqueda {
    font-family: sans-serif, Arial, Helvetica;
    color: #FFF;
	background: rgba(283, 83, 35, 1);
	padding: 15px 20px;
	/*width: 350px;*/
	border: 2px solid #e44817;
}

@media (max-width:425px) {
	
    article.busqueda {
        padding: 10px;
    }

}

article.busqueda .control-label {
	font-weight: bold;
}

article.busqueda .custom-select {
	font-size: 14px;
}

article.busqueda .row {
	text-align: center;
}

article.busqueda .row .avanzada {
	padding-top: 5px;
}

article.busqueda .row .avanzada a {
	color: #fff;
	text-decoration: underline;
}

</style>