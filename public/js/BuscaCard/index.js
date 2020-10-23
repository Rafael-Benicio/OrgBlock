function BuscaCards(){
    const api=require('./services/api')

    api.get('/passCard').then(response=>{
        const res=response.data
        const Groups=res.map(cd=>{
            return cd.NomeCard
        })
        const div=document.createElement('div')
        const dvGroup=document.createElement('div')
    
        Groups.map((car,i)=>{
            const dv=document.createElement('div')
            const button=document.createElement('a')
            button.innerHTML=car
            setAtr(dv,'class','btn radM just cdTam mrgG')
            setAtr(button,'class','pdMax white dec')
            setAtr(button,'onclick','PassaLista('+i+')')
            setAtr(button,'href','/Plan')
            dv.appendChild(button)
            return dvGroup.appendChild(dv)
        })
    
        setAtr(div,'id','rem')
        setAtr(dvGroup,'class','lisCards')
    
        child(div,Back('Busca'))
        child(div,dvGroup)
        document.getElementById('root').appendChild(div)
    })

}

BuscaCards()
