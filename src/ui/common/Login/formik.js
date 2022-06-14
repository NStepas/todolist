import './formik.scss';
// TODO don`t use common or reserved names in component name
// Formik is incorrect name
// Input - better name
// use simple syntax -> const Input = ({ formik, name, type }) => (<div>...</div>)
const Formik = ({ formik, name, type }) => {
   return (
      <div className="input">
         <input
            id={name}
            name={name}
            type={type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
         />
         {formik.errors[name] && <p className="error">{formik.errors[name]}</p>}
      </div>
   );
};

export default Formik;
