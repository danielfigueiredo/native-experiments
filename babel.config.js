module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx'
        ],
        root: ['.'],
        alias: {
          'experiments': './src/experiments',
          'app': './src/app',
          'utils': './src/utils',
        }
      }
    ]
  ],
};
