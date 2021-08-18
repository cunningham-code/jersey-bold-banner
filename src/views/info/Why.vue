<template>
  <div class="home">
 
    <TopYellow/>
    <BottomBlue/>
    <h1 id="title">Why | The Jersey Bold Banner</h1>
    <p>New Jersey's flag is broken.</p>
    
    <
    <!--
    <div class="content">
      <p>Hello</p>
    </div>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import BottomBlue from '@/components/triangles/small/BottomBlue.vue'
import TopYellow from '@/components/triangles/small/TopYellow.vue'

export default {
  name: 'Home',
  components: {
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

.content {
  width: 100%;
}

#title {
  z-index: 2;
  font-size: 2rem;
  /*margin-top: 2rem;*/
  text-align: left;
  width: 100%;
  /*font-family: Radicalis;*/
  color: #000;
  padding: 0px 100px;
}
/*
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
*/
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
