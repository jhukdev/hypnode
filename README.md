A super fast and lightweight (**579bytes** gzipped) utility function to build HTML node trees, either directly or from transpiled JSX.

# Getting Started

To install `hypnode`, you can use one of the following in your project:

`yarn add hypnode` or `npm install hypnode`

`hypode` can be used in one of two ways, either as a target for JSX transpilation, or directly using the exposed `h` function. It's exported as ES6, so if you need to support older environments, you'll need to add a transpilation stage to ES5 in your build tasks.

The `h` function can be imported in one of the following ways:

```
import { h } from 'hypnode';
```

```
const { h } = require('hypnode');
```

# Direct Usage

Once imported, use the function to generate your tree of DOM Nodes. The function takes 3 arguments, the last two of which are optional:

```
h([type]: string | Function, [attributes]?: object, [children]?: array[]);
```

## Simple Example

The code below:

```
const result = h('div', { title: 'A DIV!' }, [
   h('h1', { class: 'title' }, 'Hypnode'),
   h('p', { id: 'text'}, 'My text value'),
);

console.log(result.outerHTML);
```

Will produce the following:

```
<div title="A DIV!">
   <h1 class="title">Hypnode</h1>
   <p id="text">My text value</p>
</div>
```

# JSX Elements

`hypnode` can be used with JSX to provide a more familiar API when building DOM structures. This will need a transpilation step added, see below for examples.

## TypeScript

Transpilation of `JSX` is provided out of the box by custom factories (TypeScript 1.8+), to apply this, add the following to your `tsconfig.json` file:

```
"compilerOptions": {
   "jsx": "react",
   "jsxFactory": "h",
   ...
}
```

This tells the TypeScript compiler to convert all JSX elements into function calls, in this case using our exported `h` function. You'll still need to import the `h` function in every file where you're using `JSX`.

# Event Binding

`hypnode` provides a set of properties for you to apply DOM events. All native events are supported, formatted in camelCase and prefixed with `on`. For example:

```
h('a', { onClick: (ev) => console.log(ev) }, 'Click Here');
```

# Element References

If you need access to a particular node in your tree, use the `ref` property. For example:

```
let myElement;
...
h('div', { id: 'container' }, [
   h('p', { ref: (el) => myElement = el }, 'Lorem ipsum dolor sit amet, consectetur')
]);
```

# Components

`hypnode` can be used to create re-usable, functional components, below is a simple example:

```
function Button({ class = '', children }) {
    return h('a', { class: `button ${class}` }, children);
}
...
const root = document.getElementById('root');
const button = h(Button, { class: 'big' }, buttonText);

root.appendChild(button);
```

# TypeScript

This utility was created with TypeScript and comes pre-bundled with a definition file.
