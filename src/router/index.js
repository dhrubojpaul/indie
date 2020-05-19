import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Research from '../views/Research.vue'
import ResearchItem from '../views/ResearchItem.vue'
import Publications from '../views/Publications.vue'
import People from '../views/People.vue'
import PeopleBase from '../views/PeopleBase.vue'
import PeopleHome from '../views/PeopleHome.vue'
import PeoplePublications from '../views/PeoplePublications.vue'
import PeopleProjects from '../views/PeopleProjects.vue'
import PeopleCV from '../views/PeopleCV.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/research', name: 'Research', component: Research
  },
  {
    path: '/research/:id/', name: 'ResearchItem', component: ResearchItem,
  },
  {
    path: '/publications', name: 'Publications', component: Publications
  },
  {
    path: '/people', name: 'People', component: People
  },
  {
    path: '/people/:id/', name: 'PeopleBase', component: PeopleBase,
    children: [
      {
        path: '',
        component: PeopleHome
      },
      {
        path: 'publications',
        component: PeoplePublications
      },
      {
        path: 'projects',
        component: PeopleProjects
      },
      {
        path: 'cv',
        component: PeopleCV
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
