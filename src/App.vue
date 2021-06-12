<template>
  <div id="app">
    <div id="nav">
      <menu-nav-bar></menu-nav-bar>
        
    </div>
    <router-view />
  </div>
</template>

<script>
import MenuOpciones from "@/components/MenuOpciones";
export default {
  components: {
    "menu-nav-bar": MenuOpciones,
  },
};
</script>
<style></style>
