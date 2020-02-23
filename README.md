# Multi HTTP Request URL

Package used to fetch data from a list of URLs.

## Documentation

The documentation is [here](./docs/markdown/README.md)

## How to use

```bash
// install
$ npm install @blade-sensei/ft-request-url
```

```javascript

// import
const request = require('@blade-sensei/ft-request-url');

request.multiFetchUrl(urls).then(results => {})

You can also use it with async await
```

## Contribute

### Test Local

> Use npm command 'link', instead of publishing your package to be used in another project/app/package we can create a local install with link command.

Go to your package root and use:
```bash
npm link
// maybe we will need admin permission
```

Then go to your project 'A' and run the command
```bash
npm link ft-request-url

//ft-request-url is the package name in package.json
```

### Debug

You can use VS Debug and create a launch.json configuration, this will debug all the code in the test.js
This is a first way to debug, maybe it can be improve

```json
{
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/test.js",
            "skipFiles": [
                "<node_internals>/**"
            ]
}
```

### Build documentation

Official documentation markdown
```bash
$ npm run build:doc
```

if you need a pretty local documentation (html) with better UI run

```bash
$ npm run build:doc:html
```

### Publishing a new version to npm

- Respect commit rules
- Make git version tag and bump package version
- build documentation

```bash
npm publish --access public
```

