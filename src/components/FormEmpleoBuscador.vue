<template>
    <article class="busqueda">
    	<form id="busqueda-form" method="post">
    		<div class="form-group">
				<label class="control-label" for="busquedaempleo-area">Vacante</label>						    
                <div class="form-inline">
                    <div class="custom-control custom-checkbox my-1">
                        <input type="checkbox" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="customControlInline"></label>
                    </div>		    
                    <select class="custom-select my-1">
                        <option value="1">Chef</option>
                        <option value="22">Sous chef</option>
                        <option value="21">Chef ejecutivo</option>
                        <option value="20">Chef de cocina</option>
                        <option value="23">Jefe de Partida</option>
                        <option value="3">Ayudante de cocina</option>
                        <option value="2">Cocinero</option>
                        <option value="4">Barman</option>
                        <option value="5">Maitre</option>
                        <option value="6">Mesero</option>
                        <option value="9">Valet parking</option>
                        <option value="8">Hostess</option>
                        <option value="7">Sommelier</option>
                        <option value="10">Lavatraste</option>
                        <option value="11">Intendente</option>
                        <option value="15">Contador</option>
                        <option value="14">Capturista</option>
                        <option value="13">Secretaria</option>
                        <option value="12">Responsable de compras</option>
                        <option value="16">Gerente de sucursal</option>
                        <option value="17">Gerente regional</option>
                        <option value="18">Gerente general</option>
                        <option value="19">Pasantia no remunerada</option>
                    </select>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-disponibilidad">Disponibilidad</label>						    
				<div class="form-inline">
                    <div class="custom-control custom-checkbox my-1">
                        <input type="checkbox" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="customControlInline"></label>
                    </div>
                    <select class="custom-select my-1">
                        <option value="1">Tiempo Completo</option>
                        <option value="2">Medio Tiempo</option>
                        <option value="3">Temporal</option>
                    </select>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-salario">Salario</label>							
                <div class="form-inline">
				    <div class="custom-control custom-checkbox my-1">
                        <input type="checkbox" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="customControlInline"></label>
                    </div>								
                    <select class="custom-select my-1 mr-2">
                        <option value="1">0 - $100</option>
                        <option value="2">$100 - $200</option>
                        <option value="3">$200 - $300</option>
                        <option value="4">$300 - $500</option>
                        <option value="5">$500 - $1,000</option>
                        <option value="6">$1,000 - $2,000</option>
                        <option value="7">$2,000 - $3,000</option>
                        <option value="8">$3,000 - $5,000</option>
                        <option value="9">$5,000 - $10,000</option>
                        <option value="10">$10,000 - $20,000</option>
                        <option value="11">$20,000 - $50,000</option>
                        <option value="12">$50,000 - Adelante</option>
                    </select>														    				
                    <select class="custom-select my-1 mr-2">
                        <option value="1">MXN</option>
                        <option value="2">USD</option>
                    </select>								
                    <select class="custom-select my-1 mr-2">
                        <option value="1">Día</option>
                        <option value="2">Semana</option>
                        <option value="3" selected>Mes</option>
                        <option value="4">Año</option>
                    </select>							
                </div>
				<div class="form-inline">
					<label class="control-label" for="busquedaempleo-salario_aproximado">Salario Aproximado</label>								
                    <div class="custom-control custom-checkbox my-1 ml-2">
                        <input type="checkbox" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="customControlInline"></label>
                    </div>							
                </div>
			</div>
			<div class="form-group">
				<label class="control-label" for="busquedaempleo-estado">Estado</label>						    
				<div class="form-inline">
					<div class="custom-control custom-checkbox my-1">
                        <input type="checkbox" class="custom-control-input" value="1">
                        <label class="custom-control-label" for="customControlInline"></label>
                    </div>						    	
					<select class="custom-select estado-mx">
                        <option value="1">Aguascalientes</option>
                        <option value="2">Baja California</option>
                        <option value="3">Baja California Sur</option>
                        <option value="4">Campeche</option>
                        <option value="5">Coahuila de Zaragoza</option>
                        <option value="6">Colima</option>
                        <option value="7">Chiapas</option>
                        <option value="8">Chihuahua</option>
                        <option value="9">Distrito Federal</option>
                        <option value="10">Durango</option>
                        <option value="11">Guanajuato</option>
                        <option value="12">Guerrero</option>
                        <option value="13">Hidalgo</option>
                        <option value="14">Jalisco</option>
                        <option value="15">México</option>
                        <option value="16">Michoacán de Ocampo</option>
                        <option value="17">Morelos</option>
                        <option value="18">Nayarit</option>
                        <option value="19">Nuevo León</option>
                        <option value="20">Oaxaca</option>
                        <option value="21">Puebla</option>
                        <option value="22">Querétaro</option>
                        <option value="23">Quintana Roo</option>
                        <option value="24">San Luis Potosí</option>
                        <option value="25">Sinaloa</option>
                        <option value="26">Sonora</option>
                        <option value="27">Tabasco</option>
                        <option value="28">Tamaulipas</option>
                        <option value="29">Tlaxcala</option>
                        <option value="30">Veracruz de Ignacio de la Llave</option>
                        <option value="31" selected>Yucatán</option>
                        <option value="32">Zacatecas</option>
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
export default {
    name: "FormEmpleoBuscador"
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