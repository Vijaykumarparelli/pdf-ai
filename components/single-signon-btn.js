import { classNames } from '@utls/common';
import { Button } from 'react-bootstrap';

const SingleSignonBtn = ({ className, title, img, callback, href, ...rest }) => {
  if (typeof window !== 'undefined') {
    window.onmessage = function (getData) {
      if (getData?.data?.isDone) {
        callback(getData.data);
      }
    };
  }
  const googleSign = () => {
    window.open(href);
  };
  return (
    <Button
      className={classNames('d-flex align-items-center justify-content-center', className)}
      onClick={googleSign}
      {...rest}
    >
      <img src={`/images/${img}`} alt="" className="me-2" /> {title}
    </Button>
  );
};
export default SingleSignonBtn;
