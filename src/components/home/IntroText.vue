<template>
    <div class="text-container">
        <h1>The Jersey Bold Banner</h1>
        <IntroTextHelper
            qword="WHY"
            title="Jersey needs a new flag."
            description="New Jersey deserves a design that citizens recognize, fly and enjoy."
            link="/why"
        />
        <IntroTextHelper
            qword="WHAT"
            title="Jersey's flag could be."
            description="New Jersey needs a memorable design that represents our shared history, values and geography."
            link="/what"
        />
        <IntroTextHelper
            qword="HOW"
            title="Jersey can make this our flag."
            description="New Jersey is in a great position to make this our new flag."
            link="/how"
        />
        <Footer/>
    </div>
</template>

<script>
import IntroTextHelper from '@/components/home/IntroTextHelper.vue'
import Footer from '@/components/home/Footer.vue'
export default {
  name: 'IntroText',
  components: {
    IntroTextHelper,
    Footer
  }
}
</script>

<style scoped>
.text-container {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: left;
    text-align: left;
    z-index: 1;
    overflow-x: scroll;
    /*
    overflow-y: scroll;
    */
}
  
h1 {
    font-family: Radicalis;
    font-size: 3rem;
    text-align: center;
}

@media screen and (max-width: 1300px) {
    h1 {
        display: none;
    }
    
    .text-container {
      overflow-x: scroll
    }
    
}
</style>