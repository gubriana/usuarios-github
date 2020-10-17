<template>
  <div class="app frame">
    <!-- <NotFound /> -->
    <!-- <Searcher /> -->
    <Details />
  </div>
</template>

<script>
/* import Searcher from './components/Searcher.vue' */
/* import NotFound from './components/NotFound.vue'
 */
import Details from './components/Details.vue'
export default {
  name: 'App',
  components: {
    /* Searcher, */
    /* NotFound, */
    Details
  }
}
</script>
<style>
h1 {
  color: #000;
  font-weight: 400;  
}
.app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.frame {
  border: 2px dashed #eeeeee;
  position: relative;
  padding: 50px;
}
.frame:before {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 1px solid #409af8;
  outline: 1px solid #bcb5b9;
}
.primary-color {
  color: #ab53f2;
}
.bg-primary-color {
  background-color: #ab53f2;
}
a {
  color: #ab53f2;
}
</style>
