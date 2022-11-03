import React, { useState, useEffect, useRef} from 'react'
import Navbar from './components/Navbar/Navbar';
import Chatbox from './components/Chat/Chatbox';
import './App.css';

function App() {
  const [chatItems, setChatItems] = useState(['Welcome to EVE. How can I help you?'])
  const [message, setMessage] = useState('')
  const myRef = useRef(null)

  const send_icon_address = require('./static/send.png')

  const handleChange = (event) => {
    //Update the value of message each time it changes.
    setMessage(event.target.value)
  }

  const handleClick = (event) => {
    if (message !== ''){
      // Display User Input First
      setChatItems(oldChatItems => [...chatItems, message, '...'])
      // Then fetch the nlp backend response and add it to the chat items
      fetch(`http://127.0.0.1:5000/?text=${message}`) //Fix this url with the user input
      .then(response => response.json())
      .then(json => setChatItems(oldChatItems => [...chatItems, message, json.response]))
      event.preventDefault() // Prevent the HTML form behavior
      setMessage('') // Reset the change
    }
  }

  const executeScroll = () => {
    if (myRef) {
      myRef.current?.scroll({ top: myRef.current?.scrollHeight, behavior: 'smooth' })
    }
  }

  useEffect(()=>{
    executeScroll()
  }, [chatItems]) 

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className='chat_container' ref={myRef}>
          {chatItems.map((item, index)=>{
            const chatbox = Chatbox(item, index)
            return chatbox
          })}
        </div>
        
        <form className='userinput' onSubmit={handleClick}>
          <input
            type="chat"
            id="message"
            name="message"
            className="form-control"
            placeholder="Chat with EVE!"
            onChange={handleChange}
            value={message}
            required
            autoFocus
          />
          <button className='submit' onClick={handleClick}>
            <img className='send_icon' src={send_icon_address} alt='send_icon'/>
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
