import React, {useEffect} from 'react';
import {Form, GridBox, Inputs} from "./index";
import {Formik, FormikHelpers} from "formik";
import {signInSchema} from "../../validation/authValidation";
import Error from "../../components/errors/Error";
import {ILoginForm} from "./interface";
import {useLoginMutation} from "../../api/api";
import {onLogin} from "../../store/reducers/authorization";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {Loading} from "../../styles";
import {SignIn} from "../../components/buttons/signIn/SignIn";

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, {isLoading, data, error}] = useLoginMutation();

  const handleSubmit = async (
    value: ILoginForm,
    helpers: FormikHelpers<ILoginForm>
  ) => {
    await login(value);
  };

  useEffect(() => {
    if (data?.token) {
      dispatch(onLogin(data));
      navigate('/home');
      localStorage.setItem('userToken', JSON.stringify(data));
      localStorage.setItem('userId', JSON.stringify(data));
    }
  }, [data]);

  return (
    <>
      <GridBox>
        {isLoading ? <Loading/> :
          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            validationSchema={signInSchema}
            onSubmit={(values, formikHelpers) => {
              void handleSubmit(values, formikHelpers);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <Inputs
                    type='text'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name='username'
                    placeholder='Write your name'
                  />
                  {errors?.username && <Error error={errors.username}/>}
                </div>
                <div>
                  <Inputs
                    type='text'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name='password'
                    placeholder='Write your password'
                  />
                  {errors?.password && <Error error={errors.password}/>}
                </div>

                {/*@ts-ignore*/}
                {error?.data && <Error error={error.data.message}/>}
                <SignIn
                  onSubmit={() => {
                    handleSubmit();
                  }}
                  type='submit'
                  disabled={!!errors.username || !!errors.password}
                >
                                    Sign In
                </SignIn>
              </Form>
            )}
          </Formik>}
      </GridBox>
    </>
  );
};

export default AuthForm;
