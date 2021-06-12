<template>
  <div>
    <b-row>
      <b-col>
        <b-img
          :src="articuloParam.foto"
          class="d-block mx-auto"
          alt="imagen"
        ></b-img>
      </b-col>
      <b-col>
        <b-col md="4">
          <span v-if="articuloParam.esPromocion == true">
            <br /><br /><br />
            <h1 style="color: green">{{ articuloParam.articulo }}</h1>
          </span>
          <span v-if="articuloParam.esPromocion == false">
            <br /><br /><br />
            <h1 style="color: red">{{ articuloParam.articulo }}</h1>
          </span>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Código:</p>
      </b-col>
      <b-col>
        <p>{{ articuloParam.codigo }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col><p>Rubro:</p></b-col>
      <b-col
        ><p>{{ articuloParam.rubro }}</p></b-col
      >
    </b-row>
    <b-row>
      <b-col><p>Es promoción:</p></b-col>
      <b-col>
        <b-col md="4">
          <span v-if="articuloParam.esPromocion == true">SI</span>
          <span v-if="articuloParam.esPromocion == false">NO</span>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col><p>Fecha de Vencimiento:</p></b-col>
      <b-col
        ><p>{{ articuloParam.fechaVencimiento }}</p></b-col
      >
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["articuloParam"],
};
</script>
