import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';
import './App.css';

function App() {
  const [chatItems, setChatItems] = useState(['Welcome to EVE. How can I help you?'])
  const [items, setItems] = useState([])
  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState(message)

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    setChatItems(...chatItems, message)
    fetch(`http://127.0.0.1:5000/?text=hi`)
    .then(response => response.json())
    .then(json => setChatItems(...chatItems, json.message))
  }

  useEffect(()=>{
  }, [chatItems]) 

  return (
    <>
      <Navbar/>
      <div className="container">
        <ul>
          {chatItems}
        </ul>
        
        <div className='userinput'>
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
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
