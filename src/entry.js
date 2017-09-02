// document.write(require("./content.js"));

//import Vue components
import CustomerInfo from './components/CustomerInfo.vue'
import Bumper from './components/Bumper.vue'
import Quote from './components/Quote.vue'
import Confirmation from './components/Confirmation.vue'

//create the routes and link each componenent
//(multiple components can be used in a single route, with prop "name"
//attached on the html router-view)
var routes = [
  {path: '/home', component: CustomerInfo },
  {path: '/bumper', component: Bumper },
  {path: '/quote', component: Quote },
  {path: '/confirmation', component: Confirmation }
]

//initialize the router with defined routes
var router = new VueRouter( {routes} )

//initialize the vue, and link it to a element
var app = new Vue({
  el: '#app',
  router: router,
  data: {
    message: 'Hello Vue.js!',
  }
})

//Default route to the home page
router.push('home')