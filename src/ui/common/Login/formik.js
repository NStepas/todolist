import './formik.scss';
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
