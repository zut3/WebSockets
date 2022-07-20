import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
    const [roomName, setRoomName] = useState('');   
    const navigate = useNavigate()

    const goToChatRoom = () => {
        navigate(`room/${roomName}`)
    }


    return ( 
        <>
            <h1>Home</h1>
            <div className="new-room__settings">
                <h2>Введите имя новой комнаты: </h2>
                <input type="text" className='input' onChange={(e) => setRoomName(e.target.value)} value={roomName} 
                onKeyUp={(e) => {
                    if (e.keyCode === 13 && roomName) {
                        goToChatRoom()
                    }
                }}/>
            </div>
        </>
     );
}

export default Home;