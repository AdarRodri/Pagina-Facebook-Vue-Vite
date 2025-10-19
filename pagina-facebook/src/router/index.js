import { createRouter, createWebHistory } from 'vue-router'

import MuroView from '../views/MuroView.vue'
import InfoView from '../views/InfoView.vue'
import PhotosView from '../views/PhotosView.vue'
import BoxesView from '../views/BoxesView.vue'

const routes = [
  { path: '/', name: 'Muro', component: MuroView },
  { path: '/info', name: 'Info', component: InfoView },
  { path: '/photos', name: 'Photos', component: PhotosView },
  { path: '/boxes', name: 'Boxes', component: BoxesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
