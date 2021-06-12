<template>
  <div>
    <b-container>
      <table class="table">
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Código</th>
            <th>Fecha vencimiento</th>
            <th>Precio promedio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="articulo in listaArticulos" :key="articulo.codigo">
            <td>{{ articulo.articulo }}</td>
            <td>{{ articulo.codigo }}</td>
            <td>{{ articulo.fechaVencimiento }}</td>
            <td>{{ articulo.precioPromedio | currency }}</td>
            <td><a :href="'/detalle/' + articulo.codigo">VER DETALLE</a></td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    this.getArticulos();
  },
  data() {
    return {
      articulosJson: [],
      precioPromedio: 0,
      sumatoria: 0,
    };
  },
  computed: {
    listaArticulos: function() {
      let denominacion = this.$route.params.denominacion;
      let codigo = this.$route.params.codigo;
      let data = this.articulosJson;
      if (denominacion) {
        data = this.articulosJson.filter((articulo) => {
          return (
            articulo.articulo
              .toLowerCase()
              .indexOf(denominacion.toLowerCase()) > -1
          );
        });
      } else if (codigo) {
        data = this.articulosJson.filter((articulo) => {
          return articulo.codigo == codigo;
        });
      }
      return data;
    },
  },
  methods: {
    async getArticulos() {
      const url = "http://179.43.113.170:8082/test/tc/articulos.json";
      const res = await fetch(url);
      const data = await res.json();
      this.articulosJson = data;
      this.calcularPromedio();
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
<style scoped></style>
