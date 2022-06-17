import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { initialValues, validate } from './formValidation';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { ThunkLoginUser } from '../../../../store/auth/thunk/thunk';

import '../Auth.scss';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isAuth } = useSelector(state => state.auth);

   const handleSubmit = values => {
      dispatch(ThunkLoginUser(values));
      // navigate('/todoList');
      // console.log(isAuth);
   };
   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   const navigateHandle = () => {
      navigate('/signUp');
   };

   // useEffect(() => {
   //    !isAuth && navigate('/todoList');
   // }, [isAuth]);

   return (
      <form onSubmit={formik.handleSubmit} className="AuthForm">
         <h1>Login</h1>
         <Input formik={formik} name="email" type="email" />
         <Input formik={formik} name="password" type="password" />
         {isAuth ? 'th' : null}
         <Button type="submit" text={'Login'} />
         <Button type="button" text={'SignUp'} onClick={navigateHandle} />
      </form>
   );
};
export default Login;
