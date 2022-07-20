import './App.css';
import { Route, Routes } from 'react-router-dom';

import Chat from './pages/Chat';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="room/:roomName" element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
