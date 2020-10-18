function Home(){
    const div=document.createElement('div')
    const dvCr=document.createElement('div')
    const dvBus=document.createElement('div')

    const btBusca=document.createElement('a')
    const btCtCria=document.createElement('a')
    const btGpCria=document.createElement('a')

    const Prop='btn radM dec pdM white'

    btBusca.innerHTML="Buscar"
    btCtCria.innerHTML="Cria Cartão"
    btGpCria.innerHTML="Cria Grupo"

    setAtr(btBusca,'class',Prop)
    setAtr(btCtCria,'class',Prop) 
    setAtr(btGpCria,'class',Prop)
    setAtr(btBusca,'href','/Busca')
    setAtr(btCtCria,'href','/CtCria')
    setAtr(btGpCria,'href','/GpCria')
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

        document.getElementById('root').appendChild(Home())
