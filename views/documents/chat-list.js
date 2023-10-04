import Link from 'next/link';
import { FaTrashAlt } from 'react-icons/fa';
import { HiChatAlt2 } from 'react-icons/hi';
function ChatList({ item, k, openModal }) {
  return (
    <div className={`${k !== 0 ? 'mt-3' : ''} d-flex align-items-center  justify-content-between`}>
      <div className="d-flex align-items-center flex-1">
        <HiChatAlt2 size={24} />
        <Link href={`/documents/${item.id}?chatId=${item.chat_id}`} className="ms-2 flex-1   text-black">
          <p className="mb-0 text-truncate" style={{ maxWidth: '70%' }}>
            <b>{item.chat_key}</b>
          </p>
          <p className="mb-0" style={{ fontSize: '14px' }}>
            <i>{item.file_name}</i>
          </p>
        </Link>
      </div>
      <span className="me-4">{item.uploadedAt}</span>
      <span className="cursor-pointer" onClick={() => openModal('DeleteChat', item)}>
        <FaTrashAlt />
      </span>
    </div>
  );
}

export default ChatList;
