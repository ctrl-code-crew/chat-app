import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState(''); // Add this

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={
            <Home
              username={username} // Add this
              setUsername={setUsername} // Add this
              room={room} // Add this
              setRoom={setRoom} // Add this
              socket={socket} // Add this
              />
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;