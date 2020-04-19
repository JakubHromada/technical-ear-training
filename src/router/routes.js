import Vue from 'vue'
import Router from 'vue-router'
import TrainingSelection from '../components/TrainingSelection'
import FilterCutOffTraining from '../components/FilterCutOff/FilterCutOffTraining'
import EqMatchingTraining from '../components/EqMatching/EqMatchingTraining'
import FilterCutOffSettings from '../components/FilterCutOff/FilterCutOffSettings'

Vue.use(Router)

const routes = [
    { 
      path: '/', 
      name: "Training Selection", 
      component: TrainingSelection 
    },
    {
      path: '/filterCutOffTraining',
      name: "Filter Cut Off Training",
      component: FilterCutOffTraining
    },
    {
      path: '/eqMatchingTraining',
      name: "EQ Matching Training",
      component: EqMatchingTraining
    },
    {
      path: '/filterCutOffSettings',
      name: "Filter Cut Off Settings",
      component: FilterCutOffSettings
    }
  ]

export default new Router({
    mode: 'hash',
    routes: routes
})