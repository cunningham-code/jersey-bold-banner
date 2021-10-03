<template>
  <div id="container">
    <div class="header"></div>
    <div class="header-text" style="margin: 50px auto">
      <h1 style="margin: 0; font-family: Radicalis;">Why Jersey Needs a New Flag</h1>
      <p style="margin: 0">New Jersey deserves a design that citizens recognize, fly and enjoy.</p>
    </div>
    <div class="card" style="margin: 50px auto">
      <h1 style="margin: 0">Jersey's Flag Is Broken</h1>
      <br>
      <p>There is a chance you currently recognize, fly and enjoy the current flag of New Jersey. If that is the case, that should be celebrated. There should be more people who feel the way you do about our state flag.</p>
      <br>
      <p>The current New Jersey flag, to be clear, is not bad. It doesn't harm us in the same way that say, Mississippi's old flag actively hurt their state. Instead, it's a missed opportunity for this great state to show off who it is.</p>
    </div>
    <div class="card" style="margin: 50px auto">
      <h1 style="margin: 0">People Can't Recognize Our Flag</h1>
      <br>
      <p>Imagine if you worked for a company where most employees (let alone customers) did not know what your logo looked like. That's why it is so important that a flag should be recognize-able.</p>
      <br>
      <p>An assesment from the <a>North American Vexillological Association (NAVA)</a> put New Jersey's current flag 46th out of the 72 flags flown in North America. While our flag does stand out for its buff background, the seal is too detailed for anything to be recognized at a distance. Not great, but better than New York.</p>
      <br>
      
      <div style="display: flex;">
        <div style="flex: 1 1 0%;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;">
          <h3>What about our flag makes it so difficult to recognize?</h3>
          <br>
          <p>NAVA offers this advice for making a recognizeable flag: "The flag should be so simple that a child can draw it from memory."</p>
          <h4>Good luck with that...</h4>
        </div>
        <iframe style="flex: 1" height="200" src="https://www.youtube.com/embed/YiZB3_xZR2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
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
    overflow-y: scroll;
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
