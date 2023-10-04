import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HappyUser from './happy-users';
import ChromeExtensionBtn from './chrome-extension-btn';
import AiContainer from '@components/ai-container';
const Banner = ({ styles }) => {
  return (
    <div className={styles.banner_container}>
      <AiContainer className="py-5">
        <Row className="pt-5">
          <Col lg={7}>
            <h1>Chat with any PDF via our Chrome Extension</h1>
            <p className="mt-3">
              Add the PDF.ai extension to your Chrome browser to start chatting effortlessly with any PDF. It saves you
              hours and boosts your productivity!
            </p>
            <ChromeExtensionBtn styles={styles} />
            <HappyUser styles={styles} />
          </Col>
        </Row>
        <div className="mt-3 pt-3 mt-md-5 pt-md-5">
          <Image src={'/images/banner-thumbnail.jpg'} width={2} height={1} layout="responsive" cover="true" alt="asd" />
        </div>
      </AiContainer>
    </div>
  );
};

export default Banner;
