function CreateCard(){
    const div=document.createElement('div')
    const form=document.createElement('form')
    const NGroup=document.createElement('p')
    const NCard=document.createElement('p')

    const Select=tagN('selection')
    const InputG=document.createElement('input')
    const Datalist=tagN('datalist')

    const InputC=document.createElement('input')
    const button=document.createElement('button')
    const prop="white fntG mrgG"
    const int="mrgInput radM pdMin fntP row"

    NGroup.innerHTML="Nome do Grupo"
    NCard.innerHTML="Nome do Cartão"
    button.innerHTML="Criar Cartão"

    setAtr(form,'class','form')
    setAtr(form,'action','/CtCria')
    setAtr(form,'onsubmit',' CriaNovoCard()')

    setAtr(NGroup,'class',prop)
    setAtr(NCard,'class',prop)
    setAtr(InputC,'class',int)
    setAtr(InputC,'id','inpC')


    setAtr(InputG,'class',int)
    setAtr(InputG,'id','inpG')

    setAtr(button,'class','btn radM white pdP mrgInput mrgG')

    setAtr(InputC,'maxLength','50')
    setAtr(InputG,'maxLength','50')

    setAtr(InputC,'name','newCard')
    setAtr(InputG,'name','newGroup')
    setAtr(InputG,'list','opt')

    setAtr(Datalist,'id','opt')

    setAtr(button,'type','submit')
    
    child(div,Back('/')) 
    child(div,form)
    child(form,NGroup)
    child(form,Select)
    child(Select,InputG)
    child(Select,Datalist)
    child(form,NCard)
    child(form,InputC)
    child(form,button)
    setAtr(div,'id','rem')
    return div
}

document.getElementById('root').appendChild(CreateCard())
