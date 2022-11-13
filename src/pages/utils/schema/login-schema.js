import * as yup from "yup";

let LoginSchema = yup.object().shape({
  username: yup.string().min(4).max(10).required("Username cannot be empty"),
  password: yup
    .string()
    .min(7)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required(),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
  stack: yup.string().required(),
  email: yup.string().email().required(),
});

export default LoginSchema;
