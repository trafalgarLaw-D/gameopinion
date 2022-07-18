<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <h2 class="text-center my-5">Administrando la Lista de Opiniones</h2>
                <div v-if="mostrar">
                    <b-alert show variant="danger">No existen opiniones por administrar.</b-alert>
                </div>
                <div v-else class="mx-auto">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Persona</th>
                            <th>Juego</th>
                            <th>Opinion</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr v-for="(game, i) in opinionGames" :key="i">
                            <td>{{i+1}}</td>
                            <td>{{ game.nombre }}</td>
                            <td>{{ game.nombreJuego }}</td>
                            <td>{{ game.opinion }}</td>
                            <td>
                                <b-button variant="danger" @click="remove(i)">Eliminar</b-button>
                            </td>
                            <td>
                                <router-link :to="{ path: 'editar/'+i }">
                                    <b-button variant="info">Editar</b-button>
                                </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'manage-view',
    data:function(){
        return {
            mostrar: true
        }
    }, 
    computed: {
        ...mapState(['opinionGames'])
    },
    methods: {
        ...mapActions(['removeOpinionGames']),
        remove(id) {
            let eliminar = confirm('¿Estas seguro de eliminar la opinión?')
            if (eliminar) {
                this.removeOpinionGames(id)
                if(this.opinionGames.length == 0){
                    this.mostrar = true;
                } 
            }
        }
    },
    created(){
        if(this.opinionGames.length != 0) this.mostrar = false;
    }
}
</script>

<style scoped>
table {
    width: 100%;
    display: block;
    overflow-x: auto;
}

tr:not(:first-child) {
    border-bottom: 1px solid rgb(176, 173, 173);
}

td {
    padding-right: 4rem;
    padding-bottom: 0.5rem;
}
</style>