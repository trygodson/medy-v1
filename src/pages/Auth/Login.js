import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthJumbotron } from '../../shared/components/authJumbotron/LoginIndex';
import { bgLeftImage, bgRightImage, logo } from '../../EntryFile/images.jsx';
import { Input } from '../../shared/components/formInputs';
import Button from '../../shared/components/button';

const getFormProps = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

const Login = () => {
  const [act, setAccount] = useState('');

  async function handleSubmit(values) {
    const { email, password } = values;
    const payload = {
      username: email,
      password,
    };

    try {
      const response = await registerUser(payload);
      if (response.isConfirmed != true) {
        props.history.push({
          pathname: '/verify-otp',
          state: { email: response.email },
        });
      } else {
        return;
        //props.history.push("/app/dashboard");
      }
    } catch (error) {
      setAccount(error.message);
      console.log(error.message);
    }
  }

  return (
    <AuthJumbotron>
      <AuthJumbotron.LeftSideFrame>
        {act != '' && (
          <div class="alert alert-danger" role="alert">
            {act}
          </div>
        )}

        <Formik
          onSubmit={handleSubmit}
          validateOnMount={true}
          initialValues={getFormProps().initialValues}
          validationSchema={getFormProps().validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form style={{ width: '80%' }}>
              <div className="text-center">
                <div style={{ width: '80%', margin: '20px auto' }}>
                  <img src={logo} width="200px" />
                  <div>
                    <span>Please Login into Your Account</span>
                  </div>
                </div>
              </div>
              <Input>
                <Input.FormGroup className="input-group input-group--prepend" login={true}>
                  <Input.InputField
                    type="email"
                    name="email"
                    className="input"
                    placeholder="email@email.com"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage className=" text-danger text-center " component="div" name="email" />
                <Input.FormGroup className="input-group input-group--prepend" login={true}>
                  <Input.InputField
                    type="password"
                    name="password"
                    className="input"
                    placeholder="*******"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage
                  className=" text-danger text-center"
                  component="div"
                  name="password"
                />
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-center">
                    <Input.CheckBox type="checkbox" name="remember-me"></Input.CheckBox>
                    <span className="mb-0">Remeber Me</span>
                  </div>
                  <div>
                    <span style={{ color: '#2c91f7' }}>Forgot Password</span>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    login={true}
                    disabled={isSubmitting || !isValid}
                    isLoading={isSubmitting}
                    style={{ width: '100%' }}
                  >
                    Login
                  </Button>
                </div>
              </Input>
              <div style={{ height: '0.5px' }}></div>
            </Form>
          )}
        </Formik>
        <div>
          <p>
            Dont have an account? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </AuthJumbotron.LeftSideFrame>
      <AuthJumbotron.RightSideFrame bgRightImage={bgRightImage}>
        <AuthJumbotron.WelcomeTextWrapper>
          <AuthJumbotron.Title>ALL ABOUT YOUR HEALTH</AuthJumbotron.Title>
        </AuthJumbotron.WelcomeTextWrapper>
      </AuthJumbotron.RightSideFrame>
    </AuthJumbotron>
  );
};

export default Login;
