<template>
    <div class="empleos">
        <page-header :title="title" />
        <section class="empleos-buscador">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-5">
                        <form-empleo-buscador />
                    </div>
                    <div class="col-12 col-sm-6 col-md-7">
                        <empleos-disponibles :empleos="empleos" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import FormEmpleoBuscador from "@/components/FormEmpleoBuscador.vue";
import EmpleosDisponibles from "@/components/EmpleosDisponibles.vue";

export default {
    name: "empleos",
    components: {
        PageHeader,
        FormEmpleoBuscador,
        EmpleosDisponibles
    },
    data() {
        return {
            title: "Vacantes de Empleo",
            empleos: [
                {
                    imagen: "mcdonald.jpg",
                    empleo: "Mesero",
                    fecha: "2017-08-17 16:32:42",
                    salario: 4000,
                    signo: "$",
                    moneda: "MXN",
                    unidad_temporal: "Mes",
                    region: {
                        estado: "Yucatán",
                        ciudad: "Mérida"
                    }
                }
            ]
        }
    }
}
</script>