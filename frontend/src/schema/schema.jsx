import * as yup from "yup";

export const registerSchema = yup
	.object({
		username: yup.string().min(4).required("Username is required"),
		email: yup.string().email().min(2).required("Email is required"),
		password: yup.string().min(8).required("Password is required"),
		confirmPassword: yup
			.string().min(8)
			.oneOf([yup.ref("password")], "Please same the value with password field")
			.required(),
	})
	.required();

export const loginSchema = yup.object({
	username: yup.string().min(4).required("Username is required"),
	password: yup.string().min(8).required("Password is required")
})



