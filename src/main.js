const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Optional, for future use
        },
    });

    // Load the built HTML file from the dist folder
    win.loadFile(path.join(__dirname, '../dist/index.html'));
}

// Quit the application when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});

// Create a window when the application is activated
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Start the application and create the window
app.whenReady().then(createWindow);
