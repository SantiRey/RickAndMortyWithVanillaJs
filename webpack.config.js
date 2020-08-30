const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

//Modul to export .
module.exports = {
	entry: "./src/index.js",
	output: {
		//Donde se envía el proyecto estructurado y compilado listo para producción.
		path: path.resolve(__dirname, "dist"), //name of Target folder.
		filename: "main.js", //final file.
	},
	resolve: {
		extensions: [".js"], //Extensiones que vamos a utilizar.
	},
	module: {
		//Se crea un modulo con las reglas necesarias que vamos a utilizar.
		rules: [
			//Reglas
			{
				// Estructura de Babel
				test: /\.js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
				exclude: /node_modules/, //Excluimos la carpeta de node modules
				use: {
					loader: "babel-loader", //Utilizar un loader como configuración establecida.
				},
			},
		],
	},
	plugins: [
		//Establecemos los plugins que vamos a utilizar
		new HtmlWebpackPlugin(
			//Permite trabajar con los archivos HTML
			{
				inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
				template: "./public/index.html", //Dirección donde se encuentra el template principal
				filename: "./index.html", //El nombre que tendrá el archivo
			}
		),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./src/styles/styles.css",
					to: "",
				},
			],
		}),
	],
};
