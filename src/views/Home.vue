<template>
  <div class="home">
    <TopYellow/>
    <Flag/>
    <IntroText/>
    <BottomBlue/>
    <!--
    <div id="mobile">
      <div id="mobile-header">
        <div>WHY</div>
        <div>WHAT</div>
        <div>HOW</div> 
      </div>
      <p>New Jersey needs a new flag. <br> New Jersey deserves a design that citizens recognize, fly and enjoy.</p>
      <router-link id="mobile-learn-more" to="/credits" target="_blank" rel="noopener noreferrer">Learn More</router-link>
    </div>
    
     <h1 id="title">The Jersey Bold Banner</h1>
    <div id="mobile-footer">
        <router-link :to="'/why'" target="_blank" rel="noopener noreferrer">WHY</router-link>
        <router-link :to="'/what'" target="_blank" rel="noopener noreferrer">WHAT</router-link>
        <router-link :to="'/how'" target="_blank" rel="noopener noreferrer">HOW</router-link>
    </div>
    -->
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
      flex-direction: row;
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

#mobile-footer a {
  width: 100%;
  background: #ffffffaa;
  margin: 5px;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
}

.mobile-header {
  display: none;
  border-bottom: solid 3px #154D8A;
}


@media screen and (min-width: 1300px) {
    #title {
        display: none !important;
    }
    #mobile-footer {
        display: none !important;
    }
}

@media screen and (max-width: 1000px) {
    .home {
        flex-direction: column;
    }

    .mobile-header {
      display: block;
      font-family: Radicalis;
      font-size: 0.75rem;
      text-align: center;
    }
}


#mobile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#mobile p {
  margin: 20px;
  font-size: 1.2rem
}

#mobile-header {
  display: flex;
  
}

#mobile-header div {
  flex: 1;
  padding: 10px;
  font-family: Poppins;
  background: #154D8A;
  color: #fff;
  overflow-x: scroll;
}

#mobile-learn-more {
  background: #154D8A;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}
</style>

<style>

/*
FONTS
*/

@font-face {
    font-family: "Radicalis";
    src: url('../assets/Radicalis.ttf') format("truetype");
}
@font-face {
    font-family: "Volaroid";
    src: url('../assets/volaroid/Volaroid.ttf') format("truetype");
}

@font-face {
    font-family: "Lavigne";
    src: url("../assets/lavigne/Lavigne.ttf") format("truetype");
}
@font-face {
    font-family: "Poppins";
    src: url("../assets/poppins/Poppins-Bold.ttf") format("truetype");
}
</style>
