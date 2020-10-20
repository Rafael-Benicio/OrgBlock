function setAtr(name, atr, at){
    name.setAttribute(atr,at)
}

function child(va, apnd){
    va.appendChild(apnd)
}

function Back(way){
    const button=document.createElement('a')
    button.innerHTML="<<"
    setAtr(button,'class','btn radM dec pdM white backPos fntM')
    setAtr(button,'href',way)     
    return button
}        

function Ent1(){
    document.getElementById('Menu1').style.visibility="visible"
}

function Out1(){
    document.getElementById('Menu1').style.visibility="hidden"
}

function Ent2(){
    document.getElementById('Menu2').style.visibility="visible"
}

function Out2(){
    document.getElementById('Menu2').style.visibility="hidden"
}

function tagN(tag){
    return document.createElement(tag)
}
