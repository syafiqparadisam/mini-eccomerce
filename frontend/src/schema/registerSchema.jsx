import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().min(2).required(),
    email: yup.string().email().min(2).required(),
    password: yup.string().min(2).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")])
  })

export default schema