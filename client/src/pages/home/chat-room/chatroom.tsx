import styles from './styles.module.css';
import MessagesReceived from './messages';

interface ChatParams {
    username: string;
    message: string;
    __createdtime__: any;
    on?: any;
    off?: any;
}

const Chat = (socket: ChatParams ) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesReceived {...socket} />
      </div>
    </div>
  );
};

export default Chat;