// TODO re-arrange imports
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import Formik from '../../common/Login/formik';
import { initialValues, validate } from '../../common/Login/yup';
import Button from '../../common/Button/Button';

import { useNavigate } from 'react-router-dom';
import { ThunkLoginUser } from '../../../store/auth/thunk/thunk';

import './Login.scss';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isLogin, setIsLogin] = useState(false);
   const { isAuth } = useSelector(state => state.auth);

   // let authURL;
   // if (isAuth) {
   //    authURL = LOGIN_URL;
   // } else {
   //    authURL = SIGNUP_URL;
   // }
   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: () => {
         dispatch(ThunkLoginUser(authData));
         setIsLogin(true);
         console.log(11);
      },
   });
   const authData = { email: formik.values.email, password: formik.values.password };

   useEffect(() => {
      isAuth && navigate('/');
   }, [isAuth]);

   return (
      <form onChange={console.log(115)} className="loginForm">
         <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
         <Formik formik={formik} name="email" type="email"></Formik>
         <Formik formik={formik} name="password" type="password" />
         <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
      </form>
   );
};
export default Login;
