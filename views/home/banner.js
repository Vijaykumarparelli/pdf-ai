import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HappyUser from './happy-users';
import GetStartBtn from './get-start-btns';
import AiContainer from '@components/ai-container';
const Banner = ({ styles }) => {
  return (
    <div className={styles.banner_container}>
      <AiContainer className="py-5">
        <Row className="pt-5">
          <Col lg={7}>
            <h1>Chat with any PDF document</h1>
            <p className="mt-3">
              From legal agreements to financial reports, PDF.ai brings your documents to life. You can ask questions,
              get summaries, find information, and more.
            </p>
            <GetStartBtn styles={styles} />
            <HappyUser styles={styles} />
          </Col>
        </Row>
        <div className="mt-3 pt-3 mt-md-5 pt-md-5">
          <Image src={'/images/banner-thumbnail.jpg'} width={2} height={1} layout="responsive" cover="true" alt="asd" />
        </div>
        <div className="mt-3 pt-3 mt-md-4 pt-md-4 text-center">
          <h5>“PDF.ai is one of the most useful AI applications I've used.”</h5>
          <div className="mt-4">
            <Image
              src={'https://source.unsplash.com/user/wsanter/100x100'}
              width={50}
              height={50}
              className={`${styles.img_round} ms-1`}
              alt="asd"
            />
            <p className="mt-3">Sam Szuchan</p>
          </div>
        </div>
      </AiContainer>
    </div>
  );
};

export default Banner;
