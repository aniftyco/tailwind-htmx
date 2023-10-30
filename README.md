# tailwind-htmx

> Variants for styling htmx classes with Tailwind CSS

## Getting Started

### Installation

Install the plugin from npm:

```sh
npm install -D tailwind-htmx
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-htmx'),
    // ...
  ],
};
```

### Configuration

You can change the default class names to generate with the following options:

```js
// tailwind.config.js

module.exports = {
  ...,
  plugins: [
    require('tailwind-htmx')({
      classNames: {
        settling: 'htmx-settling';
        request: 'htmx-request';
        swapping: 'htmx-swapping';
        added: 'htmx-added';
      };
    }),
  ],
};
```

### Usage

```html
<div>
  <button hx-post="/example">Post It!</button>
  <img id="spinner" class="invisible htmx-request:visible" src="/img/bars.svg" />
</div>
```
