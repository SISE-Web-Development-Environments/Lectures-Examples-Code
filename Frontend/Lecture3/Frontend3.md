# Routing

- Since we are dealing with single-page-application (SPA), as oppose to static/dynamic pages, we need a routing mechanism in the client, to route between the app views/pages
- Remember that these views exists locally in the app and we don't need to request them separately from the server as oppose to non-SPA apps
- The only requests we make to the server are for getting relevant data to present in the view

## How we use it

1. Installing the package vue-router

   `npm install --save vue-router`

2. On 'main.js':

   ```Javascript
   import Vue from 'vue'
   import VueRouter from 'vue-router'; // <----
   import App from './App';

   Vue.use(VueRouter); // <----

   new Vue({
       el: '#app',
       render: h => h(App)
   })
   ```

3. Routes settings:
   create routes.js under /src

   ```Javascript
   // ./src/routes.js

   // Import routes pages-components
   import Home from './components/Home.vue'
   import User from './components/user/User.vue'
   import Search from './components/recipe/Search.vue'

    export const routes =
    [
        { path: '/', component: Home},
        { path: '/user', component: User},
        { path: '/search', component: Search}
    ]

   ```

4. Import routes.js on main.js

   ```Javascript
   import Vue from 'vue'

   import VueRouter from 'vue-router';
   Vue.use(VueRouter);

   import routes from "./routes"; // <----
   const router = new VueRouter({ // <----
       routes
   })

   new Vue({
       el: '#app',
       router, // <----
       render: h => h(App)
   })
   ```

5. Tell the vue app, where the component of the active route should be loaded: with `<router-view></router-view>` - Single Page Application (SPA)

   ```HTML
   <!--On App.vue  -->

   <template>
       <div>
           .....

           <router-view></router-view>  <!-- The different routes components will be loaded between the router-view tags  -->
       <div>
   </template>

   ```

## The \# in url

- Without \#, each requested url will send a request to the server
- In SPA, we want to handle our routing in our SPA, we don't want to get to the server
- The \# sign, tell the app to handle the routing

www.myServer.com/#/user:

- **Before** the \# :
  - www.myServer.com - Sends to the server - return the index.js
- **After** the \# :
  - user - Is then handed over to our running JS application, which then (might) handle it

**_???? When do we want our request to get to the server?_**

### How to Navigate In Our App

```HTML
<router-link to="/user">User</router-link>
<router-link to="/search">Search</router-link>
```

- Using the `to="<path>"` attribute
- Clicking the link isn't reloading the page
- In the router-link there is a click listener
  It listens to the click, and loads the correct route

## Styling Active Links

- How can we use the active class of \<a> tags?

```HTML
<router-link to="/" tag="a" active-class="active" exact>Home</router-link>
```

Ofcourse we can also bind a path: `:to="some-path"`

Without the exact, the active class will look on the route prefix ('/')

## Navigating From Our Script

```HTML
<script>
    export default {
        methods() {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>
```

- push() - pushes the route to the route stack, for back and forward navigating

## Default Route

```Javascript
   export const routes =
    [
        { path: '/', component: Home},
        { path: '/user', component: User},
        { path: '/search', component: Search}
        {path: '*', redirect: '/'} // <--
    ]

```

## Passing Parameters

```Javascript
// routes.js

export const  routes= [
    {path: '', component: Home},
    {path: 'recipe/:id', component: Recipe} // Will redirect routes like /recipe/123
]
```

### How to retrieve such a dynamic parameter

- Access the route parameter with the \$route.params attribute.

- In our example: /recipe/123, `this.$route.params.id` is equal to `123`


# App State-Management

App state can can varied from a button, some div background state to the state of the current input value the user has entered.

When the number of components in application increases and their logic is getting more complex, managing the app state is getting harder.

In such cases we will implement a state-management pattern in the app, when is it especially useful?

- When different components acts on the same state ( sharing data between sibling components )
- When we use the same data in multiple different places in the app ( general/basic data that was retrieved from the server)


In the state-management, we don't want to do actions (modfy/write) dierctly to the states, instead we will use `actions` ( methods ) to modify states. This way we can follow which component, how and when changed a state.

[Usually wih Vue we will use the **Vuex** library for state-management](https://vuex.vuejs.org/)

## Follow is a simplified and naive implementation of state management

1. Create `store.js` file in /src

```Javascript
const state = {

  server_domain: "localhost:3000/",

  items: ["item1", "item2", "item3"]
};

const actions = {
    addItem: ()=>{
        state.items.push("newItem")
    }
}

export {state, actions}


```

2. Import the exported data shared_data object, and assign it as \$store variable in `main.js`

```Javascript
import { state as store_state, actions as store_actions } from "./store";

const state = Vue.observable(store_state)
const actions = Vue.observable(store_actions)
const store = { state: state, actions: actions }


Vue.prototype.$store = store;
```

3. Now we can get the shared data across the app with <br> `this.$store.state.<state_name>` :
```
this.$store.state.items // will return ["item1", "item2", "item3"]
```

4. And to do actions on the states <br>
`this.$store.actions.<action_name>(<params>)`.
```
this.$store.actions.addItem(new_item)
```


# Dynamic Styling

https://vuejs.org/v2/guide/class-and-style.html

# Using External Styling and Components

https://bootstrap-vue.org/docs#using-module-bundlers

# Color Schemes ideas

https://visme.co/blog/website-color-schemes/