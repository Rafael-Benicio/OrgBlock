function Planed(){
    const div=document.createElement('div')
    const dvAl=document.createElement('div')
    const dvPl=document.createElement('div')
    const header=document.createElement('header')
    const plus=document.createElement('button')
    const less=document.createElement('button')
    const dvM={
        dv1:document.createElement('div'),
        dv2:document.createElement('div'),
        dv3:document.createElement('div'),
        dv4:document.createElement('div')
    }
    const btM={
        bt1:document.createElement('button'),
        bt2:document.createElement('button'),
        bt3:document.createElement('button'),
        bt4:document.createElement('button')
    }
    const bt={
        btTop:document.createElement('button'),
        btMid:document.createElement('button'),
        btBut:document.createElement('button'),
        btLeft:document.createElement('button'),
        btCent:document.createElement('button'),
        btRight:document.createElement('button')
    }
    const img={
        imMid:document.createElement('img'),
        imTop:document.createElement('img'),
        imBut:document.createElement('img'),
        imCent:document.createElement('img'),
        imLeft:document.createElement('img'),
        imRight:document.createElement('img')
    }
    const way='../src/icons/'
    const mt='btn white radM pdP som fntP'
    const al='btn radP larAl'
    const bvr='btnn white fntP pdMin'

    plus.innerHTML="+"
    less.innerHTML="-"
    btM.bt1.innerHTML="Add Row"
    btM.bt2.innerHTML="Add Coll"
    btM.bt3.innerHTML="Del Row"
    btM.bt4.innerHTML="Del Coll"

    setAtr(div,'id','rem')
    setAtr(dvAl,'class','dvAl')
    setAtr(dvPl,'class','dvPl')
    setAtr(header,'class','just hea')

    setAtr(plus,'class',mt)
    setAtr(plus,'onmouseover','Ent1()')
    setAtr(less,'class',mt)
    setAtr(less,'onmouseover','Ent2()')
    setAtr(less,'id','lss')

    setAtr(btM.bt1,'class',bvr)
    setAtr(btM.bt2,'class',bvr)
    setAtr(btM.bt3,'class',bvr)
    setAtr(btM.bt4,'class', bvr)

    setAtr(dvM.dv1,'class','just')
    setAtr(dvM.dv2,'class','just')
    setAtr(dvM.dv3,'class','just')
    setAtr(dvM.dv4,'class','just')
    setAtr(dvM.dv3,'id','Menu1')
    setAtr(dvM.dv3,'onmouseout','Out1()')
    setAtr(dvM.dv4,'id','Menu2')
    setAtr(dvM.dv4,'onmouseout','Out2()')

    setAtr(bt.btBut ,'class',al)
    setAtr(bt.btCent ,'class',al)
    setAtr(bt.btLeft ,'class',al)
    setAtr(bt.btMid ,'class',al)
    setAtr(bt.btRight ,'class',al)
    setAtr(bt.btTop,'class',al)

    setAtr(img.imBut,'src',way+'but.png')
    setAtr(img.imMid,'src',way+'mid.png')
    setAtr(img.imTop,'src',way+'top.png')
    setAtr(img.imLeft,'src',way+'left.png')
    setAtr(img.imCent,'src',way+'center.png')
    setAtr(img.imRight,'src',way+'right.png')
    
    child(dvM.dv3,btM.bt1)
    child(dvM.dv3,btM.bt2)

    child(dvM.dv4,btM.bt3)
    child(dvM.dv4,btM.bt4)
    
    child(dvM.dv1,dvM.dv3)
    child(dvM.dv2,dvM.dv4)

    child(dvM.dv1,plus)
    child(dvM.dv2,less)

    child(dvPl,dvM.dv1)
    child(dvPl,dvM.dv2)

    child(bt.btTop,img.imTop)
    child(bt.btMid,img.imMid)
    child(bt.btBut,img.imBut)
    child(bt.btLeft,img.imLeft)
    child(bt.btCent,img.imCent)
    child(bt.btRight,img.imRight)

    child(dvAl,bt.btTop)
    child(dvAl,bt.btMid)
    child(dvAl,bt.btBut)
    child(dvAl,bt.btLeft)
    child(dvAl,bt.btCent)
    child(dvAl,bt.btRight)

    child(header,Back())
    child(header,dvAl)
    child(header,dvPl)

    child(div,header)
    return div
}