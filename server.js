const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    let rootUrl = ['/', '/about', '/contact-me']
    let url = req.url;
    // const content = (200, {'Content-Type': 'text/html'})

    if (!(rootUrl.includes(url))) {
        res.end('<h1>Error 404!<h1/>')
    } else if (url === rootUrl[0]) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if (url === rootUrl[1]) {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else if (url === rootUrl[2]) {
        fs.readFile('contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }

})
.listen(8000) 