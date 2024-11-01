const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const iconPath = path.join(__dirname, 'th3cyb3rhub-fav.icns');

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false
        },
    });

    win.loadFile(path.join(__dirname, '../dist/index.html'));
}

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.whenReady().then(createWindow);
