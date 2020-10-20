const { app ,BrowserWindow , globalShortcut} = require('electron')

const bodyParser=require('body-parser')
const express=require('express')
const routes=require('./routes')
const cors=require('cors')
const apl=express()

apl.use(express.static(__dirname+'/public'));


apl.use(cors())
apl.use(express.urlencoded({extended:false}))
apl.use(express.json())

function createWindow(){
    const win =new BrowserWindow({
        width:1080,
        height:720,
        title:"OrgBlock",
        webPreferences:{
            nodeIntegration:true,
        }
    })
    win.loadURL('http://localhost:8888/')
}

app.whenReady().then(createWindow)

apl.use(routes)

apl.listen(8888)