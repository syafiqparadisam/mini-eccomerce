import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { FormControl,Input,FormLabel } from "@chakra-ui/react";
import { useLoginMutation } from "../service/authServices";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../schema/schema";

const LoginPage = () => {
	const [login, {data,error}] = useLoginMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({resolver: yupResolver(loginSchema)});

	const submitting = (datas) => {
		console.log(datas)
		login(datas);
	};
	console.log(data,error)

	return (
		<>
			<Flex h={"100vh"} justifyContent={"center"} alignItems={"center"} pt={10}>
				<Flex
					width={"70%"}
					justifyContent={"center"}
					p={2}
					flexDirection={"column"}
				>
						{error && error?.data?.message?.map(msg => {
							return (
							<Text width={"100%"} textAlign={"center"} color={"red"} fontWeight={"bold"}>
								{msg.message}
							</Text>
							)
						})}
					<Flex>

					<Box w={"50%"}>
						<Image src="" />
						<Text>anjay</Text>
					</Box>
					<Box w={"50%"} bg={"white"} borderRadius={"20px"} p={2}>
						<form
							style={{ width: "100%", margin: "auto", height: "100%" }}
							onSubmit={handleSubmit(submitting)}
						>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input {...register("username")} />

								{errors && <Text color={"red"}>{errors.username?.message}</Text>}
							</FormControl>
							<FormControl>
								<FormLabel>Password :</FormLabel>
								<Input type="password" {...register("password")} />

								{errors && <Text color={"red"}>{errors.password?.message}</Text>}
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
								value={"Login"}
								_hover={{ backgroundColor: "white", color: "black" }}
								border={"1px solid blue"}
							/>
						</form>
					</Box>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default LoginPage;
