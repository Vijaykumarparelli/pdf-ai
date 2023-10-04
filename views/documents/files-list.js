import Link from 'next/link';
import { FaEyeSlash, FaRegFile, FaTrashAlt } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
function FilesList({ item, k, openModal }) {
  return (
    <>
      <div className={`${k !== 0 ? 'mt-3' : ''} d-flex align-items-center justify-content-between`}>
        <FaRegFile stroke="4" />
        <Link
          href={`/documents/${item.id}`}
          className="mb-0 ms-2 flex-1 text-truncate text-black"
          style={{ maxWidth: '70%' }}
        >
          <span>
            <b>{item.file_name}</b>
          </span>
          {item.isPrivate && (
            <span className="ms-2">
              <FaEyeSlash />
            </span>
          )}
        </Link>
        <span className="me-4">{item.size}</span>
        <span className="me-4 ">{item.uploadedAt}</span>
        <span className="me-4 cursor-pointer" onClick={() => openModal('UpdateDoc', item)}>
          <MdModeEdit />
        </span>
        <span className="cursor-pointer" onClick={() => openModal('DeleteDoc', item)}>
          <FaTrashAlt />
        </span>
      </div>
    </>
  );
}

export default FilesList;
