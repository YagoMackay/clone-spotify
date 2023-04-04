import AuthForm from '../components/authForm';

const Signin = () => {
  //@ts-ignore
  return <AuthForm mode="signin" />;
};

Signin.authPage = true;

export default Signin;
