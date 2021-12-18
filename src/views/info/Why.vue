<template>
  <div id="container">
    <div class="header"></div>
    <div class="header-text" style="margin: 50px auto">
      <h1 style="margin: 0; font-family: Radicalis;">Why Jersey Needs a New Flag</h1>
      <p style="margin: 0">New Jersey deserves a design that citizens recognize, fly and enjoy.</p>
    </div>
    <div class="card" style="margin: 50px auto">
      <div style="display: flex; align-items: center">
        <div style="flex: 2">
          <h1>This state's flag has been reduced to a difficult jeapordy question.</h1>
          <h2 style="margin: 0; color: #aaa; margin-bottom: 20px">What is The Flag of New Jersey?</h2>
          <p>The Flag of New Jersey should be a clear and memorable symbol of the state. But in practice, even those who like the design have to admit that the design is infrequently flown, and less frequently recognized.</p>
          <br>
          <p>What is the Flag of New Jersey?<br>It's a missed opportunity.</p>
        </div>
        <div style="flex: 1">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/NJGov?ref_src=twsrc%5Etfw">@NJGov</a> New Jersey making a cameo on Jeopardy tonight. No one knew this was the state flag. <a href="https://t.co/jqwuA2Xlg6">pic.twitter.com/jqwuA2Xlg6</a></p>&mdash; Laura Cala (@laura_goldfish) <a href="https://twitter.com/laura_goldfish/status/1446252051969806338?ref_src=twsrc%5Etfw">October 7, 2021</a></blockquote>
        </div>
      </div>
    </div>
    <div class="card" style="margin: 50px auto">
      <h1 style="margin-bottom: 20px">We Can't Recognize Our Own Flag</h1>
      <p>An assesment from the <a>North American Vexillological Association (NAVA)</a> put New Jersey's current flag 46th out of the 72 flags flown in North America. While our flag does stand out for its buff background, the seal is too detailed for anything to be recognized at a distance. Not great, but we still scored better than New York.</p>
      <br>
      
      <div style="display: flex;">
        <div style="flex: 1 1 0%;
    padding -right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: left;">
          <h3>What about our flag makes it so difficult to recognize?</h3>
          <br>
          <p>NAVA offers this advice for making a recognizeable flag: "The flag should be so simple that a child can draw it from memory."</p>
          <h4>Good luck with that...</h4>
        </div>
        <iframe style="flex: 1" height="200" src="https://www.youtube.com/embed/YiZB3_xZR2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="card" style="margin: 50px auto">
      <h1 style="margin: 0">Jersey's Flag Is Broken - So What?</h1>
      <br>
      <p>There are more important things than chaning New Jersey's flag, no doubt.</p>
      <br>
      <p>But a good flag would foster more civic engagement. New Jersey would see a daily reminder that good things can come from demanding things work better.</p>
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
