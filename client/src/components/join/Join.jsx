import React, {useRef} from "react"
import io from 'socket.io-client'

const Join = ({setChatVisibility, setSocket}) =>{

    const usernameRef = useRef()

    const handleSubmit = () =>{

        const username = usernameRef.current.value
        if(!username.trim()) return

        //connexão com o nosso backend
        const socket = io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
           
    }

    return(
        <div>
            <h1>Join</h1>
            <input type="text" ref={usernameRef} placeholder="Nome do Usuario"/>
            <button onClick={() => handleSubmit()}>Enviar</button>
        </div>
    )
}

export default Join