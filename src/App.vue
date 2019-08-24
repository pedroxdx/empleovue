<template>
  <div id="app">
    <header-app />
    <router-view />
    <footer-app />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>
