<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
         <b-nav-form >
            <b-form-input
              size="sm"
              class="mr-sm-2 my-2"
              placeholder="Buscar por código"
              v-model="form.buscarCodigo"
              @keyup="limpiaCaja"
            ></b-form-input>
            <b-button size="sm" @click="busquedaPorCodigo" class="my-2 mr-2 my-sm-0">BUSCAR</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-form >
            <b-form-input
              size="sm"
              class="mr-sm-2 my-2"
              placeholder="Buscar por denominación"
              v-model="form.buscarDenominacion"
              @keyup="limpiaCaja"
            ></b-form-input>
            <b-button size="sm" @click="busquedaPorDenominacion" class="my-2 my-sm-0">BUSCAR</b-button>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item href="/barato">MÁS BARATO</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        buscarCodigo: "",
        buscarDenominacion: "",
      }
    }
  },
  methods: {
    busquedaPorCodigo() {
      this.$router.push('/codigo/'+ this.form.buscarCodigo)
    },
    busquedaPorDenominacion() {
      this.$router.push('/denominacion/'+ this.form.buscarDenominacion)
    },
    limpiaCaja() {
      if (this.form.buscarCodigo === '' && this.form.buscarDenominacion === '') {
        this.$router.push('/')
      }
    },
  }
};
</script>

<style lang=""></style>