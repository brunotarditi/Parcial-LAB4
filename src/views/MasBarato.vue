<template>
  <div>
    <b-container fluid class="mt-4 col-md-8">
      <articulo-item :articuloParam="articuloEncontrado"></articulo-item>
      <b-row>
        <b-col><p>Precio promedio:</p></b-col>
        <b-col
          ><p>{{ articuloEncontrado.precioPromedio | currency }}</p></b-col
        >
      </b-row>
      <b-row class="mb-3 pb-3">
        <b-col>
          <b-button size="sm" variant="primary" href="/">Volver</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Detalle from "@/components/Detalle.vue";
export default {
  name: "DetalleArticulo",
  components: {
    "articulo-item": Detalle,
  },
  mounted() {
    this.getInstrumentoPorCodigo();
  },
  data() {
    return {
      articulosJson: [],
      articuloEncontrado: [],
      precioPromedio: 0,
      sumatoria: 0,
    };
  },
  methods: {
    async getInstrumentoPorCodigo() {
      const url = "http://179.43.113.170:8082/test/tc/articulos.json";
      const res = await fetch(url);
      const data = await res.json();
      this.articulosJson = data;
      this.masBarato();
    },
    masBarato() {
      this.calcularPromedio();
      this.articulosJson
        .sort((a, b) => (a.precioPromedio < b.precioPromedio ? 1 : -1))
        .map((articulo) => (this.articuloEncontrado = articulo));
    },
    calcularPromedio() {
      this.articulosJson.forEach((articulo) => {
        this.sumatoria = articulo.preciosRelevados.reduce((acumulador, item) => {
          return (acumulador += item);
        });
        this.precioPromedio = this.sumatoria / articulo.preciosRelevados.length;
        articulo.precioPromedio = this.precioPromedio;
      });
    },
  },
};
</script>
