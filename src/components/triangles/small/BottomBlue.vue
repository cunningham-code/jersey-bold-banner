<template>
    <div class="bottom-blue"></div>
</template>

<style scoped>
.bottom-blue {
    width: 50px;
    height: 50px;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, #154D8A 50%, #154D8A 100%);
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 1;
}

@media screen and (max-width: 1300px) {
    .bottom-blue { display: none; }
}
</style>