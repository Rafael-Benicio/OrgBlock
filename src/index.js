let route=''
function App(){
    const app=document.getElementById('root')
    
    if(route==='' || route==='Home')app.appendChild(Home())
    if(route==='Busca')app.appendChild(Busca())
    if(route==='BuscaCards')app.appendChild(BuscaCards())
    if(route==='CreateCard')app.appendChild(CreateCard())
    if(route==='CreateGroup')app.appendChild(CreateGroup())
    if(route==='Plan')app.appendChild(Plan())
    if(route==='Planed')app.appendChild(Planed())

}

App()