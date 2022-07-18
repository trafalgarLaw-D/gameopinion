<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <h2 class="text-center my-5">Lista de Opiniones</h2>
                <div v-if="mostrar">
                    <b-alert show variant="danger">No existen opiniones por mostrar.</b-alert>
                </div>
                <div v-else  class="accordion" role="tablist">
                    <b-card no-body v-for="(game, i) in opinionGames" :key="i">
                        <b-card-header class="styleCollapse" header-tag="header" role="tab">
                            <div block  v-b-toggle="'accordion-'+i" variant="outline-primary">Opinion creada por: {{game.nombre}}.
                                Para el juego: {{game.nombreJuego}}
                            </div>
                            <b-icon class="icono" v-b-toggle="'accordion-'+i" icon="chevron-up"></b-icon>
                        </b-card-header>
                        <b-collapse :id="'accordion-'+i" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text><strong>Opinión: </strong>{{game.opinion}}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'opinions-view',
    data: function(){
        return {
            mostrar: true
        }
    },
    computed: {
        ...mapState(['opinionGames'])
    },
    created(){
        if(this.opinionGames.length != 0) this.mostrar = false;
    }
}
</script>

<style>
.accordion .styleCollapse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2963E6;
    background: #E7F1FF;

}

.icono {
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
}
</style>