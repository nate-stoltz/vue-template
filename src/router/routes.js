import Landing from '../views/Landing/Landing.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'

const routes = [
  { path: '/', name: 'landing', component: Landing },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact }
]

export default routes
