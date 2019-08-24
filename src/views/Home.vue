<template>
  <div class="home">
    <section class="buscador">
      <div class="container">
        &nbsp;
        <div class="row">
          <div class="col-12 col-sm-4 col-md-7">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-1">
                &nbsp;
              </div>
              <div class="col-12 col-sm-12 col-md-10">
                <p class="title">Encuentra el empleo que estas buscando en los mejores restaurantes del sureste.</p>
              </div>
              <div class="col-12 col-sm-12 col-md-1">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-5">
            <form-empleo-buscador />
          </div>
        </div>
      </div>
    </section>
    <patrocinadores />
    <restaurante />
    <servicios />
    <perfil />
  </div>
</template>

<script>
import FormEmpleoBuscador from "@/components/FormEmpleoBuscador.vue"
import Patrocinadores from "@/components/Patrocinadores.vue";
import Restaurante from "@/components/Restaurante.vue";
import Servicios from "@/components/Servicios.vue";
import Perfil from "@/components/Perfil.vue";

export default {
  name: "home",
  components: {
    FormEmpleoBuscador,
    Patrocinadores,
    Restaurante,
    Servicios,
    Perfil
  }
};
</script>
