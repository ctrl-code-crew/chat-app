import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

interface HomeParams {
  username: string;
  setUsername(username: string): any;
  room: string;
  setRoom(room: string): any;
  socket: any;
}

const Home = (props: HomeParams) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (props.room && props.username) {
      props.socket.emit('join_room', { username: props.username, room: props.room });
    }
    navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...' onChange={(e) => props.setUsername(e.target.value)} />

        <select className={styles.input} onChange={(e) => props.setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button className='btn btn-secondary' onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;