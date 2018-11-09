# svgo-unique-id

If you are inlining SVGs on a web page, and they use `id`s internally, these `id` attributes must be unique across the entire page. This problem is exacerbated if you are using svgo to minify those `id`s. svgo-unique-id is a plugin for svgo that automatically prefixes the ids with a short hash of the contents of the entire svg. This hash is stable, and very unlikely not to be unique.

## Installation

```
yarn add svgo-unique-id
```

## Usage

```js
new SVGO({
  plugins: [{
    uniqueID: require('svgo-unique-id'),
  }]
})
```

## License

MIT
