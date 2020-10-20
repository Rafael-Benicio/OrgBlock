function CreateGroup(){
    const div=document.createElement('div')
    const form=document.createElement('form')
    const NGroup=document.createElement('p')
    const InputG=document.createElement('input')
    const button=document.createElement('button')
    const prop="white fntG mrgG"
    const int="mrgInput radM pdMin fntP row"
    NGroup.innerHTML="Nome do Grupo"
    button.innerHTML="Criar Grupo"
    setAtr(form,'class','form')
    setAtr(form,'action','/GpCria')
    setAtr(form,'onsubmit','CriaNovoGrupo()')
    setAtr(NGroup,'class',prop)
    setAtr(InputG,'class',int)
    setAtr(InputG,'id','nomeGrupo')
    setAtr(button,'class','btn radM white pdP mrgInput mrgG')
    setAtr(InputG,'maxLength','50')
    setAtr(button,'type','submit')
    
    child(div,Back('/'))
    child(div,form)
    child(form,NGroup)
    child(form,InputG)
    child(form,button)
    setAtr(div,'id','rem')
    return div
}

document.getElementById('root').appendChild(CreateGroup())
