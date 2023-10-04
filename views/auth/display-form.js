import { FormSchema } from '@utls/form-schema';
import { Button, Row } from 'react-bootstrap';
import ColByFields from './col-by-fields';

const DisplayForm = ({ onSubmit, styles, formFields, colums, termsUi, btnName, btnClassName, btnSize }) => {
  const { register, handleSubmit, errors } = FormSchema(formFields);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {formFields.map((field) => (
          <ColByFields
            key={field.name}
            field={field}
            colums={field.col || colums}
            register={register}
            errors={errors}
            className="input-group"
            termsUi={termsUi}
          />
        ))}
      </Row>
      <Button
        type="submit"
        className={`text-white hover-ai-primary mt-4 ${btnClassName}`}
        variant="ai-primary"
        size={btnSize}
      >
        {btnName}
      </Button>
    </form>
  );
};
export default DisplayForm;
