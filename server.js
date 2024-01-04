const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    let rootUrl = ['/', '/about', '/contact-me']
    let url = req.url;
    // const content = (200, {'Content-Type': 'text/html'})

    const displayFile = (page) => {
        fs.readFile(page, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }

    if (!(rootUrl.includes(url))) {
        res.end('<h1>Error 404!<h1/>')
    } else if (url === rootUrl[0]) {
        displayFile('index.html')
    } else if (url === rootUrl[1]) {
        displayFile('about.html')
    } else if (url === rootUrl[2]) {
        displayFile('contact-me.html')
    }

})
.listen(8000) 