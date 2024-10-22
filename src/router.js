import { createRouter, createWebHistory } from 'vue-router'
import TermsAndConditionComponent from './components/TermsAndConditions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/terms-and-conditionsss',
      name: 'TermsAndCondition',
      component: TermsAndConditionComponent
    },
    {
      path: '/migrate',
      component: TermsAndConditionComponent
    }
  ]
})

export default router