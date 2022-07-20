import {useEffect, useRef} from 'react';

function useWebSocket(path, onOpen, onMessage, onClose) {
    const socket = useRef()

    useEffect(() => {
        const webSocket = new WebSocket(
            'ws://'
            + 'localhost:8000'
            + path
        );
    
        webSocket.onopen = onOpen;
        webSocket.onmessage = onMessage;
        webSocket.onclose = onClose;
    
        socket.current = webSocket
    }, [])

    return socket.current
}

export default useWebSocket;