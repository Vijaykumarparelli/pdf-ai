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
              <Image
                src={item.img}
                width={2}
                height={1}
                layout="responsive"
                cover="true"
                alt="asd"
                className={styles.img_bottom_line}
              />
              <h2 className="mt-4 mb-3">{item.title}</h2>
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
    img: '/images/upload-documents.svg',
    title: 'Upload documents',
    desc: "Easily upload the PDF documents you'd like to chat with.",
  },
  {
    img: '/images/instant-answers.svg',
    title: 'Instant answers',
    desc: 'Ask questions, extract information, and summarize documents with AI.',
  },
  {
    img: '/images/sources-cited.svg',
    title: 'Sources included',
    desc: 'Every response is backed by sources extracted from the uploaded document.',
  },
];
