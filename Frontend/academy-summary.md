
# VUE.JS

## The VueJs instance

- Is kind of the middleman between our DOM - Our HTML code, and our business logic.
  We pack all our business logic into this vue instance.

## The Template

Veu.js creates a template based on our HTML code, stores that internally and then uses that template to create the **_real html code_** which then is rendered as the DOM.

`The **HTML** code that we write, is not the one that is running in the browser in the end. There is a layer in the middle, and this layer is the vue.js instance, which takes out HTML code, creates a template, renders it (e.g string manipulation) and outputs the final HTML code which get renders in the DOM.`

### How VueJS Updates the DOM

Javascript if fast whereas accessing the DOM is very slow. Therefore we wouldn't want to do any unnecessary changes to the DOM.

- Each property we set up has its own watcher
- vue uses an extra layer: **The Virtual DOM**
  - A representation/copy of the real DOM
  - Parsed in Javascript - very quick to be access
- Vue.js checks for changes and creates a **new Virtual DOM** - **_The current Template_**
- Then it checks for differences between the **_'New' Virtual DOM (aka. The 'Template')_** to the **_'Old' Virtual DOM (aka. The 'Virtual DOM')_**
- Then it updates only the changed properties in the real DOM, and the Virtual DOM, that now has again an updated state of the real DOM

All of these makes Vue.JS very performance and fast

## computed

Everything that is stored in the computed property, can be treated as a data property

## The VueJs instance Lifecycle

[Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

1. beforeCreated()
2. created()
3. beforeMount()
4. mounted()
5. beforeUpdate()
6. updated()
7. beforeDestroy()
8. destroyed()

- **Compiling the Template**:
  - Insert all the values for the string manipulation
  - Set up all the bindings
  - Converting it to real HTML code, but still behind the scenes

### mounted

When the compiled template is written to the real DOM.

# Development Workflow

## What can be the improvements in using Development Workflow

- Build process that optimized our code
  - Using ES6 features and still have code that runes in the browsers (Supports ES5)
- Development Server:
  - Code serves from a server - more realistic (file:// vs http://) - eg. live server
- Multiple imports and packages - want to bundle and build them
- Compile Single File Templates

  - Compile = transform to Javascript
  - Compile during the development
  - On our machine instead on the browser
  - Compiler removed from VueJS Package -> 30% reduced package size
  - Still re-render, but complied files are ready

## Vue CLI

It allows us to quickly create a new Vue Projects from a couple of prepared templates.

```
npm install -g vue-cli
```

### New project

```
> vue init webpack-simple <project-name>

To get started
    cd <project-name>
    npm install
    npm run dev
```

This will start the development server we will use, and will keep the process running, with recompiling and reload the project on each change.

### Folder structure

**_.babelrc_**
babel config file, allowing us to write ES6 code, the next version of JS, and transpile it to ES5 code, so that it will be supported in all browsers

**_.gitignore_**
For git version control system

**_index.html_**
The file which actually get serves. \
In the body we got:

- div with the id "app"
- script import - which import our built Vue.JS application
  - As oppose to our previous example, the code isn't executed immediately
  - We ae using **webpack** to build our files
    - ES6 to ES5
  - The output will be in /dist/build.js file
  - This file will be a bundle of our different files
  - We don't see it at the moment since this file will be created when we will build out project for production

**_package.json_**
All packages are only for development purpose.
The production dependency is only `vue`.

- `vue-loader` - allows us to use single file templates

### **_src/_**

**_.vue_**

- Single File Template
- Compiled during the build process
- Will get compiled to Javascript code
  - Don't have to shipped the compiler
  - Unlock some features ( not available on native DOM as template as oppose to JS)

**_main.js_**

- The first file which get executed
- Importing vue and creating instance

```
import Vue from 'vue'
import App from './App.vue'

new Vue(
    el: '#app',
    render: h => h(app)
})
```

This tells vue.js:

- Take the place in the DOM specified with the el property (#app)
- But don't inferred the template
- Instead, override it with the render code - _h_ a function provided by Vue.JS. This function takes a Vue.JS template to be rendered.
- _h(App)_ is our app from the App.vue file - **This is are actual vue application**

### Single-File-Template

Structured from:

1. Template (required)
2. Script - Holding our vue.js code for this template (required)
3. Styling (optional)

### Summary

- In our build process with webpack , the .vue file will get compiles to JS code file
- Then we can render it in the main.js render function `h => h(App)`
- render i.e override the content selected with the el, would replace everything inside the app block.

### The object in the .vue file

```
<script>
    export default {

    }
</script>
```

Whatever we export here is a vue **_in stance_**, therefore it has the same properties

# Components

- One root element restriction
  - The Template element dosn't count, since it will be removed in the end.
  - Wrap all your code with a div element
- Data prop must return a function
- Component Registration

  - naming: PascalCase
  - First --> import:

    ```
    import <componentFileName> from <component_file_path>
    ```

  - **Local registration** - registration of a child component inside the current one:
  Using another vue-instance attribute: `components`, its an object that contain mapping between imported components and their tag-name ``` '<tag-name>' : <imported-component> ```

    ```
    import Navbar from './Navbar.vue';

    export default {
        components: {
            'Navbar' :  Navbar
        }
    }
    ```

  - **Global registration** - Registration of component to be available globally around the app:

    ```
    // on main.js

    import Navbar from './Navbar.vue';

    Vue.component('Navbar' :  Navbar);

    new Vue({ ....})
    ```

## Components communication

How can we pass data between components?

### Parent To Child

- Using the **props** property, we can get data from the parent into the child

  - In child : inside component script tag

    ```
    <script>
    export default {

      props: {
          firstData: String,
          secondData: Number,
          otherData: Boolean
      },

    }
    </script>
    ```

  - In parent: inside the component tag

    ```
    <Template>

    .....

    <child-component-name
      firstData="some string data"
      v-bind:secondData="numberOf"
      :otherData="someFlag">
    </child-component-name>

    </Template>
    ```

- All props are valid data attributes, like in the data property

  - Attention!! Do not change it! \
    Why? Read the next section

- One Way Data Flow

  - All props form a one-way-down binding between the child property and the parent one
  - When the parent property updates, it will flow down to the child
    - But not the other way around
  - In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value
  - This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console

- [prop name casing](https://vuejs.org/v2/style-guide/#Prop-name-casing-strongly-recommended) -
  Prop names should always use camelCase during declaration (js: 'somePropName'), but kebab-case in templates (HTML: 'some-prop-name')

**_Read the props documenataion for more important data_** [props_doc](https://vuejs.org/v2/guide/components-props.html)

### Child To Parent

- The parent can choose to listen to any event on the child component instance with `v-on`

  - Just as we would with a native DOM event: like click, hover etc.
  - For each event rw attach an event-handler (some method)

    ```
    <Template>

       <child-component-name v-on:some-event-name="someMethodName">
    </child-component-name>

    </Template>
    ```
    ```
      <script>
      ...
      methods:{
        someMethodName(<optionalVal>) {
            ....
        }
      }
      </script>
    ```

- Then the child component can emit an event on itself by calling the built-in \$emit method

  - [See examples](https://vuejs.org/v2/api/#vm-emit)

    ```
      <button v-on:click="$emit('some-event-name')">
      <button v-on:click="$emit('some-event-name', 'some-val')"> // Emitting a value with the event

      // Or call it by yourself
      methods: {
        fireEvent(){
          this.$emit('some-event-name');
        }
      }

    ```

# App File Structure

- Guidelines
  - All component are under thr components folder
  - Shared component across other components (navbar, btns etc.), will be in the shared folder
    - A side note:
      - navbar is used across all app, so it will be a global component
      - But not all shared components are global, for example, a reusable table/dashboard/buttons etc.
  - Each main parent component will be in its own folder
    - Each child component of it, will be in that folder either
    - Child components that are tightly coupled with their parent should include the [parent component name as a prefix](https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended)
    - [Order of words in component names](https://vuejs.org/v2/style-guide/#Order-of-words-in-component-names-strongly-recommended)
    - Component name casing in templates
      - In most projects, component names should always be PascalCase in single-file components
      - [The advantages](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended)
  - Contains images, icons and other static data

```

- src
-- assets
-- components
--- shared
---- header.vue
---- footer.vue
--- feature1
---- feature1_comp1.vue
---- feature1_comp2.vue
--- recipe
---- preview.vue
---- user_data.vue

```
