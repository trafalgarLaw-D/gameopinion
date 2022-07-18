<template>
    <b-container>
        <h2 class="text-center my-5">Lista de Juegos Disponibles</h2>
        <b-row>
            <!-- CARD -->
            <b-col class="mb-4" cols="12" md="4" v-for="(game, i) in games" :key="i">
                <b-card no-body class="p-0" :img-src="game.background_image" img-alt="Image" img-top>
                    <template #header>
                        <h4 class="mb-0">{{ game.name }}</h4>
                    </template>
                    <b-list-group flush>
                        <b-list-group-item>Rating: {{ game.rating }}</b-list-group-item>
                        <b-list-group-item>Released: {{ game.released }}</b-list-group-item>
                        <b-list-group-item>Updated: {{ game.updated }}</b-list-group-item>
                    </b-list-group>
                    <b-card-body class="m-auto">
                        <b-button id="show-btn" @click="showModal(game.name)" variant="primary">Opinar
                        </b-button>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <!-- MODAL -->
        <b-modal ref="bv-modal" hide-footer>
            <template #modal-title>Escribe tu opinion para el juego: {{nombreJuego}}</template>
            <div class="d-block">
                <label for="nombre">Nombre:</label>
                <b-form-input id="nombre" placeholder="Escriba su nombre" required v-model="nombre"></b-form-input>
                <br>
                <label for="opiniones">Opiniones:</label>
                <b-form-textarea id="opiniones" placeholder="Tu opinion debe ir aquí..." required v-model="opinion">
                </b-form-textarea>
            </div>
            <hr>
            <div class="d-flex justify-content-end">
                <b-button class="mx-1" @click="hideModal">Cerrar</b-button>
                <b-button variant="primary" @click="saveOpinion">Guardar</b-button>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
import games from './games.json'
import { mapActions } from 'vuex'
export default {
    name: 'card-components',
    data: function () {
        return {
            games,
            nombreJuego:'',
            nombre:'',
            opinion:''
        }
    },
    methods: {
        ...mapActions(['addOpinionGames']),
        showModal(juego) {
            this.nombreJuego = juego
            this.$refs['bv-modal'].show()
        },
        hideModal() {
            this.$refs['bv-modal'].hide()
        },
        saveOpinion(){
            if(this.nombre != '' && this.opinion != ''){
                let data = { nombreJuego: this.nombreJuego, nombre: this.nombre, opinion: this.opinion}
                this.addOpinionGames(data)
                alert('Guardado exitosamente')
                this.opinion = '';
                this.$refs['bv-modal'].hide()
            }else{
                alert('No pueden ir campos vacios')
            } 
        }
    }
}
</script>

<style>
button.close {
    border: none;
    font-size: 40px;
    background: none;
    color: gray;
    font-weight: 300;
}
</style>