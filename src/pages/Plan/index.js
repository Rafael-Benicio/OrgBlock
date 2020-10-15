function Plan(){
    const div=document.createElement('div')
    const button=document.createElement('button')
    const header=document.createElement('header')

    button.innerHTML="/"
    
    setAtr(div,'id','rem')
    setAtr(button,'class','btn radM white pdM edPlan')
    setAtr(button,'onClick','BtRota("Planed")')

    child(header,Back())
    child(header,button)
    child(div,header)
    return div
}