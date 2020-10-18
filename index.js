const { app ,BrowserWindow , globalShortcut} = require('electron')
const express=require('express')
const apl=express()
const cors=require('cors')
const bodyParser=require('body-parser')

apl.use(express.static(__dirname+'/public'));


apl.use(cors())
apl.use(bodyParser.urlencoded({extended:false}))
apl.use(bodyParser.json())
// apl.use(express.json())

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

apl.get('/Busca',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/Busca/index.html")
})

apl.get('/BuscaCard',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/BuscaCard/index.html")
})

apl.get('/CtCria',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/CreateCard/index.html")
})

apl.get('/GpCria',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/CreateGroup/index.html")
})

apl.get('/',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/Home/index.html")
})

apl.get('/Plan',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/Plan/index.html")
})

apl.get('/Planed',(req,res)=>{
    res.sendFile(__dirname+"/src/pages/Planed/index.html")
})


apl.listen(8888)