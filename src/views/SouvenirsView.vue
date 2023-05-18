<template>
<section id="heroSouvenir">
  <img src="../assets/cover.jpg" alt="">
  <p>EN CONSTRUCCION...Proximamente, nuevas sorpresas de nuestros artesanos locales.</p>
</section>  
<section v-for="souvenir in souvenirs" class="container" :id ="souvenir.id">
  <div class="row">
    <h2>{{ souvenir.name }}</h2>
    
  </div>
  <div class="row">
    <div class="col">
      <img :src= "souvenir.image" class="d-block w-100" alt="...">
    </div>
    <div class="col">
      <p class="descripcion">{{ souvenir.description }}</p>
      <div class="precio">{{ souvenir.price }}</div>

    </div>
  </div>


</section>
</template>
<script>
import { mapState } from 'vuex';
import { Souvenirs } from '@/services/Souvenirs.js';

export default {
  name: "souvenirs",
  components: {
  },
  data() {
    return {
      souvenirs: [],
      cargando: false
    };
  },
  computed: {
    ...mapState(['souvenirs'])
  },
  created: async function () {
    try {
      this.cargando = true;
      // Simulación de obtención de datos desde el archivo Souvenirs.js
      this.souvenirs = Souvenirs.getAllSouvenirs();
      console.log(this.souvenirs);
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
/* #products__cards{
    background-color: #F2F0EB ;
    padding: 2rem;
  } */

.container {
  padding-top: 5rem;
  padding-bottom: 3rem;
  text-align: end;
}
.container p{
  text-align: end;
  padding-top: 10rem;
}
button {
  background-color:#2c3e50;
}

.carousel-inner a {
color: #c5c5c5;
}
#heroSouvenir{
  height: 20rem;
  position: relative;
}
#heroSouvenir img{
  width: 100%; 
  height: inherit;
  object-fit: cover; 
  position: absolute;
  left: 0;
  /* top: 0; */
}

#heroSouvenir p {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 70%;
  left: 50%;
  color: black;
  font-size: large;
}
.descripcion {
  text-align: center;

}
@media screen  and (min-width: 768px) {
  #heroSouvenir{
  height: 30rem;
}
}
</style>
