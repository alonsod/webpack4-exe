
import React, {useState} from 'react'
import data from "./data.json"
import Loader from "./loader"
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)
function App(){
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders)
    }

    return (
        <div>
            <p className="sass">
                Esto es una clase de sass
            </p>
            <p className="less">
                Esto es una clase de less
            </p>
            <p className="stylus">
                Esto es una clase de stylus
            </p>
            <p className="post-css">
                Esto s una clase de postcss
            </p>
            aplicación hecha en React.js!
            <video src={video} width={360} controls poste={logo} />
            
            <p>

                <img src={logo} alt="logo" width={40} />
            </p>
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