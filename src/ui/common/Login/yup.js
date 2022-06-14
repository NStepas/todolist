import * as Yup from 'yup';
import { formTexts } from '../../../constants/formTexts';
import Auth from '../../routes/pages/AuthPage';

const { isRequired, passwordMinMessage, passwordMaxMessage, emailMessage } = formTexts;
const initialValues = {
   email: '',
   password: '',
};
const validate = Yup.object({
   email: Yup.string().required(isRequired).email(emailMessage),
   password: Yup.string()
      .required(isRequired)
      .min(5, passwordMinMessage)
      .max(16, passwordMaxMessage),
});
export { initialValues, validate };
