<template>
    <header>
	    <div class="container">
	  	    <div class="row">
    		    <div class="col-12 col-sm-8 col-md-8 principal">
    			    <ul class="list-inline">
    				    <li class="list-inline-item"><img src="../assets/images/empleorestaurante.png" alt=""></li>
					    <li class="list-inline-item"><router-link to="/">Inicio</router-link></li>
					    <li class="list-inline-item"><router-link to="/about">Nosotros</router-link></li>
    				    <li class="list-inline-item"><router-link to="/empleos">Empleos</router-link></li>
    				    <li class="list-inline-item"><a href="#">Contacto</a></li>
    			    </ul>
    		    </div>
    		    <div class="col-12 col-sm-4 col-md-4 sesion">
    			    <ul class="list-inline">
    				    <li class="list-inline-item"><a href="#">Registro</a></li>
    				    <li class="list-inline-item">|</li>
    				    <li class="list-inline-item"><a href="#">Iniciar Sesión</a></li>
    			    </ul>
    		    </div>
		    </div>
	    </div>
    </header>
</template>

<script>
export default {
    name: "HeaderApp"
}
</script>