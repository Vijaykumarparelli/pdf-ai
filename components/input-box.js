import { classNames } from '@utls/common';
import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import InputAlert from './inputAlert';

export const InputBox = ({ field, register, errors, className }) => {
  const { label, Icon, placeholder, type, isEye, name, size, options } = field;
  return (
    <>
      {(type === 'text' || type === 'password' || type === 'email') && (
        <TextInput
          label={label}
          Icon={Icon}
          placeholder={placeholder}
          type={type}
          isEye={isEye}
          register={register}
          errors={errors}
          name={name}
          size={size}
          className={className}
        />
      )}
      {type === 'select' && (
        <SelectInput
          label={label}
          Icon={Icon}
          placeholder={placeholder}
          type={type}
          isEye={isEye}
          register={register}
          errors={errors}
          name={name}
          size={size}
          className={className}
          options={options}
        />
      )}
    </>
  );
};
export const TextInput = ({ label, Icon, placeholder, type, isEye, register, errors, name, size = '', className }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-3">
      <Form.Label htmlFor={`${name}_id`}>{label}</Form.Label>
      <InputGroup className={classNames('mb-2', Icon ? '' : 'ps-3', className)} size={size}>
        {Icon && (
          <InputGroup.Text>
            <Icon />
          </InputGroup.Text>
        )}
        <Form.Control id={`${name}_id`} placeholder={placeholder} type={show ? 'text' : type} {...register(name)} />
        {isEye && (
          <div
            className="position-absolute text-ys-primary"
            style={{ right: '10px', cursor: 'pointer', zIndex: '99' }}
            onClick={() => setShow(!show)}
          >
            {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        )}
      </InputGroup>
      {errors[name]?.message && <InputAlert message={errors[name]?.message} />}
    </div>
  );
};
export const SelectInput = ({ label, Icon, placeholder, register, errors, name, size = '', className, options }) => {
  return (
    <div className="mt-3">
      <Form.Label htmlFor={`${name}_id`}>{label}</Form.Label>
      <InputGroup className={classNames('mb-2', Icon ? '' : 'PS-2', className)} size={size}>
        {Icon && (
          <InputGroup.Text>
            <Icon />
          </InputGroup.Text>
        )}
        <Form.Select id={`${name}_id`} {...register(name)}>
          <option value="1" disabled>
            {placeholder}
          </option>
          {options &&
            options.length &&
            options.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
        </Form.Select>
      </InputGroup>
      {errors[name]?.message && <InputAlert message={errors[name]?.message} />}
    </div>
  );
};

export const CheckBox = ({ label, register, errors, name, className }) => {
  return (
    <>
      <Form.Group controlId={`checkbox_${name}`} className={classNames('mb-2', className)}>
        <Form.Check size="lg" defaultChecked={false} label={label} {...register(name)} />
        {errors[name]?.message && <InputAlert message={errors[name]?.message} />}
      </Form.Group>
    </>
  );
};
