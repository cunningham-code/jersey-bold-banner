<template>
    <div id="flag-container" class="wrapper-page bg-sky">
        <main class="page-main">
            <div class="js-flag-canvas"></div>
        </main>
        
    </div>
</template>

<script>
export default {
  name: 'Flag',
}
</script>

<style scoped>
#flag-container {
    margin: 50px;
    border-radius: 15px;
    height: calc(100% - 100px);
    box-shadow: 5px 10px 18px #888888;
    z-index: 1;
}

.wrapper-page{
    flex: 4
}

.js-flag-canvas {
    display: flex;
    flex-direction: column;
    align-items: center;
}


img {
    width: 70%;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #aaaaaa;
}

p {
    margin: 20px;
    font-size: 1.2rem;
    font-style: italic;
}

@media screen and (max-width: 1300px) {
    #flag-container {
        border-radius: 0px;
        flex: 1;
        width: 100%;
        margin: 0px;
        box-shadow: none;
    }
    #title {
        position: absolute;
        top: 50px;
        color: #fff;
    }
}
</style>