import Link from 'next/link';
import { Button } from 'react-bootstrap';

const GetStartBtn = ({ styles }) => {
  return (
    <div className="mt-4 d-flex align-items-center">
      <Button variant="ai-primary">Get started for free</Button>
      <Link className="ms-3" href="/sign-in">
        Try the demo →
      </Link>
    </div>
  );
};
export default GetStartBtn;
