const Utility=()=>{
    function setAtr(name, atr, at){
        name.setAttribute(atr,at)
    }

    function child(va, apnd){
        va.appendChild(apnd)
    }

    function Clear(){
        document.getElementById('rem').remove()
    }

    function BtRota(nova){
        if(route!==nova){
            Clear()
            console.log('chamou');
        }
        route=nova
        console.log(route);
        App()
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
}

module.exports=Utility;