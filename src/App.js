import * as yup from "yup"
import {useFormik} from "formik"

function App() {
  const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({email, password}) => console.log(email, password),
    validationSchema: yup.object({
      email: yup.string().max(10, "Email must be shorter than 10 characters").required("Required"),
      password: yup.string().min(6, "Password should be longer than 6 characters").required(),
    })
  })

  return (
    <form onSubmit={handleSubmit} className="">
      <div>
        <label>Email</label>
        <input name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
        {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>}
      </div>
      <div>
        <label>Senha</label>
        <input name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
        {touched.password && errors.password && <span style={{color: "red"}}>{errors.password}</span>}
      </div>
      <input type="submit" value="Send" />
    </form>
  )
}

export default App

