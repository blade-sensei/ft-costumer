module.exports = {
    src: [
      './dist/lib/',
    ],
    mode: 'file',
    includeDeclarations: true,
    out: './docs/markdown',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: 'none',
    name: 'my-cool-project',
    ignoreCompilerErrors: true,
    plugin: 'typedoc-plugin-markdown',
    listInvalidSymbolLinks: true,
  };