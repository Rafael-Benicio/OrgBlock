function Busca(){
const api=require('./services/api')
api.get('/passGrupo').then(response=>{
    const res=response.data
    const Groups=res.map(gp=>{
        return gp.grupo
    })

    const div=document.createElement('div')
    const dvGroup=document.createElement('div')
    
    Groups.map((car,i)=>{
        const dv=document.createElement('div')
        const a=document.createElement('a')
        a.innerHTML=car
        setAtr(dv,'class','btn radM just cdTam mrgG')
        setAtr(a,'class','white dec pdMax')
        setAtr(a,'onclick','PassaGrupo('+i+')')
        setAtr(a,'href','/BuscaCard')
        
        dv.appendChild(a)
        return dvGroup.appendChild(dv)
    })
    
    setAtr(div,'id','rem')
    setAtr(dvGroup,'class','lisCards')
    
    child(div,Back('/'))
    child(div,dvGroup)

    document.getElementById('root').appendChild(div)
})}

Busca()

