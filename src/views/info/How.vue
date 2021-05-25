<template>
  <div class="home">
    <TopYellow/>
    <Flag/>
    <IntroText/>
    <BottomBlue/>
     <h1 id="title">HOW</h1>
    <div id="mobile-footer">
      <div id="mobile-links">
        <router-link :to="'/why'" target="_blank" rel="noopener noreferrer">WHY</router-link>
        <router-link :to="'/what'" target="_blank" rel="noopener noreferrer">WHAT</router-link>
        <router-link :to="'/how'" target="_blank" rel="noopener noreferrer">HOW</router-link>
      </div>
      <div id="external-mobile-links">
        <a href="https://twitter.com/jersey_bold" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="mailto:contact@jerseybold.com" target="_blank" rel="noopener noreferrer">Mail</a>
        <router-link :to="'/credits'" target="_blank" rel="noopener noreferrer">Credits</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Flag from '@/components/home/Flag.vue'
import IntroText from '@/components/home/IntroText.vue'
import BottomBlue from '@/components/triangles/small/BottomBlue.vue'
import TopYellow from '@/components/triangles/small/TopYellow.vue'

export default {
  name: 'Home',
  components: {
    Flag,
    IntroText,
    BottomBlue,
    TopYellow
  }
}
</script>

<style scoped>

.home {
    display: flex;
    /*background-color:#f8f3db;*/
    background-color: white;
    height: 100%;
}

#title {
  z-index: 2;
  font-size: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
  font-family: Radicalis;
  position: absolute;
  top: 0;
  color: #fff;
}

#mobile-footer {
      position: absolute;
      display: flex;
      justify-content: center;
      bottom: 0;
      z-index: 2;
      width: 100%;
      margin-bottom: 2rem;
      flex-direction: column;
}

#external-mobile-links {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}

#external-mobile-links a {
  margin: 5px;
  color: #fff;
  text-decoration: none;
}

#mobile-links a {
  padding: 12px 24px;
  font-family: Lavigne;
  background: #154D8A;
  margin: 5px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

#mobile-links a:nth-child(2) {
  background: #F5DF8A;
  color: #000;
}

@media screen and (min-width: 1300px) {
    #title {
        display: none !important;
    }
    #mobile-footer {
        display: none !important;
    }
}

@media screen and (max-width: 1300px) {
    .home {
        display: flex;
        align-items: center;
    }
}
</style>

<style>

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
