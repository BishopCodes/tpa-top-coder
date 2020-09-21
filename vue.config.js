module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Transcript Processing Application',
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash]',
        },
        localsConvention: 'camelCaseOnly',
      },
      less: {
        globalVars: {
          primary: '#db3725',
        },
      },
    },
  },
};
