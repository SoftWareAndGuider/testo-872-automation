const path = require('path').resolve()
const { app, BrowserWindow } = require('electron')

app.on('ready', createWindow)
app.on('window-all-closed', app.quit)

function createWindow () {
  const win = new BrowserWindow({ webPreferences: { nodeIntegration: true }, autoHideMenuBar: true })
  win.loadFile(path + '/src/index.html')
  win.webContents.openDevTools()
}
