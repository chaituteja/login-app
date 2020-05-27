module.exports = {
    pages: {
      'index': {
        entry: './src/Pages/Home/main.js',
        template: 'public/index.html',
        title: 'Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      'register': {
        entry: './src/Pages/Register/main.js',
        template: 'public/index.html',
        title: 'Register',
        chunks: [ 'chunk-vendors', 'chunk-common', 'register' ]
      }
    }
  }