 import { useState } from 'react';
import styles from './styles.module.css';
import { Button, TextField } from '@mui/material';
import { Login } from '../../services/login';
import { useNavigate } from 'react-router-dom';

// interface HomeParams {
//   username: string;
//   setUsername(username: string): any;
//   room?: string;
//   setRoom(room: string)?: any;
//   socket: any;
// }

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const joinRoom = () => {
  //   if (props.room && props.username) {
  //     props.socket.emit('join_room', { username: props.username, room: props.room });
  //   }
  //   navigate('/chat', { replace: true });
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await Login({ email, password });
      navigate('/chat', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Chat App</div>
        <form action="#" onSubmit={handleSubmit}>
          <div className={styles.field}>
            <TextField 
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)} 
            />
          </div>
          <div className={styles.field}>
            <TextField 
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value = {password}
              onChange={event => setPassword(event.target.value)} 
            />
          </div>
          <div className={styles.field}>
            <Button variant="contained" disabled={!email || !password} type="submit">Login</Button>
          </div>
          <div className={styles.signupLink}>
            Not a member?
          </div>
          <div className={styles.signupLinkChild}>
            <a href="#">Signup now</a> or <a href="#">Enter as a guest</a> 
          </div>
        </form>
      </div>
  );
}
