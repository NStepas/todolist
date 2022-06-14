import * as Yup from 'yup';
import { formTexts } from '../../../constants/formTexts';
// TODO delete unused import
import Auth from '../../routes/pages/AuthPage';

// If Fomrik(Input) is common component it`s bad idea to store validation file from Login page here
// better move it to Login page folder and rename as form.js

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
