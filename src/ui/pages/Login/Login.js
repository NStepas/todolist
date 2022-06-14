import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { ThunkLoginUser } from '../../../store/auth/thunk/thunk';
import { initialValues, validate } from './form';

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
   const handleSubmit = values => {
      dispatch(ThunkLoginUser(values));
      setIsLogin(true);
      console.log(11);
   };
   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   useEffect(() => {
      isAuth && navigate('/');
   }, [isAuth]);

   const text = useMemo(() => (!isLogin ? 'Login' : 'Sign Up'), [isLogin]);
   return (
      <form onSubmit={formik.handleSubmit} className="loginForm">
         <h1>{text}</h1>
         <Input formik={formik} name="email" type="email" />
         <Input formik={formik} name="password" type="password" />
         <Button type="submit" text={text} />
      </form>
   );
};
export default Login;
