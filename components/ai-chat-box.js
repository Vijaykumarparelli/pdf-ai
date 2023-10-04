import styles from '@styles/chat-box.module.scss';
import { Form, InputGroup } from 'react-bootstrap';
import { PiMagicWandLight } from 'react-icons/pi';
const AiChatBox = () => {
  return (
    <div className={`d-flex flex-column flex-1 overflow-auto ${styles.conrainer}`}>
      <div className={`${styles.chat_talk} flex-1 overflow-auto`}></div>
      <div className={`${styles.chat_input_box} px-3 py-3 d-flex align-items-center`}>
        <div className="me-3">
          <PiMagicWandLight size={24} />
        </div>
        <div className="flex-1">
          <Form.Control
            placeholder="Enter your question (max 1,000 characters)"
            as="textarea"
            rows={1}
            autoCorrect={false}
          />
        </div>
      </div>
    </div>
  );
};
export default AiChatBox;
