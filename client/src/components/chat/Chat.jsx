import { useEffect, useRef, useState } from "react"

const Chat = ({socket}) =>{

    const [messageList, setMessageList] = useState([])
    const messageRef = useRef()

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current, data])
        })

        return () => socket.off('receive_message')
    }, [socket])

    const handleSubmit = () =>{

        const message = messageRef.current.value
        if(!message.trim()) return

        socket.emit('message', message)

        clearInput()
    }

    const clearInput = () =>{
        messageRef.current.value = ''
    }

    return(
        <div>
            <h1>Chat</h1>

            {
                messageList.map((message, index) =>(
                    <p key={index}>{message.author}:{message.text}</p>
                ))
            }

            <input type="text" ref={messageRef} placeholder="Mensagem" />
            <button onClick={() =>{handleSubmit()}}>Enviar</button>
        </div>
    )
}

export default Chat