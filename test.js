const { readFileSync } = require('fs')
const { createServer } = require('http')
const server = createServer(handleRequest)
const port = 3000

server.listen(port)

function handleRequest(request, response) {
	let url = request.url
	if (url == '/') {
		url = '/index.html'
	}
	const file = readFileSync('.' + url)
	response.end(file)
}
