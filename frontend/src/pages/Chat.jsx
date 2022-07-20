import { useState } from 'react';
import {useParams} from 'react-router-dom';
import useWebSocket from '../hock/useWebSocket';
import './styles.css';

import ChatForm from '../components/ChatForm';
import { useRef } from 'react';

function Chat() {
   const { roomName } = useParams()
   const [connected, setConnected] = useState(false)
   const [messages, setMessages] = useState([])
   const webSocket = useRef()
   webSocket.current = useWebSocket(`/ws/chat/${roomName}/`, onOpen, onMessage, console.log)
   
   function onOpen (e) {
      setConnected(true)
   }

   function onMessage(e) {
      console.log(e);
      const data = JSON.parse(e.data)
      setMessages(prev => [...prev, data])
   }

   function sendMessage(input) {
      webSocket.current.send(JSON.stringify({
         message: input.current.value
      }))
      input.current.value = '';
   }

   console.log(messages);

   if (!connected) {
      return (
         <h1>Loading...</h1>
      )
   }
   
   return ( 
      <>
         <h1>Chat {roomName}</h1>
         <hr/>
         <div className="messages">
            {messages && messages.map(el => (
                  <div className='messages__item message'>
                     <div className="message__date">{el.date}</div>
                     <div className="message__content">{el.message}</div>
                  </div>
               )
            )
            }
         </div>
         <ChatForm onSubmit={sendMessage}/>
      </>
   );
}

export default Chat;