<template>
  <div class="about">
    <section class="nosotros-header">
      <div class="container">
        &nbsp;
        <div class="row">
          <div class="col-12 col-sm-2 col-md-2">
              &nbsp;
          </div>
          <div class="col-12 col-sm-8 col-md-8">
            <p class="title">Streamlining the world’s cities.</p>
            <p>Today, we’re growing businesses, creating jobs, and delivering smiles in over 300+ cities. 
                But our journey has just begun. We want to bring our last-mile logistics infrastructure to 
                every corner of the world.</p>
          </div>
          <div class="col-12 col-sm-2 col-md-2">
              &nbsp;
          </div>
        </div>
      </div>
    </section>
    <empleo-ideal />
    <empleo-bar />
    <patrocinadores />
    <perfil />
  </div>
</template>

<script>
import EmpleoIdeal from "@/components/EmpleoIdeal.vue";
import EmpleoBar from "@/components/EmpleoBar.vue";
import Patrocinadores from "@/components/Patrocinadores.vue";
import Perfil from "@/components/Perfil.vue";

export default {
  name: "about",
  components: {
    EmpleoIdeal,
    EmpleoBar,
    Patrocinadores,
    Perfil
  }
};
</script>
