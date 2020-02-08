<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- state -->
    <!-- <Counter /> -->
    <!-- getter -->
    <!-- <Getter /> -->
    <!-- Mutations -->
    <!-- <Mutations /> -->
    <!-- <Action /> -->
    <Module />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Counter from './view/Counter'
// import Getter from './view/Getter'
// import Mutations from './view/Mutations'
// import Action from './view/Action'
import Module from './view/Module'
export default {
  name: 'App',
  components: {
    // Counter,
    // Getter,
    // Mutations,
    // Action,
    Module
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
