import { Formik } from 'formik';
import * as Yup from 'yup';
import { checkUserCreds, loginUser } from '@services';
import { useRouter } from 'next/router';
import { FormWrapper } from '@components/login/FormWrapper';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        const response = await checkUserCreds(values);

        if (response.status === 'fail') {
          setErrors({ password: response.error });
        } else if (response.player) {
          loginUser({ ...response.player, id: values.username });
          router.push('/');
        }
      }}
    >
      {(formik) => <FormWrapper formik={formik} />}
    </Formik>
  );
};
export default LoginPage;
