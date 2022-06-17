import * as Yup from 'yup';
import { formTexts } from '../../../../constants/formTexts';

const { isRequiired, passwordMaxMessage, passwordMinMessage, emailMessage } = formTexts;
const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   confirmPassword: '',
   phone: '',
   address: '',
};
const validate = Yup.object({
   firstName: Yup.string().required(isRequiired),
   lastName: Yup.string().required(isRequiired),
   email: Yup.string().required(isRequiired).email(emailMessage),
   password: Yup.string()
      .required(isRequiired)
      .min(5, passwordMinMessage)
      .max(16, passwordMaxMessage),
   confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
   phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
   address: Yup.string(),
});
export { initialValues, validate };
