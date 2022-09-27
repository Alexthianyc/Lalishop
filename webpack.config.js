const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //traemos el plugin de css

module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js', // nombre del archivo js resultante
        publicPath: '/' //ruta de los archivos
    },
    mode: 'development', //modo de desarrollo
    resolve: { // extensión de archivos a tomar en cuenta
        extensions: ['.js', '.jsx'],
        alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@containers': path.resolve(__dirname, './src/containers/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@icons': path.resolve(__dirname, './src/assets/icons/'),
			'@logos': path.resolve(__dirname, './src/assets/logos/'),
			'@routes': path.resolve(__dirname, './src/routes/'),
		}
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                exclude: /node_modules/, // siempre excluir node modules 
                use: [
                    {
                        loader: 'html-loader' // loader a usar
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i, // extensiones css
                use: [
                    "style-loader", // loader a usar
                    "css-loader", // loader a usar
                    "sass-loader" // loader a usar
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: 'asset',
            }
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({ // instanciamos el plugin para css
            filename: '[name].css', // nombre del archivo resultante
        })
    ],
    devServer: { // configuración del servidor de desarrollo
        historyApiFallback: true, // siempre redirigir a index.html
        static: {
            directory: path.join(__dirname, 'public'),
            },
          compress: true,
          port: 3000,
    }
}