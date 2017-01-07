export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/HomePage')
  },
  {
    path: '/counter',
    name: 'counter-page',
    component: require('components/CounterPage')
  },
  {
    path: '*',
    redirect: '/'
  }
]
