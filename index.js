const createServer = require('http').createServer // импортируем функцию для создания сервера

const server = createServer(handleRequest) // создаем сервер	
const port = 3000 // задаем порт



server.listen(port, informAboutStart) // запускаем сервер, передаем порт и функцию оповещения о старте работы сервера 

/*require('http').createServer((request, response) => response.end('Hello, world!')).listen(3000)*/


function informAboutStart() {
	console.log('Server started at http://localhost:' + port )
} // функция информирование о старте работы сервера

function handleRequest(request, response) {
	response.end('Hello, world!')
} // функция запроса на обработку