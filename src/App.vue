<template>
  <NavBar />
  <router-view />
  <Footer/>

</template>
<script>
  import NavBar from "@/components/Navbar.vue"
  import Footer from "@/components/Footer.vue"
  export default {
  name: 'App',
  components: {
    NavBar,
    Footer
    }
}
</script>

<style>
#app {
  font-family: 'Poppins', arial, verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #494847;
}

nav {
  padding: 30px;
  color: #F2F0EB;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
