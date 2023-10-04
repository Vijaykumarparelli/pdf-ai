import { classNames } from '@utls/common';

const OrDivider = ({ text = 'Or', className }) => {
  return (
    <div className={classNames('d-flex align-items-center', className)}>
      <hr className="d-flex m-0 w-100" /> <span className="px-3">{text}</span> <hr className="d-flex m-0 w-100" />
    </div>
  );
};
export default OrDivider;
