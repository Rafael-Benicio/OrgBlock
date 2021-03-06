const express=require('express')
const {nanoid}=require('nanoid')
const Lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const routes= express.Router()
let buscaCard=''
let buscaList=''

const db = Lowdb(new FileSync('./data/db.json'))

db.defaults({ database:[] }).write()


routes.get('/CtCria',(req,res)=>{
    res.sendFile(__dirname+"/pages/CreateCard/index.html")
})

routes.post('/CtCria',(req,res)=>{
    const Grupo=req.body.newGrupo
    const NewCard=req.body.newCard

    const cds=db.get('database').find({grupo:Grupo}).get('card').value()
    console.log(cds);
    let tr=true

    cds.map(cd=>{
        if(cd.NomeCard===NewCard){
            tr=false
        }
    })

    if(tr && NewCard!='' && NewCard[0]!=' '){
        db.get('database')
        .find({grupo:Grupo})
        .get('card')
        .push({NomeCard:NewCard,list:[]})
        .write()
}
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
    
    if(tr && grupo!='' && grupo[0]!=' '){
          db.get('database').push({
              id:nanoid(),grupo,card:[]
          }).write()
    }
    
})

routes.delete('/GpCria/:id',(req,res)=>{
    const {id}=req.params
    db.get('database')
    .remove({ id: id })
    .write()
})

routes.get('/',(req,res)=>{
    res.sendFile(__dirname+"/pages/Home/index.html")
})

routes.get('/Plan',(req,res)=>{
    res.sendFile(__dirname+"/pages/Plan/index.html")
})

routes.get('/Planed',(req,res)=>{
    res.sendFile(__dirname+"/pages/Planed/index.html")
})

routes.get('/Busca',(req,res)=>{
    res.sendFile(__dirname+"/pages/Busca/index.html")
})

routes.post('/Busca',(req,res)=>{
    buscaCard=req.body.nomeG
    console.log(buscaCard);
})

routes.get('/BuscaCard',(req,res)=>{
    res.sendFile(__dirname+"/pages/BuscaCard/index.html")
})

routes.post('/BuscaCard',(req,res)=>{
    buscaList=req.body.indexCard
    console.log(buscaList);
    const data=db.get('database').find({grupo:buscaCard}).get('card').value()
    data.map((cd,i)=>{
        if(i===buscaList){
            buscaList=cd.NomeCard
        }
    })
    console.log(buscaList);
})

routes.get('/passList',(req,res)=>{
    const data=db.get('database')
    .find({grupo:buscaCard})
    .get('card')
    .find({NomeCard:buscaList})
    .get('list')
    .value()
    res.json(data)
})

routes.get('/passGrupo',(req,res)=>{
    const gp=db.get('database').value()
    res.json(gp)
})

routes.get('/passCard',(req,res)=>{
    const cd=db.get('database').find({grupo:buscaCard}).get('card').value()
    res.json(cd)
})

routes.post('/delColl',(req,res)=>{
    const data=req.body.newList
    console.log(data);
    db.get('database')
    .find({ grupo:buscaCard})
    .get('card')
    .find({NomeCard:buscaList})
    .assign({ list: data})
    .write()
})

routes.post('/addColl',(req,res)=>{
    const data=req.body.newList
    console.log(data);
    db.get('database')
    .find({ grupo:buscaCard})
    .get('card')
    .find({NomeCard:buscaList})
    .assign({ list: data})
    .write()
})

routes.post('/addRow',(req,res)=>{
    const data=req.body.newList
    console.log(data);
    db.get('database')
    .find({ grupo:buscaCard})
    .get('card')
    .find({NomeCard:buscaList})
    .assign({ list: data})
    .write()
})

routes.post('/dellRow',(req,res)=>{
    const data=req.body.newList
    console.log(data);
    db.get('database')
    .find({ grupo:buscaCard})
    .get('card')
    .find({NomeCard:buscaList})
    .assign({ list: data})
    .write()
})


module.exports=routes
