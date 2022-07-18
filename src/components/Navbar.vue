<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand to="/"><b-icon icon="mouse3"></b-icon> Game Opinion</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="justify-content-end">
                <b-navbar-nav>
                    <b-nav-item to="/"><b-icon icon="house-door"></b-icon> Home</b-nav-item>
                    <b-nav-item to="/opiniones"><b-icon icon="chat"></b-icon> Opiniones</b-nav-item>
                    <b-nav-item to="/administracion"><b-icon icon="people"></b-icon> Administración</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'nav-bar'
}
</script>