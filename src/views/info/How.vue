<template>
  <div id="container">
    <div class="header"></div>
    <div class="header-text" style="margin: 50px">
      <h1 style="margin: 0; font-family: Radicalis;">How We Get a New Flag</h1>
      <p style="margin: 0">New Jersey is in a great position to make this our new flag.</p>
    </div>
    <div class="card">
      <h1 style="margin: 0">Jersey's Flag Is Broken</h1>
      <p>World</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>

#container {
    background-color: white;
    height: 100%;
}

.header {
  background: #F5DF8A;
  height: 20px;
  width: 100%;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 4px rgba(21,77,138,0.5);
  border-radius: 5px;
  width: 95%;
  max-width: 900px;
  margin: 0px auto;
  padding: 30px;
  text-align: start;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

/*
FONTS
*/

@font-face {
    font-family: "Radicalis";
    src: url('../../assets/Radicalis.ttf') format("truetype");
}
@font-face {
    font-family: "Volaroid";
    src: url('../../assets/volaroid/Volaroid.ttf') format("truetype");
}

@font-face {
    font-family: "Lavigne";
    src: url("../../assets/lavigne/Lavigne.ttf") format("truetype");
}
</style>
