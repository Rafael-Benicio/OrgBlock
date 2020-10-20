const api=require('./services/api')
api.get('/passGrupo').then(response=>{
    const res=response.data
    const dv=tagN('div')
            
    res.map((gp,i)=>{
        const p=tagN('p')
        const x=tagN('strong')

        p.innerHTML=gp.grupo
        x.innerHTML="X"

        const text=gp.id

        setAtr(p,'class','white fntM btn pdMin')
        setAtr(x,'class','dele right')
        setAtr(x,'onclick','delet('+i+')')

        child(p,x)

        return child(dv,p)
    })

    setAtr(dv,'class','tel')

    child(document.getElementById('root'),dv)
            
})