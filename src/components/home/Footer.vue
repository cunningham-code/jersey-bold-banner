<template>
    <div class="main-footer">
        <a href="https://twitter.com/jersey_bold" target="_blank" rel="noopener noreferrer">@JERSEY_BOLD ON TWITTER</a>
        <a href="mailto:contact@jerseybold.com" target="_blank" rel="noopener noreferrer">CONTACT@JERSEYBOLD.COM</a> 
        <router-link :to="'/credits'" target="_blank">CREDITS</router-link>
    </div>
</template>

<style scoped>
.main-footer {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
}

.main-footer a {
    margin: 10px;
    text-decoration: none;
    color: #154D8A;
    border-bottom: solid 1px #154D8A;
}
</style>