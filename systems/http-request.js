const https = require('https')

exports.createSimpleHttpRequest = async (url, data, method, headers) => {  
    const nurl = new URL(url)

    if (url) {
        const options = {
            hostname: nurl.hostname.replace(/^www./, ''),
            path:  nurl.pathname,
            method: method,
            headers: headers
        }
    
        const request = https.request(options)
    
        request.on('error', error => {
            return error
        })
    
        request.write(JSON.stringify(data))
    
        request.end()
        
    } else {
        return console.error('Error extracting data from URL ' + url);
    }

}