<!-- <template>
    <table>
  <thead>
    <tr>
      <th>Domo</th>
      <th>Precio</th>
      <th>Ranking</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(domo) in domosOrdenados" :key="domo.id">
      <td>{{ domo.name }}</td>
      <td>{{ domo.price }}</td>
      <td>{{ domo.ranking }}</td>
      <td><button @click="aumentarRanking(ranking)">Me gusta</button></td>
    </tr>
  </tbody>
</table>
</template>
<script>
import { mapState } from 'vuex';
import { Domos } from '@/services/Domos.js';


export default {

  name: "ranking", 
  
  name: "domos",
  
  components: {
   },
  data() 
  {
    return {
      domos: [
        {
          id: 1,
          name: 'Domo Aurora Austral',
          price: 80000,
          ranking: 0 //Inicialmente la puntuación es 0
        },
        {
          id: 2,
          name: 'Domo Tierra Magica',
          price: 60000,
          ranking: 0 //Inicialmente la puntuación es 0
        },
        {
          id: 3,
          name: 'Domo Valle del Murta',
          price: 40000,
          ranking: 0 //Inicialmente la puntuación es 0
        }
        ]
      
    }
  },
    computed: {
      ...mapState(['domos', 'ranking']),
    },
    created:  async function () {
    try {
      this.cargando = true;
      // Simulación de obtención de datos desde el archivo Domos.js
      this.domos = Domos.getAllDomos();
      console.log(this.domos);
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
    {
    domosOrdenados(ranking)
    {
    return this.domos.sort((a, b) => b.ranking - a.ranking);
  }
}
},
methods: 
  {
    aumentarRanking(ranking) 
    {
    this.domos[ranking].ranking++;
  }
}
}


</script> -->