function Home(){
    const div=document.createElement('div')
    const dvCr=document.createElement('div')
    const dvBus=document.createElement('div')

    const btBusca=document.createElement('button')
    const btCtCria=document.createElement('button')
    const btGpCria=document.createElement('button')

    const Prop='btn radM pdM white'

    btBusca.innerHTML="Buscar"
    btCtCria.innerHTML="Cria Cartão"
    btGpCria.innerHTML="Cria Grupo"

    setAtr(btBusca,'class',Prop)
    setAtr(btCtCria,'class',Prop) 
    setAtr(btGpCria,'class',Prop)
    setAtr(btBusca,'onClick','BtRota("Busca")')
    setAtr(btCtCria,'onClick','BtRota("CreateCard")')
    setAtr(btGpCria,'onClick','BtRota("CreateGroup")')
    setAtr(dvBus,'class','bus')
    setAtr(dvCr,'class','cr')
    setAtr(div,'id','rem')

    child(dvBus,btBusca)
    child(dvCr,btCtCria)
    child(dvCr,btGpCria)
    child(div,dvBus)
    child(div,dvCr)
    
    const res=div
    
    return res;
}