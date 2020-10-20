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