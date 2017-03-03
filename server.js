const express = require('express');
const appserver = express();
appserver.use(express.static('public'));
const url = require('url');
const path = require('path');


// Express stuff ===============================================
    
app.use(express.static('public'));

appserver.get('/', function (req, res) {
    res.send('alkjsdf');
})


var server = appserver.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('exemplo: ouvindo http://%s:%s', host, port)
})

// Electron stuff ==============================================

const {app, BrowserWindow} = require('electron')
const pug = require('electron-pug')

app.on('ready', () => {

    let win = new BrowserWindow()
    win.loadUrl(url.format({
        protocol: 'file';
        pathname: path.join(__dirname, 'views', 'teacher-screen.pug')
    }))

})

                
