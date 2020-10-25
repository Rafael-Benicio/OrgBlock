function setAtr(name, atr, at){
    name.setAttribute(atr,at)
}

function child(va, apnd){
    va.appendChild(apnd)
}

function Back(way){
    const button=document.createElement('a')
    button.innerHTML="<<"
    setAtr(button,'class','btn radM dec pdM white backPos fntM')
    setAtr(button,'href',way)     
    return button
}        

function Ent1(){
    document.getElementById('Menu1').style.visibility="visible"
}

function Out1(){
    document.getElementById('Menu1').style.visibility="hidden"
}

function Ent2(){
    document.getElementById('Menu2').style.visibility="visible"
}

function Out2(){
    document.getElementById('Menu2').style.visibility="hidden"
}

function tagN(tag){
    return document.createElement(tag)
}

function delet(e){
    const api=require('./services/api')
    api.get('/passGrupo').then(response=>{
        const res=response.data
        res.map((gp,i)=>{
            if(i==e){
                api.delete(`/GpCria/${gp.id}`)
                document.location.reload(true);
            }  
})})}

function reload(){
    document.location.reload(true);
}

async function CriaNovoGrupo(){
    const api=require('./services/api')
    const nomeGrupo=document.getElementById('nomeGrupo').value
    const data={
        nomeGrupo
    }

    try {
        const response= await api.post('/GpCria',data)
        alert(`Seu ID de acesso: ${response.data.id}`)

        
    } catch(err){ 
        alert(`Ouve um erro, ${err}`)
        
    }

}

async function CriaNovoCard(){
    const api=require('./services/api')
    const newGrupo=document.getElementById('inpG').value
    const newCard=document.getElementById('inpC').value

    const data={
        newGrupo,
        newCard
    }
    console.log(data);
    try {
        const response= await api.post('/CtCria',data)
    } catch(err){ 
        alert(`Ouve um erro, por favor, verifique o grupo`)
        
    }

}


async function PassaGrupo(grupo){
    const api=require('./services/api')
    api.get('/passGrupo').then(response=>{
        const res=response.data
        const Groups=res.map((gp)=>{
            return gp.grupo
        })

        const gp=Groups.map((gp,i)=>{
            if(i===grupo){
                api.post('/Busca', {nomeG:gp})
            }
        })
})}


async function PassaLista(card){
    console.log(card);
    const api=require('./services/api')
    api.post('/BuscaCard', {indexCard:card})
}

function GetList(){
    const api=require('./services/api')
    api.get('/passList').then(response=>{
        const res=response.data
        console.log(res);
    })
}

function GeText(){
    const root=document.getElementById('root')
    const api=require('./services/api')

    api.get('/passList').then(response=>{
        const res=response.data
        const dv=tagN('div')

        setAtr(dv,'class','heaText pdP bor Pad')
        
        res.map(ne=>{
            const div=tagN('div')
            ne.map(te=>{
                const text=tagN('textarea')
                text.innerHTML=te
                setAtr(text,'class','infText pdMin')
                child(div,text)
            })
            setAtr(div,'class','leng')
            child(dv,div)
        })

        child(root,dv)       
})}

function DellColl(){
    const api=require('./services/api')
    const divText=document.querySelector('.leng')
    const text=document.querySelectorAll('.infText')
    const nodeDiv=document.querySelector('.Pad').childNodes.length
    const nodeDivText=divText.childNodes.length
    let valor=[]
    let cont=0

    for(let i=0;i<nodeDiv;i++){
        valor.push([])
    }

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<nodeDivText;e++){
            valor[i].push(text[cont].value)
            cont+=1
        }   
    }

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<nodeDivText;e++){
            valor[i].length=nodeDivText-1
            cont+=1
        }   
    }

    console.log(valor);

    if(valor[0].length==0){
        console.log('oi');
    }else{
        api.post('/delColl',{newList:valor})
    }
    
    reload()
}

function AddColl(){
    const api=require('./services/api')
    const divText=document.querySelector('.leng')
    const text=document.querySelectorAll('.infText')
    const nodeDiv=document.querySelector('.Pad').childNodes.length
    const nodeDivText=divText.childNodes.length
    let valor=[]
    let cont=0

    for(let i=0;i<nodeDiv;i++){
        valor.push([])
    }

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<nodeDivText;e++){
            valor[i].push(text[cont].value)
            cont+=1
        }   
    }

    console.log(nodeDivText);

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<1;e++){
            valor[i].push("")
        }   
    }

    console.log(valor);

    api.post('/addColl',{newList:valor})

    reload()
}

function AddRow(){
    const api=require('./services/api')
    const divText=document.querySelector('.leng')
    const text=document.querySelectorAll('.infText')
    const nodeDiv=document.querySelector('.Pad').childNodes.length
    const nodeDivText=divText.childNodes.length
    let valor=[]
    let cont=0

    for(let i=0;i<nodeDiv;i++){
        valor.push([])
    }

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<nodeDivText;e++){
            valor[i].push(text[cont].value)
            cont+=1
        }   
    }

    valor.push([])

    for(let e=0;e<nodeDivText;e++){
        valor[valor.length-1].push("")
    }   
    
    console.log(valor);

    api.post('/addRow',{newList:valor})    

    reload()
}

function DellRow(){
    const api=require('./services/api')
    const divText=document.querySelector('.leng')
    const text=document.querySelectorAll('.infText')
    const nodeDiv=document.querySelector('.Pad').childNodes.length
    const nodeDivText=divText.childNodes.length
    let valor=[]
    let cont=0

    for(let i=0;i<nodeDiv;i++){
        valor.push([])
    }

    for(let i=0;i<nodeDiv;i++){
        for(let e=0;e<nodeDivText;e++){
            valor[i].push(text[cont].value)
            cont+=1
        }   
    }

    valor.length= valor.length-1

    console.log(valor);

    
    if(valor.length==0){
        console.log('oi');
    }else{
        api.post('/dellRow',{newList:valor})
    }

    reload()

}


addEventListener('keydown',(e)=>{
    const key=e.keyCode
    if(key==13){
        AddColl()
    }
    if(key==8){
        DellColl()
    }
    if(key==187){
        AddRow()
    }
    if(key==189){
        DellRow()
    }
    console.log(key);
})
