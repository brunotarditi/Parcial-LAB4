<template>
  <div>
    <b-container fluid class="mt-4 col-md-8">
      <articulo-item :articuloParam="articuloEncontrado"></articulo-item>
      <b-row>
        <b-col><p>Precios Relevados:</p></b-col>
        <b-col
          ><ul
            v-for="precio in articuloEncontrado.preciosRelevados"
            :key="precio.i"
          >
            <li>{{ precio | currency }}</li>
          </ul></b-col
        >
      </b-row>
      <b-row>
        <b-col><p>Precio promedio:</p></b-col>
        <b-col
          ><p>{{ precioPromedio | currency }}</p></b-col
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
      const parametroCodigo = this.$route.params.codigo;
      const url = "http://179.43.113.170:8082/test/tc/articulos.json";
      const res = await fetch(url);
      const data = await res.json();
      this.articulosJson = data;

      this.articulosJson.forEach((articulo) => {
        if (articulo.codigo == parametroCodigo) {
          this.articuloEncontrado = articulo;
        }
      });
      this.calcularPromedio();
    },
    calcularPromedio() {
      this.sumatoria = this.articuloEncontrado.preciosRelevados.reduce((acumulador, item) => {
        return acumulador += item;
      });
      this.precioPromedio = this.sumatoria / this.articuloEncontrado.preciosRelevados.length;
    },
  },
};
</script>
