import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AddPlayer from '../views/AddPlayer.vue'
import EditPlayer from '../views/EditPlayer.vue'
import GalleryView from '../views/GalleryView.vue'
import AddGallery from '../views/AddGallery.vue'
import EditGallery from '../views/EditGallery.vue'
import EventView from '../views/EventView.vue'
import AddEvent from '../views/AddEvent.vue'
import EditEvent from '../views/EditEvent.vue'
import MatchResultView from '../views/MatchResultView.vue'
import AddMatch from '../views/AddMatch.vue'
import EditMatch from '../views/EditMatch.vue'
import NewsView from '../views/NewsView.vue'
import AddNews from '../views/AddNews.vue'
import EditNews from '../views/EditNews.vue'
import CategoryView from '../views/CategoryView.vue'
import AddAdmin from '../views/AddAdmin.vue'
import ManagementView from '../views/ManagementView.vue'
import AddManagement from '../views/AddManagement.vue'
import EditManagement from '../views/EditManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-player',
      name: 'add-player',
      component: AddPlayer
    },
    {
      path: '/edit-player/:id',
      name: 'edit-player',
      component: EditPlayer
    },
    {
      path: '/galleries',
      name: 'galleries',
      component: GalleryView
    },
    {
      path: '/add-gallery',
      name: 'add-gallery',
      component: AddGallery
    },
    {
      path: '/edit-gallery/:id',
      name: 'edit-gallery',
      component: EditGallery
    },
    {
      path: '/events',
      name: 'events',
      component: EventView
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEvent
    },
    {
      path: '/edit-event/:id',
      name: 'edit-event',
      component: EditEvent
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchResultView
    },
    {
      path: '/add-match',
      name: 'add-match',
      component: AddMatch
    },
    {
      path: '/edit-match/:id',
      name: 'edit-match',
      component: EditMatch
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/add-news',
      name: 'add-news',
      component: AddNews
    },
    {
      path: '/edit-news/:id',
      name: 'edit-news',
      component: EditNews
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryView
    },
    {
      path: '/add-admin',
      name: 'add-admin',
      component: AddAdmin
    },
    {
      path: '/managements',
      name: 'managements',
      component: ManagementView
    },
    {
      path: '/add-management',
      name: 'add-management',
      component: AddManagement
    },
    {
      path: '/edit-management/:id',
      name: 'edit-management',
      component: EditManagement
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token;
  if(to.name !== 'login' && !isLogin) {
    next({name: 'login'})
  } else if(to.name === 'login' && isLogin) {
    next({name: 'home'});
  } else {
    next();
  }
});

export default router
