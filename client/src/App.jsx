import { useState } from 'react'
import './App.css'

import Chat from './components/chat/Chat'
import Join from './components/join/join'


function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    
      <div className="App">
        {
          chatVisibility ? <Chat socket={socket} /> : <Join setChatVisibility={setChatVisibility} setSocket={setSocket}/>
        }
        
      </div>
  )
}

export default App
