# Routing

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
   import routes from "./routes";

   Vue.use(VueRouter);
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

```Javascript
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

- This usage has one problem
  - When routing same path, but with different parameters, we are using the same component
  - In that case the value of \$route.params.id will not updated
  - For example: from recipe/123 to recipe/111:
    `$route.params == 123` on both routes
  - We can use the **_'watch'_** property, to set a watcher on \$route's value changes
  ```Javascript
  export default {
      .....
      watch: {
          '$route'(to, from) {
              this.id = to.params.id;
          }
      }
  }
  ```

# Dynamic Styling

https://vuejs.org/v2/guide/class-and-style.html

# Using External Styling and Components

https://bootstrap-vue.org/docs#using-module-bundlers
