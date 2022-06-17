import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialValues, validate } from './formValidation';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import '../Auth.scss';
import { ThunkSignUpUser } from '../../../../store/auth/thunk/thunk';

const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isAuth } = useSelector(state => state.auth);

   const handleSubmit = values => {
      dispatch(ThunkSignUpUser(values));
      navigate('/login');
      console.log(isAuth);
   };

   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   const navigateHandle = () => {
      navigate('/login');
   };

   return (
      <form onSubmit={formik.handleSubmit} className="AuthForm">
         <h1>{'SignUp'}</h1>
         <Input formik={formik} name="firstName" type="string" />
         <Input formik={formik} name="lastName" type="string" />
         <Input formik={formik} name="email" type="email" />
         <Input formik={formik} name="password" type="password" />
         <Input formik={formik} name="confirmPassword" type="password" />
         <Input formik={formik} name="phone" type="string" />
         <Input formik={formik} name="address" type="string" />
         <Button type="submit" text={'SignUp'} />
         <Button type="button" text={'Login'} onClick={navigateHandle} />
      </form>
   );
};

export default SignUp;
