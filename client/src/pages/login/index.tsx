 import { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// interface HomeParams {
//   username: string;
//   setUsername(username: string): any;
//   room?: string;
//   setRoom(room: string)?: any;
//   socket: any;
// }

export function Home() {
  const [username, setUsername] = useState(''); // Add this
  const [password, setPassword] = useState(''); // Add this
  const navigate = useNavigate();

  async function enterSystem() {
    navigate('/chat', { replace: true });
  }

  // const joinRoom = () => {
  //   if (props.room && props.username) {
  //     props.socket.emit('join_room', { username: props.username, room: props.room });
  //   }
  //   navigate('/chat', { replace: true });
  // };

  return (
    <>
      <meta charSet="utf-8" />
      <title>Login Form Design | CodingAyush</title>
      <link rel="stylesheet" href="style.css" />
      <div className={styles.wrapper}>
        <div className={styles.title}>Login Form</div>
        <form action="#" onSubmit={enterSystem}>
          <div className={styles.field}>
            <input 
              type="text" 
              required 
              onChange={event => setUsername(event.target.value)} 
              value = {username}/>
            <label>Email Address</label>
          </div>
          <div className={styles.field}>
            <input 
              type="password" 
              onChange={event => setPassword(event.target.value)} 
              value= {password}
              required />
            <label>Password</label>
          </div>
          <div className={styles.field}>
            {/* <input type="submit" defaultValue="Login"/> */}
            <Button variant="contained" disabled={!username || !password}>Entrar</Button>
          </div>
          <div className={styles.signupLink}>
            Not a member? <br></br><a href="#">Signup now</a> or <a href="#">Enter as a guest</a> 
          </div>
        </form>
      </div>
    </>
  );
}
