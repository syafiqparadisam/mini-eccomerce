import { Box, Flex, Image, Text,FormHelperText,Input,FormLabel,FormControl } from "@chakra-ui/react";
import { useRegisterMutation } from "../service/authServices";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
	const [regist, {}] = useRegisterMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submited = (data) => {
		console.log(data)
		regist(data)
	};
	return (
		<Flex
			height={"100vh"}
			pt={10}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Flex
				width={"70%"}
				justifyContent={"center"}
				p={2}
			>
				<Box w={"50%"}>
					<Image src="" />
					<Text>anjay</Text>
				</Box>
				<Box w={"50%"} bg={"white"} borderRadius={"20px"} p={2}>
	
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
							value={"Register"}
							color={"white"}
							_hover={{ backgroundColor: "white", color: "black" }}
							border={"1px solid blue"}
						/>
					</form>
				</Box>
			</Flex>
		</Flex>
	);
};

export default RegisterPage;
