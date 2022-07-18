<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2 class="text-center my-5">Editando la opinion de: {{ nombreJuego }}</h2>
        <div class="d-block">
          <label for="nombre">Nombre:</label>
          <b-form-input placeholder="Escriba su nombre" required v-model="nombre"></b-form-input>
          <br>
          <label for="opiniones">Opiniones:</label>
          <b-form-textarea placeholder="Tu opinion debe ir aquí..." required v-model="opinion">
          </b-form-textarea>
        </div>
        <div class="mt-3">
          <router-link to="/administracion">
            <b-button variant="primary">Regresar</b-button>
          </router-link>
          <b-button class="mx-4" variant="info" @click="getEdit">Guardar</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'edit-view',
  data: function () {
    return {
      nombreJuego:'',
      nombre: '',
      opinion: ''
    }
  },
  computed: {
    ...mapState(['opinionGames'])
  },
  methods: {
    ...mapActions(['editOpinionGames']),
    getEdit() { 
      let data = {id: this.$route.params.id, nombre: this.nombre, opinion: this.opinion }
      this.editOpinionGames(data)
      alert('Opinión editada')
    }
  },
  created(){
    let id = this.$route.params.id;
    this.nombreJuego = this.opinionGames[id].nombreJuego;
    this.nombre = this.opinionGames[id].nombre;
    this.opinion = this.opinionGames[id].opinion;
  }
} 
</script>