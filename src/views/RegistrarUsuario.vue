<template>
    <div class="registrar-usuario">
        <page-header :title="title" />
        <section class="empleos-buscador">
	        <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-3">
                        &nbsp;
                    </div>
        	        <div class="col-12 col-sm-6 col-md-6">
        		        <div class="the-box rounded">
                            <form-usuario />
                        </div>
                    </div>
                    <div class="col-12 col-sm-3 col-md-3">
                        &nbsp;
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import FormUsuario from "@/components/FormUsuario.vue";

export default {
    name: "registrar-usuario",
    components: {
        PageHeader,
        FormUsuario
    },
    data() {
        return {
            title: "Registrar Usuario"
        }
    }
}
</script>