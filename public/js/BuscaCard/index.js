function Back(way){
    const button=document.createElement('a')
    button.innerHTML="<<"
    setAtr(button,'class','btn dec radM pdM white backPos fntM')
    setAtr(button,'href',way)

    return button
}        

function BuscaCards(){
    const Groups=['rafael','benicio']
    const div=document.createElement('div')
    const dvGroup=document.createElement('div')

    Groups.map(car=>{
        const dv=document.createElement('div')
        const button=document.createElement('a')
        button.innerHTML=car
        setAtr(dv,'class','btn radM just cdTam mrgG')
        setAtr(button,'class','pdMax white dec')
        setAtr(button,'href','/Plan')
        dv.appendChild(button)
        return dvGroup.appendChild(dv)
    })

    setAtr(div,'id','rem')
    setAtr(dvGroup,'class','lisCards')

    child(div,Back('Busca'))
    child(div,dvGroup)
    return div
}

document.getElementById('root').appendChild(BuscaCards())
