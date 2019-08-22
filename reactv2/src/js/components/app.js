
import React, {useState} from 'react'
import data from "./data.json"
import Loader from "./loader"

console.log(data)
function App(){
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders)
    }

    return (
        <div>
            aplicación hecha en React.js!
            <ul>
                {
                    loaderList.map(item=> <Loader {...item} key ={item.id} />
                    )
                }
            </ul>
            <button onClick={handleClick}>Show loaders</button>
        </div>
    )
}

export default App