import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('¿Quién ese pokemon?')

search(id)
    .then((data)=>{
        console.log('si hubo pokemon')
        render(data)
    })
    .catch(() => {
        console.log('no hubo pokemon')
    })
/* import text from './text'

text()

if(module.hot){
    module.hot.accept('./text.js', function(){
        console.log('se actualizado en caliente')
        text()
    })
} */