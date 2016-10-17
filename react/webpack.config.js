module.exports = {
    entry: "./public/film.jsx",
    output: {
        path:"./public",
        filename: "bundle.js"
    },
    module:{
    	loaders:[{
          loader: 'babel',test:/\.jsx$/,
	      query:
          {
	        presets: ['es2015',"react","stage-1"]
	      },
        }]
    },
    resolve:{
        extensions:['','.js',',jsx','/index.js','/index.jsx']
    }/*,
    devServer:{
        proxy: {
            '/api':{
                target:'http://localhost:8070/friends',
                secure:false
            }
        }
    }*/
};
