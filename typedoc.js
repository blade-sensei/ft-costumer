module.exports = {
    src: [
      './dist/lib/',
    ],
    mode: 'file',
    includeDeclarations: true,
    out: './docs',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: './README.md',
    name: 'my-cool-project',
    ignoreCompilerErrors: true,
    plugin: 'typedoc-plugin-markdown',
    listInvalidSymbolLinks: true,
  };