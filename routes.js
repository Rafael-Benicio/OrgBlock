const express=require('express')
const {nanoid}=require('nanoid')
const Lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const routes= express.Router()

const db = Lowdb(new FileSync('./data/db.json'))

db.defaults({ database:[] }).write()


routes.get('/Busca',(req,res)=>{
    res.sendFile(__dirname+"/pages/Busca/index.html")
})

routes.get('/BuscaCard',(req,res)=>{
    res.sendFile(__dirname+"/pages/BuscaCard/index.html")
})

routes.get('/CtCria',(req,res)=>{
    res.sendFile(__dirname+"/pages/CreateCard/index.html")
})

routes.post('/CtCria',(req,res)=>{
    const data=req.body
    console.log(data);
})

routes.get('/GpCria',(req,res)=>{
    res.sendFile(__dirname+"/pages/CreateGroup/index.html")
})

routes.post('/GpCria',(req,res)=>{
    const grupo=req.body.nomeGrupo
    const gps=db.get('database').value()
    let tr=true

    gps.map(gp=>{
        if(gp.grupo===grupo){
            tr=false
        }
    })
    
    if(tr){
          db.get('database').push({
              grupo,id:nanoid()
          }).write()
    }
    
})

routes.get('/',(req,res)=>{
    res.sendFile(__dirname+"/pages/Home/index.html")
})

routes.get('/passGrupo',(req,res)=>{
    const gp=db.get('database').value()
    res.json(gp)
})

routes.get('/Plan',(req,res)=>{
    res.sendFile(__dirname+"/pages/Plan/index.html")
})

routes.get('/Planed',(req,res)=>{
    res.sendFile(__dirname+"/pages/Planed/index.html")
})

module.exports=routes
