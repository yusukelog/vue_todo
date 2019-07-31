module.exports = {
    module:{
      rules:[
        {
          test:/\.css$/,
          use:[
            "style-loader",
            "css-loader"
          ]
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }