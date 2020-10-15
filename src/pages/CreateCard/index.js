function CreateCard(){
    const div=document.createElement('div')
    const form=document.createElement('form')
    const NGroup=document.createElement('p')
    const NCard=document.createElement('p')
    const InputG=document.createElement('input')
    const InputC=document.createElement('input')
    const button=document.createElement('button')
    const prop="white fntG mrgG"
    const int="mrgInput radM pdMin fntP row"

    NGroup.innerHTML="Nome do Grupo"
    NCard.innerHTML="Nome do Cartão"
    button.innerHTML="Criar Cartão"
    setAtr(form,'class','form')
    setAtr(NGroup,'class',prop)
    setAtr(NCard,'class',prop)
    setAtr(InputC,'class',int)
    setAtr(InputG,'class',int)
    setAtr(button,'class','btn radM white pdP mrgInput mrgG')
    setAtr(InputC,'maxLength','50')
    setAtr(InputG,'maxLength','50')
    setAtr(button,'type','submit')
    
    child(div,Back()) 
    child(div,form)
    child(form,NGroup)
    child(form,InputG)
    child(form,NCard)
    child(form,InputC)
    child(form,button)
    setAtr(div,'id','rem')
    return div
}