import {
	FormControl,
	Input,
	FormLabel,
	Text,
	FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/schema";
import useRegisterResponse from "../../hooks/useRegisterResponse";
import { Link } from "react-router-dom";

const Register = () => {
	const { send, isLoading } = useRegisterResponse();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) });

	const submited = (data) => send(data);
	return (
		<form
			onSubmit={handleSubmit(submited)}
			style={{ width: "100%", margin: "auto", padding: "10px" }}
		>
			{/* {isLoading ? <Text>Loading...</Text> : null} */}
			<FormControl>
				<FormLabel>Username :</FormLabel>

				<Input {...register("username")} />
				<FormHelperText color={"red"}>
					{errors.username?.message.toUpperCase()}
				</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Email :</FormLabel>

				<Input type="email" {...register("email")} />
				<FormHelperText color={"red"}>
					{errors.email?.message.toUpperCase()}
				</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Password :</FormLabel>

				<Input type="password" {...register("password")} />
				<FormHelperText color={"red"}>
					{errors.password?.message.toUpperCase()}
				</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Confirm Password :</FormLabel>

				<Input type="password" {...register("confirmPassword")} />
				<Text color={"red"}>
					{errors.confirmPassword?.message.toUpperCase()}
				</Text>
			</FormControl>
			
			<Input
				type="submit"
				bg={"blue.600"}
				mt={3}
				value={"Submit"}
				color={"white"}
				_hover={{ backgroundColor: "white", color: "black" }}
				border={"1px solid blue"}
			/>
		</form>
	);
};

export default Register;
