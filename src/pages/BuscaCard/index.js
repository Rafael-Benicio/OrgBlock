function BuscaCards(){
    const Groups=['rafael','benicio']
    const div=document.createElement('div')
    const dvGroup=document.createElement('div')

    Groups.map(car=>{
        const dv=document.createElement('div')
        const button=document.createElement('button')
        button.innerHTML=car
        setAtr(button,'class','btn radM cdTam white mrgG')
        setAtr(button,'onClick','BtRota("Plan")')
        dv.appendChild(button)
        return dvGroup.appendChild(dv)
    })

    setAtr(div,'id','rem')
    setAtr(dvGroup,'class','lisCards')

    child(div,Back())
    child(div,dvGroup)
    return div
}