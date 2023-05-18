import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DomosView from '../views/DomosView'
import SouvenirsView from '../views/SouvenirsView'
import FaunaView from '../views/FaunaView'
import CardImagenes from '../components/CardImagenes.vue'
// import RankingView from '../views/RankingView.vue'
import NotFound from '../views/NotFound'


const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/souvenirs',
    name: 'souvenirs',
    component: SouvenirsView
  },
  {
    path: '/domos',
    name: 'domos',
    component: DomosView
  },
  { 
    path: '/aves', 
    name: 'aves',
  component: FaunaView,
  children: [
    {
      path: ':id',
      name: 'cardimagenes',
      component: CardImagenes
    }
  ]

  },

  // { 
  //   path: '/aves/:id', 
  //   name: 'aves',
  // component: CardImagenes 
  // },
  

  //   children: [
  //     {
  //       path: ':id',
  //       name: 'cardimagenes',
  //       component: CardImagenes
  //     }
  //   ]
  // },

  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFoundView',
    component: NotFound
    } 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
