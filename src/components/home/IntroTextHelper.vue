<template>
    <router-link :to="link" target="_blank" rel="noopener noreferrer">
    <div class="section-container">
        <div class="header-container">
            <h1>{{ qword }}</h1>
            <h3>{{ title }}</h3>
        </div>
        <p>{{ description }}</p>
    </div>
    </router-link>
</template>

<script>
export default {
  name: 'IntroTextHelper',
  props: {
    qword: String,
    title: String,
    description: String,
    link: String
  },
}
</script>

<style scoped>

.section-container {
    margin: 30px 20px;
}

.header-container {
    display: flex;
    align-items: center;
}

h1 {
    font-family: Lavigne;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
}

h3 {
    font-size: 1.25rem;
    padding: 0 0 0 10px;
    font-weight: 100;
    margin: 0;
}

p {
    font-size: 1rem;
    margin: 2px 0px;
}


a {
    text-decoration: none;
    color: #000;
    border-left: 5px solid #154D8A;
    margin: 5px 10px 0px 0px;
}

a:nth-child(3) {
  border-left: 5px solid #F5DF8A;
}



/*
*/

</style>