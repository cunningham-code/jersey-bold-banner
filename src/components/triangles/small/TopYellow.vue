<template>
    <div class="top-yellow"></div>
</template>

<style scoped>
.top-yellow {
    width: 150px;
    height: 150px;
    background: linear-gradient(to bottom right, #F5DF8A 0%, #F5DF8A 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
}


@media screen and (max-width: 1000px) {
    .top-yellow { 
        width: 100px;
        height: 100px;
     }
}

</style>