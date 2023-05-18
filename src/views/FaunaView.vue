<template>
  <div>
    <div v-if="cargando" id="carga">
      <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>

    <section class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="ave in aves" :key="ave.sort">
          <router-link :to="`/aves/${ave.sort}`">
            <div class="card h-100" @click="mostrarCard(ave)">
              <img :src="ave.images.main" class="card-img-top" alt="..." />
              <p>{{ ave.name.latin }}</p>
              <p>{{ ave.name.english }}</p>
              <div class="card-body">
                <h5 class="card-title">{{ ave.name.spanish }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <CardImagenes v-if="cardSelected" :ave="cardSelected"  @cerrar="cerrarCard"/>
  </div>
</template>

<script>
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import CardImagenes from '../components/CardImagenes.vue';

export default {
  name: "fauna",
  components: {
    PulseLoader,
    CardImagenes
  },
  data() {
    return {
      aves: [],
      cargando: false,
      cantAves: 12,
      cardSelected: null
    };
  },
  methods: {
    async mostrarCard(ave) {
      try {
        const response = await axios.get(`https://aves.ninjas.cl/api/birds/${ave.uid}`);
        this.cardSelected = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    cerrarCard() {
      this.cardSelected = null;
    }
  },
  created: async function () {
    try {
      this.cargando = true;
      const response = await axios.get('https://aves.ninjas.cl/api/birds');
      this.aves = response.data.slice(0, this.cantAves);
      this.cargando = false;
    } catch (error) {
      console.error(error);
      this.cargando = false;
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: black;
}
</style>
<!-- <template>
  <div>
      <div v-if="cargando" id="carga">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
      </div>
</div>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="ave in aves" :key="ave.sort">
              <router-link :to="`/aves/${ave.sort}`">
                <div class="card h-100" @click="mostrarCard(ave.name.latin)">
                <img :src="ave.images.main" class="card-img-top" alt="...">   
                <p>{{ ave.name.latin }}</p>
                <p>{{ ave.name.english }}</p> -->
                <!-- comentado -->
              <!-- <img :src="ave.map.image" class="card-img-top" alt="..."> -->
              <!-- comentado -->
                <!-- <div class="card-body">
                <h5 class="card-title">{{ ave.name.spanish }}</h5> -->
                    <!-- comentado -->
                    <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                    <!-- <h4 class= "card-description">{{ ave.iucn.description }}</h4>  -->
                <!-- </div>
                </div>
              </router-link>
            </div>
        </div>
    </section>
    <CardImagenes :ave="cardSelected" v-if="cardSelected"></CardImagenes>
  </template>

<script>
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import CardImagenes from '../components/CardImagenes.vue';

export default {
  name: "fauna",
  components: {
    PulseLoader,
    CardImagenes
  },
  data() {
    return {
      aves: [],
      cargando: false,
      cardSelected: null
    };
  }, -->
  <!-- // comentado
//   computed: {
//     ...mapState(['domos'])
//   },

// created: async function () {
//     try {
//       this.cargando = true;
//       const response = await axios.get('https://aves.ninjas.cl/api/birds');
//       this.aves = response.data.slice(0, 42);
//       this.cargando = false;
//     } catch (error) {
//       // console.error(error);
//       this.cargando = false;
//     }
//   },

  // comentado
  // created: async function () {
  //   try {
  //       let promesa = await fetch('https://aves.ninjas.cl/api/birds');
  //       let birds = await promesa.json();
  //       this.aves = birds.slice(0, 42);
  //       console.log(this.aves);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
//   methods: {
//     mostrarCard(ave){
//       this.cardSelected=ave;
//     },
//     cerrarCard(){
//       this.cardSelected=null;
//     }
    
// }
// }

// </script> -->
