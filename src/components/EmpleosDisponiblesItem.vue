<template>
    <article class="resultados">
	    <div class="row">
	        <div class="col-4 col-sm-4 col-md-2">
	        	<img class="img-fluid" :src="imageItem" alt=""/>
	        </div>
	        <div class="col-8 col-sm-8 col-md-7">
	        	<ul class="list-inline">
	        		<li class="list-inline-item"><a href="#" alt=""><h3>{{ item.empleo }}</h3></a></li>
	        		<li class="list-inline-item"><h4>{{ item.fecha }}</h4></li>
	        	</ul>
	        	<p class="salario"><strong>Salario:</strong> {{ item.signo }}{{ salario }} {{ item.moneda }} al {{ item.unidad_temporal }}</p>
	        </div>
	        <div class="col-12 col-sm-12 col-md-3">
	        	<ul class="list-unstyled">
                    <li>
                        <button type="button" class="btn btn-success ventana-postulado" url="#">Postularme</button>
                    </li>
			        <li>
		        		<table cellpadding="0" cellspacing="0">
		        			<tr>
		        				<td rowspan="2">
		        					<img src="../assets/images/ubicacion.png" alt=""/>
		        				</td>
		        				<td class="data">{{ item.region.estado }}</td>
		        			</tr>
		        			<tr>
		        		        <td class="data">{{ item.region.ciudad }}</td>
		        			</tr>
		        		</table>
			        </li>
			    </ul>
	        </div>
	    </div>
	</article>
</template>

<script>
import { number_format } from "@/shared/lib"
export default {
    name: "EmpleosDisponiblesItem",
    props: {
        item: Object
    },
    computed: {
		imageItem: {
			get() {
				return require(`@/assets/images/logos/${this.item.imagen}`);
			}
		},
        salario: {
            get() {
                return number_format(this.item.salario, 2);
            }
        }
    }
}
</script>

<style scoped>
ul {
    margin-bottom: 7px;
}
</style>