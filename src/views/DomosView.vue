<template>
  <div id="carouselDomos" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselDomos" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselDomos" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselDomos" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" v-for= "domo in domos" :key="domo.id" >
      <img :src= "domo.image" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ domo.name }}</h5>
        <p>{{ domo.description }}</p>
        <a :href="'#'+domo.id">Ver más</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselDomos" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselDomos" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section v-for="domo in domos" class="container" :id ="domo.id">
  <div class="row">
    <h2>{{ domo.name }}</h2>
    
  </div>
  <div class="row">
    <div class="col">
      <img :src= "domo.image" class="d-block w-100" alt="...">
    </div>
    <div class="col">
      <p class="descripcion">{{ domo.description }}</p>
      <div class="precio">{{ domo.price }}</div>
      <button type="button" data-bs-toggle="modal" data-bs-target="#modalReserva" class="btn btn-primary">Reservar</button>
    </div>
  </div>
</section>

<div class="modal" id="modalReserva" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="text-center">
             
              <!-- FORMULARIO-->
            </div>
            <button type="button" class="close ms-auto" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h5 class="modaltexto">NOS ESTAMOS PREPARANDO PARA TI</h5>
          <div class="modaltextobody">
            Disculpa las molestias, estamos preparando un mejor paraiso. Queremos darte lo mejor. 
          
          <!-- Mostrar el formulario solo si showForm es verdadero -->
          <form v-if="showForm">
          <div class="form-group">
            <label for="name">Nombre y Apellido</label>
            <input type="text" class="form-control" v-model="nombre" id="name" placeholder="Nombre y Apellido">
          </div>

          <label for="mail">Tu correo</label>
          <input type="email" class="form-control" v-model="mail" id="mail" placeholder="name@example.com">

          <label for="selection">¿Quieres recibir info sobre actividades y tours?</label>
          <select class="form-control" id="selection">
          <option>Si, por favor!</option>
          <option>No, gracias, en otro momento.</option>
          </select>

          <button  @click.prevent="validarDatos()" type="submit">Enviar</button>
          <!-- Mostrar un mensaje de confirmación solo si showForm es falso -->
        </form>
      </div>
      <!-- Mostrar un mensaje de confirmación solo si showForm es falso -->
    <!-- <div (v-else)>
      <p>Formulario enviado correctamente!</p>
    </div> -->
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">CERRAR</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { Domos } from '@/services/Domos.js';

export default {
  name: "domos",
  components: {
  },
  data() {
    return {
      domos: [],
      cargando: false,
      nombre: "",
      mail:"",
      showForm: true // mostrar el formulario por defecto
    };
  },
  computed: {
    ...mapState(['domos'])
  },
  created: async function () {
    try {
      this.cargando = true;
      // Simulación de obtención de datos desde el archivo Domos.js
      this.domos = Domos.getAllDomos();
      console.log(this.domos);
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    validarDatos() {	
      if (!this.nombre){
        // console.log("faltatexto");
        alert("Falta el nombre");
      }
      else if (!this.mail){
        // console.log("faltatexto");
        alert("Falta el correo");
      }
      else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.mail)){
        // console.log("faltatexto");
        alert("Correo no válido");
      }
      else {
        // Todas las validaciones han pasado, el formulario se envió correctamente
        this.showForm = false;
        alert("Formulario enviado correctamente!");
  }
      
    
  }
}
}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;1,300&display=swap');
#carouselDomos img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.container {
  padding-top: 5rem;
  padding-bottom: 3rem;
  text-align: end;
}
.container p{
  text-align: justify;
  padding-top: 4rem;

}
  button {
    background-color:#2c3e50;
}

.carousel-inner a {
color: #c5c5c5;
}

</style>