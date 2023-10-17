import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import io from 'socket.io-client';
import { Home } from "./pages/login/index.tsx";

// const socket = io('http://localhost:4000');

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
        </Routes>
      </>
    </Router>
  );
}

export default App;