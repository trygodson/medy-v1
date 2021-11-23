import { Form, Formik, ErrorMessage } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthJumbotron } from '../../shared/components/authJumbotron/RegisterIndex';
import { logo, bgRightImage, bgLeftImage } from '../../EntryFile/images.jsx';
import { Input } from '../../shared/components/formInputs';
import Button from '../../shared/components/button';

const getFormProps = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name Required')
      .matches(/^\S*$/, 'No Spaces')
      .min(3, 'must be three characters long'),
    surname: Yup.string()
      .required('Surname Name Required')
      .matches(/^\S*$/, 'No Spaces')
      .min(3, 'must be three characters long'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Phone number is short. Should be 11 characters')
      .max(11, 'Phone number is long. Should be 11 characters')
      .required('Phone number is required'),

    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('required')
      .oneOf([Yup.ref('password'), null], 'password must match'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

const Register = () => {
  const history = useHistory();

  async function handleSubmit(values) {
    const { firstName, surname, email, phone, password } = values;
    const payload = {
      firstName,
      surname,
      username: email,
      phone,
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
      <AuthJumbotron.LeftSideFrame bgLeftImage={bgLeftImage} right={true}>
        <AuthJumbotron.WelcomeTextWrapper>
          <AuthJumbotron.Title>AN APPLE A DAY KEEPS THE DOCTOR AWAY</AuthJumbotron.Title>
        </AuthJumbotron.WelcomeTextWrapper>
      </AuthJumbotron.LeftSideFrame>
      <AuthJumbotron.RightSideFrame>
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
                  <img src={logo} width="100px" />
                  <div>
                    <span>Create Your Account</span>
                  </div>
                </div>
              </div>
              <Input>
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
                  <Input.InputField
                    type="text"
                    name="firstName"
                    className="input"
                    placeholder="First Name"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage
                  className="text-danger text-center"
                  component="div"
                  name="firstName"
                />
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
                  <Input.InputField
                    type="text"
                    name="surname"
                    className="input"
                    placeholder="Your Surname"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage className="text-danger text-center" component="div" name="surname" />
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
                  <Input.InputField
                    type="email"
                    name="email"
                    className="input"
                    placeholder="*******"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage className=" text-danger text-center" component="div" name="email" />
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
                  <Input.InputField
                    type="number"
                    name="phone"
                    className="input"
                    placeholder="+23480000000"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage className=" text-danger text-center" component="div" name="phone" />
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
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
                <Input.FormGroup className="input-group input-group--prepend" login={false}>
                  <Input.InputField
                    type="password"
                    name="confirmPassword"
                    className="input"
                    placeholder="Password (confirm)"
                  ></Input.InputField>
                </Input.FormGroup>
                <ErrorMessage
                  className="text-danger text-center"
                  component="div"
                  name="confirmPassword"
                />
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-center">
                    <Input.CheckBox type="checkbox" name="terms-and-conditions"></Input.CheckBox>
                    <p className="mb-0">
                      Accept the{' '}
                      <Link style={{ color: '#2c91f7' }} to="/">
                        terms and conditions
                      </Link>
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    login={false}
                    disabled={isSubmitting || !isValid}
                    isLoading={isSubmitting}
                    style={{ width: '100%' }}
                    onClick={() => history.push('/app')}
                  >
                    Signup
                  </Button>
                </div>
              </Input>
              <div style={{ height: '0.5px' }}></div>
            </Form>
          )}
        </Formik>
        <div>
          <p>
            Already have an account?{' '}
            <Link to="/" style={{ color: '#2c91f7' }}>
              Login
            </Link>
          </p>
        </div>
      </AuthJumbotron.RightSideFrame>
    </AuthJumbotron>
  );
};

export default Register;
