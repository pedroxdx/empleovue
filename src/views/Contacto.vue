<template>
    <div id="contacto">
        <section class="contacto-header">
            <div class="container">
                &nbsp;
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12">
                        &nbsp;
                    </div>
                </div>
            </div>
        </section>
        <section class="contacto-title">
	        <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12">
                        <h2>Idea local con impacto global</h2>
                    </div>
    	        </div>
            </div>
        </section>
        <section class="contacto-form">
	        <div class="container">
                <div class="row">
    		        <div class="col-12 col-sm-12 col-md-12">
    			        <h2>Contáctanos</h2>
    			        <hr>
    		        </div>
    	        </div>
    	        <div class="row">
    		        <div class="col-12 col-sm-6 col-md-6">
                        <form-contacto />
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <article>
                            <p class="title">Estamos ubicados en:</p>
                            <p>Calle 65 entre 62 y 64 <br/>
                                Col Centro <br/>
                                Mérida, Yucatán <br/>
                                Tel. 999 23 2444 <br/>
                                <strong>info@empleorestaurante.com</strong></p>
                        </article>
    		        </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import FormContacto from "@/components/FormContacto.vue";

export default {
    name: "contacto",
    components: {
        FormContacto
    }
}
</script>