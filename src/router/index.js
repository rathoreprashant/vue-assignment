import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/account/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Account
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/preferences',
      name: 'Preferences',
      component: () => import('../components/account/Preferences.vue')
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: () => import('../components/account/signIn.vue')
    },
    {
      path: '/integrations',
      name: 'Integrations',
      component: () => import('../components/account/Integrations.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/account/Contact.vue')
    },

    //Personal Network
    {
      path: '/personalOverview',
      name: 'PersonalOverview',
      component: () => import('../components/PersonalNetwork/PersonalOverview.vue')
    },
    {
      path: '/personalWorkspace',
      name: 'PersonalWorkspace',
      component: () => import('../components/PersonalNetwork/PersonalWorkspace.vue')
    },
    {
      path: '/personalTeamWorkspaces',
      name: 'PersonalTeamWorkspaces',
      component: () => import('../components/PersonalNetwork/PersonalTeamWorkspaces.vue')
    },
    {
      path: '/plans&Payment',
      name: 'Plans&Payment',
      component: () => import('../components/PersonalNetwork/Plans_Payment.vue')
    },
    //Company Network
    {
      path: '/companyOverview',
      name: 'Overview',
      component: () => import('../components/CompanyNetwork/Overview.vue')
    },
    {
      path: '/members',
      name: 'Members',
      component: () => import('../components/CompanyNetwork/Members.vue')
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: () => import('../components/CompanyNetwork/Distribution.vue')
    },
    {
      path: '/companyTeamWorkspaces',
      name: 'TeamWorkspaces',
      component: () => import('../components/CompanyNetwork/TeamWorkspaces.vue')
    },

  ]
})

export default router
