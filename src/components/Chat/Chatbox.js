import './chatbox.css'

export default function Chatbox(item, index){
    const eve =  require("../../static/eve.png")

    if (index % 2 === 0){
      return <div className='nlp_chat_container'>
        <img className='eve' src={eve} alt='eve'/>
        <div className='nlp_chatbox'>{item}</div>
      </div>
    } else {
      return <div className='user_chat_container'>
        <div className='user_chatbox'>{item}</div>
      </div>
    }
}