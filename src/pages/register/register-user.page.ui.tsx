import RegisterFormView from 'module/auth/register/register.form.view';
import { Helmet } from 'react-helmet-async';

export default function UserRegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterFormView />
    </>
  );
}
