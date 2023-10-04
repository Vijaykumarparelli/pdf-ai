import AiContainer from '@components/ai-container';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const About = ({ styles }) => {
  return (
    <div className={styles.hm_ab_container}>
      <AiContainer className="py-5">
        <Row className="pt-5">
          {listItems.map((item, k) => (
            <Col key={k} md={4} className="px-3 px-md-4">
              <div className={`${styles.img_bottom_line} text-center pb-4`}>
                <Image src={item.img} width={80} height={80} alt="asd" />
              </div>
              <h4 className="mt-4 mb-3">{item.title}</h4>
              <p>{item.desc}</p>
            </Col>
          ))}
        </Row>
      </AiContainer>
    </div>
  );
};

export default About;

const listItems = [
  {
    img: '/images/pdf-logo.png',
    title: 'Any PDF file',
    desc: 'Our chatbot will pop up automatically on any PDF file (external or local) from your browser. Ready for you to chat with your PDF anytime.',
  },
  {
    img: '/images/google-drive-logo.png',
    title: 'Google Drive integration',
    desc: 'With our Google Drive integration, you can chat with those PDFs directly in your Google Drive.',
  },
  {
    img: '/images/dropbox-logo.png',
    title: 'Dropbox integration',
    desc: 'With our Dropbox integration, you can chat with those PDFs directly in your Google Drive.',
  },
];
