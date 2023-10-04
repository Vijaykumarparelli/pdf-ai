import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
export const FormSchema = (logInFeilds) => {
  const createSchema = logInFeilds.reduce((inval, curenval) => {
    if (!yup[curenval.valtype]) {
      return inval;
    }
    let yupIni = yup[curenval.valtype]();
    curenval.methods.forEach((method) => {
      if (!yupIni[method.type]) {
        return;
      }
      yupIni = yupIni[method.type](...method.params);
    });
    inval[curenval.name] = yupIni;
    return inval;
  }, {});
  const schema = yup.object(createSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return { register, handleSubmit, errors, setValue, getValues };
};
