import AiContainer from '@components/ai-container';
import Layout from '@components/laylout';
import Modals from '@components/modals';
import SearchBox from '@components/search-box';
import { getAllDocs } from '@store/docs_chats.slice';
import styles from '@styles/documents.module.scss';
import FilesList from '@views/documents/files-list';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaFileUpload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
export default function Documents() {
  const { sectionLoader } = useSelector((state) => state.loading);
  const { docList } = useSelector((state) => state.docs_chats);

  const modalRef = useRef();
  const dispatch = useDispatch();

  const [modalState, setModalState] = useState({
    target: 'UploadDocs',
  });

  useEffect(() => {
    dispatch(getAllDocs());
  }, []);

  const openModal = (target, data) => {
    setModalState((prev) => ({
      ...prev,
      target,
    }));
    modalRef.current.modalShow(data);
  };
  return (
    <>
      <Head>
        <title>chat with your pdf docs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout headerClass="nav-bg" login_nav={true}>
        <div className={styles.container}>
          <AiContainer className="pt-4">
            <h1>Documents</h1>
            <div>
              <SearchBox btnText="Upload" BtnIcon={FaFileUpload} onClick={() => openModal('UploadDocs')} />
            </div>

            <div className={`mt-3 ${styles.list_docs}`}>
              {sectionLoader && (
                <div className="text-center py-5">
                  <Spinner animation="grow" variant="ai-primary" />
                  <p>Loading...</p>
                </div>
              )}

              {!sectionLoader && docList && (
                <>
                  {docList.length === 0 ? (
                    <p>
                      <i>None</i>
                    </p>
                  ) : (
                    docList.map((item, k) => <FilesList key={item.id} item={item} k={k} openModal={openModal} />)
                  )}
                </>
              )}
            </div>
          </AiContainer>
        </div>
      </Layout>
      <Modals ref={modalRef} target={modalState.target} />
    </>
  );
}