function Busca(){
const Groups=['rafael','benicio','souza','rafael','benicio','souza','rafael','benicio','souza','rafael','benicio','souza']
const div=document.createElement('div')
const dvGroup=document.createElement('div')

Groups.map(car=>{
    const dv=document.createElement('div')
    const a=document.createElement('a')
    a.innerHTML=car
    setAtr(dv,'class','btn radM just cdTam mrgG')
    setAtr(a,'class','white dec pdMax')
    setAtr(a,'href','/BuscaCard')
    
    dv.appendChild(a)
    return dvGroup.appendChild(dv)
})

setAtr(div,'id','rem')
setAtr(dvGroup,'class','lisCards')

child(div,Back('/'))
child(div,dvGroup)

return div
}

document.getElementById('root').appendChild(Busca())
