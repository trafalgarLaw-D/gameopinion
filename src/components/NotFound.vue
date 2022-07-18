<template>
    <b-container>
        <div id="not-found"><h2>404</h2><h4>Not Found</h4></div>
    </b-container>
</template>

<style scoped>
#not-found{
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FF3CAC;
    background-image: linear-gradient(150deg, rgb(229, 198, 245) 1%, #a267d6 20%, #a267d6 60%,#8bbfe3 100%);
}
h2{
    font-size: 12rem;
    color: white;
    font-weight: bold;
    text-shadow: 3px 0px 0px rgba(50, 50, 50, 0.5);
}
h4{
    font-size: 2rem;
    color: white;
    font-weight: bold;
    text-shadow: 3px 0px 0px rgba(50, 50, 50, 0.5);
}
</style>