const api=require('./services/api')
api.get('/passGrupo').then(response=>{
    const res=response.data
    const dv=tagN('div')
    const datalist=document.getElementById('opt')
            
    res.map((gp,i)=>{
        const p=tagN('p')
        const x=tagN('strong')
        const option=document.createElement('option')

        p.innerHTML=gp.grupo
        x.innerHTML="X"

        setAtr(option,'value',gp.grupo)
        child(datalist,option)

        setAtr(p,'class','white fntM btn pdMin')
        setAtr(x,'class','dele right')
        setAtr(x,'onclick','delet('+i+')')

        child(p,x)
        child(dv,p)


    })

    setAtr(dv,'class','tel')

    child(document.getElementById('root'),dv)
            
})