# gridsome-source-example

This is an example Gridsome source plugin

It uses Harry Potter data to create a Gridsome collection.

Check out tutorial video here: https://www.youtube.com/watch?v=V50mHzzFFaA
Visit https://timbenniks.nl for more.

## Implementation

In `gridsome.client.js`:

```js
module.exports = {
  siteName: "Harry Potter",
  plugins: [
    {
      use: "gridsome-source-harrypotter",
      options: {
        endpoint_url: "http://hp-api.herokuapp.com/api/characters",
      },
    },
  ],
  templates: {
    Character: [
      {
        path: "/:id",
      },
    ],
  },
};
```
