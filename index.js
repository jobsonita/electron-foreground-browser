const { app, BrowserWindow, globalShortcut } = require('electron')

const config = require('./config')

let win

function createWindow() {
  win = new BrowserWindow({
    width: config.width,
    height: config.height,
    titleBarStyle: 'default',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL(config.url)
}

function toggleDevTools() {
  win.webContents.toggleDevTools()
}

function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}

app.whenReady().then(createWindow).then(createShortcuts)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
