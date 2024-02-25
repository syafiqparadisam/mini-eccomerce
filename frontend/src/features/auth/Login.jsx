import {
	Input,
	FormControl,
	FormLabel,
	FormHelperText,
	AlertTitle,
	Alert,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, useForm } from "react-hook-form";
import { loginSchema } from "../../schema/schema";
import { Text } from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const { login } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const submitting = (data) => {
		login(data);
	};
	return (
		<form
			style={{ width: "100%", margin: "auto", height: "100%" }}
			onSubmit={handleSubmit(submitting)}
		>
			<FormControl>
				<FormLabel>Username</FormLabel>
				<Input {...register("username")} />

				{errors && errors.username?.message.toLocaleUpperCase()}
			</FormControl>
			<FormControl>
				<FormLabel>Password :</FormLabel>
				<Input type="password" {...register("password")} />

				{errors && errors.password?.message.toLocaleUpperCase()}
			</FormControl>
			<Link
				style={{ color: "blue", textDecoration: "underline" }}
				onClick={() =>
					window.alert("Developer not yet make this feature could used")
				}
			>
				Lupa Password ?
			</Link>
			<Input
				type="submit"
				bg={"blue.600"}
				mt={3}
				color={"white"}
				_hover={{ backgroundColor: "white", color: "black" }}
				border={"1px solid blue"}
			/>
		</form>
	);
};

export default Login;
