import { Col } from 'react-bootstrap';

const { InputBox, CheckBox } = require('@components/input-box');

const ColByFields = ({ field, register, errors, className, colums = 6, termsUi }) => {
  return (
    <>
      <Col md={colums}>
        <InputBox field={field} register={register} errors={errors} className={className} />
      </Col>
      {field.type === 'checkbox' && (
        <div className={`${termsUi ? 'd-flex justify-content-between mt-4' : ''}`}>
          <CheckBox label={field.label} type={field.type} register={register} errors={errors} name={field.name} />
          {termsUi && termsUi}
        </div>
      )}
    </>
  );
};
export default ColByFields;
