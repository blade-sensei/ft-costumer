# Multi HTTP Request URL

Package used to fetch data from a list of URLs.

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

### Test/Debug Local

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


### Publishing a new version to npm

- Respect commit rules
- Make git version tag and bump package version

```bash
npm publish
```

