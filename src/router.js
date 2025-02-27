import { createRouter, createWebHistory } from 'vue-router'
import TermsAndConditionComponent from './components/TermsAndConditions.vue'
import MigrateComponent from './components/Migrate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/terms-and-conditions',
      name: 'TermsAndCondition',
      component: TermsAndConditionComponent
    },
    {
      path: '/migrate',
      name: 'migrate',
      component: MigrateComponent
    }
  ]
})

export default router