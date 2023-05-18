<template> 
  <div class="navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png"  alt="" width="60"></a>
        <p class="title">Domos Patagonia Viva</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link class="link-nav px-3" to="/">Inicio</router-link>
            <router-link class="link-nav px-3" to="/domos">Domos</router-link>
            <router-link class="link-nav px-3" to="/souvenirs">Souvenirs</router-link>
            <router-link class="link-nav px-3" to="/aves">Aves</router-link>
            <!-- <router-link class="link-nav px-3" to="/ranking">Ranking</router-link> -->
           
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>

  </template>
      
  <script>

  //import { mapGetters, mapMutations } from 'vuex';
  // import { auth } from "@/auth/auth.service";

  export default {
      name: 'NavBar',
      //  computed:{
      // //...mapGetters(['loginTrue']),
      //  },
      // methods:{
      //     ...mapMutations(['cambiaEstadoLoginFalse']),
      //     async logout() {
      //         try {
      //             await auth.signOut();
      //             this.$store.state.cursos=[]
      //             this.$store.state.usuarioConectado=''
      //             this.cambiaEstadoLoginFalse();
      //             this.$router.push('/');
                  
      //         } catch(error){
      //             console.log(error)
      //         }
      //     }
      // }
  };

</script>

<style scoped>
#login{
  cursor: pointer;
}
.navbar{
  list-style-type: none;
  background-color: #F2F0EB ;
  /* background-color: #DAB6FC; */
  color: #F2F0EB ;
  padding: .5rem 2rem;
  font-size: 16px;
  margin: 0%;
  font-family: 'Poppins', sans-serif;
}
.title {
  font-size: 20px;
  font-weight: 300;
  font-style:initial;
  margin: 0%;
  color: black;
}
.link-nav{
  text-decoration: none;
  color: #DAB6FC;
  transition: all 0.5s ease;
}
.link-nav:hover{
  color: rgb(115, 112, 112);
  transform: scale(1.2);
}
.list-item {
  cursor: pointer;
}
/* .btn-logout{
  text-decoration: none;
  color: azure;
  border: none;
  transition: all 0.5s ease;
  background-color: black;
}  */
.btn-logout:hover{
  transform: scale(1.2);
}
.btn.btn-no{
  background-color: #82daf0;
  color: azure;
}
.btn.btn-no:hover{
  background-color: #71c3d7;
  color: azure;
}
.btn.btn-si{
  background-color: rgb(0, 10, 0);
  color: azure;
}
.btn.btn-si:hover{
  background-color: rgb(1, 51, 1);
  color: azure;
}
#exampleModal{
  font-family: 'Poppins', sans-serif;
}
</style>