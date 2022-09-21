const { app, BrowserWindow, ipcMain, screen } = require('electron')
const path = require('path')
const wallpaper = require('wallpaper')

let mainWindow

const NODE_ENV = process.env.NODE_ENV

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 730,
    show: false,
    frame: false,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  })

  mainWindow.loadURL(
    NODE_ENV === "development"
      ? 'http://localhost:5200'
      : `file://${path.join(__dirname, `../dist/index.html`)}`
  )

  if (NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }

  ipcMain.on('asynchronous-message', async (event, arg) => {
    const wallpaperString = await wallpaper.get()
    const screenConfig = {
      width: screen.getPrimaryDisplay().workAreaSize.width,
      height: screen.getPrimaryDisplay().workAreaSize.height, 
      wallpaper: wallpaperString,
      top: mainWindow.getPosition()[1],
      left: mainWindow.getPosition()[0]
    }
    event.sender.send('wallpaper', screenConfig);
    mainWindow.on('move', () => {
      screenConfig.top = mainWindow.getPosition()[1]
      screenConfig.left = mainWindow.getPosition()[0]
      event.sender.send('wallpaper', screenConfig);
    })
  });

  ipcMain.on("window-min", () => {
    mainWindow.minimize()
  });
  ipcMain.on("window-max", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
  ipcMain.on("window-close", () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow()

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})