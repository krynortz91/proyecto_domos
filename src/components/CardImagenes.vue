<template>
    <!-- Modal -->
    <div class="modal" @click="cerrar">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ ave.name.latin }}</h2>
          <button class="close" @click="cerrar">&times;</button>
        </div>
        <div class="modal-body">
          <img :src="ave.images.main" :alt="ave.name" />
          <p>{{ ave.habitat }}</p>
          <!-- <p>{{ ave.name }}</p> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardImagen',
    props: {
      ave: {
        type: Object,
        required: true
      }
    },
    methods: {
      cerrar() {
        this.$emit('cerrar');
      }
    },
    updated(){
        console.log(this.ave);
    }
  };
  </script>
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .modal-body img {
      width: 200px;
      height: 200px;
      object-fit: cover;
}
</style>


<!-- <template> -->
    <!-- comentado -->
    <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->
<!-- comentado -->

<!-- Modal -->
<!-- <div class="modal" @click="cerrar">
      <div class="modal-content">
        <div class="modal-header">
          <h2>titulo</h2>
          <button class="close" @click="cerrar">&times;</button>
        </div>
        <div class="modal-body">
          <p>descripcion</p>
          <p>name</p>
        </div>
      </div>
    </div>
</template>
<script> -->

<!-- export default {
    name: 'CardImagenes',
    props:{
        ave: {
            type: String,
            required: true
        }
    },
    methods: {
        cerrar() {
        // this.$emit('cerrar');
        }
    },
    created:{
        function(){

            console.log(this.aveInf.jsn);
        }
    }
};
</script> -->



