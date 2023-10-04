import AiContainer from '@components/ai-container';
import { classNames } from '@utls/common';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const UseCase = ({ styles }) => {
  return (
    <div className="position-relative">
      <div className={classNames(styles.hm_ab_container, styles.hm_use_case)}></div>
      <AiContainer className="position-relative py-2 py-md-5">
        <div className={classNames(styles.hm_use_case_container)}>
          <div className="px-4 pt-5">
            <h2>Built for any use case</h2>
            <p className="mt-4">Click on each option to try it out 👇</p>
          </div>

          <div className="mt-4 pb-4">
            <Marquee>
              {links.map((link, k) => (
                <div key={k} className={styles.marqee_text}>
                  {link.text}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </AiContainer>
    </div>
  );
};
export default UseCase;

const links = [
  { text: 'legal_documents.pdf', link: '' },
  { text: 'financial_reports.pdf', link: '' },
  { text: 'books.pdf', link: '' },
  { text: 'scientific_papers.pdf', link: '' },
  { text: 'user_manuals.pdf', link: '' },
  { text: 'employee_training.pdf', link: '' },
  { text: 'legal_documents.pdf', link: '' },
];
