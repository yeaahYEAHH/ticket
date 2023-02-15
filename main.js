const path = require('path'),
    url = require('url'),
    {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 700, 
        height: 500,
        icon: __dirname + "/img/favicon.svg"
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.on('close', () =>{
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})