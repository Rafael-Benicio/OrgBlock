function Plan(){
    const div=document.createElement('div')
    const button=document.createElement('a')
    const header=document.createElement('header')

    button.innerHTML="/"
    
    setAtr(div,'id','rem')
    setAtr(button,'class','btn radM dec white pdM edPlan')
    setAtr(button,'href','/Planed')
    GetList()
    child(header,Back('/BuscaCard'))
    child(header,button)
    child(div,header)
    return div
}

document.getElementById('root').appendChild(Plan())
