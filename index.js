const  readFileSync  = require('fs').readFileSync

const createServer = require('http').createServer // importing a function to create a server-импортируем функцию для создания сервера

const server = createServer(handleRequest) // create server-создаем сервер	
const port = 3000 // задаем порт



server.listen(port, informAboutStart) // starting the server, pass the  port of the notification and function about the start of the server-запускаем сервер, передаем порт и функцию оповещения о старте работы сервера 

/*require('http').createServer((request, response) => response.end('Hello, world!')).listen(3000)  //it's short version create server*/


function informAboutStart() {
	console.log('Server started at http://localhost:' + port )
} // the function informing about the start of the server-функция информирование о старте работы сервера

function handleRequest(request, response) {
	let url = request.url
	if (url == '/') url = '/index'
	const file = readFileSync('.' + url)
	response.end(file)
} // processing request function-функция запроса на обработку