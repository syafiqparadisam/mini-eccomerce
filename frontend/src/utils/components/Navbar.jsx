import { BsCart4 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {
	Avatar,
	Box,
	Text,
	Button,
	Flex,
	HStack,
	Heading,
	Input,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthToken, selectUser } from "../../features/auth/authSlice";
import { FiInbox } from "react-icons/fi";
import DropdownNavbar from "./DropdownNavbar";
import { useState } from "react";

const Navbar = () => {
	const token = useSelector(selectAuthToken);
	const user = useSelector(selectUser);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	return (
		<>
			<HStack
				justifyContent={"space-evenly"}
				shadow={"sm"}
				p={3}
				bg={"white"}
				alignItems={"center"}
				position={"sticky"}
				w={"100%"}
			>
				<Flex>
					<Heading color={"black"} fontFamily={''} as={"h2"} size={"lg"}>
						<Link to={"/"}>Toko Barokah</Link>
					</Heading>
				</Flex>
				<Flex
					w={"50%"}
					alignItems={"center"}
					border={"1px solid lightGrey"}
					borderRadius={"10px"}
					justifyContent={"center"}
					height={"40px"}
				>
					<BiSearch size={"20px"} style={{ marginLeft: "10px" }} />
					<Input
						placeholder="Search"
						border={"none"}
						focusBorderColor="transparent"
					/>
				</Flex>
				<Link to={"/pesanan"} reloadDocument>
					<Flex justifyContent={"space-between"} alignItems={"center"}>
						<BsCart4 size={"20px"} />
					</Flex>
				</Link>
				{token ? (
					<>
						<HStack justifyContent={"right"} alignItems={"center"}>
							<FiInbox size={"20px"} style={{ cursor: "pointer" }} />
							<Avatar
								name={user.toUpperCase()}
								cursor={"pointer"}
								size={"sm"}
								ml={3}
								onClick={() => setDropdownMenu(!dropdownMenu)}
							/>
						</HStack>
						{dropdownMenu && (
							<DropdownNavbar/>
						)}
					</>
				) : (
					<Flex justifyContent={"space-around"}>
						<Link to={"/login"}>
							<Button bg={"green.400"} color={"white"} mr={3}>
								Masuk
							</Button>
						</Link>
						<Link to={"/register"}>
							<Button>Daftar</Button>
						</Link>
					</Flex>
				)}
			</HStack>
		</>
	);
};

export default Navbar;
