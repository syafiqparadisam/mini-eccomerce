import { Flex, Avatar, Input, Text } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PiListBold } from "react-icons/pi";
import { useState } from "react";
import { useSelector } from "react-redux";
import Topic from "../features/topic/Topic";
import { LuSearch } from "react-icons/lu";
import DropdownSearch from "../utils/search/DropdownSearch";

const Topbar = () => {
	const [dropdownSearchList, setDropdownSearchList] = useState(false);
	const [value, setValue] = useState("");
	const topic = useSelector((state) => state.topic);
	const findTopic = topic.find((data) => data.includes(value));
	const topicList = findTopic
		? topic.map((data, i) => (<Topic key={i} value={data} />))
		: null;
	console.log(topicList);
	return (
		<Flex
			bg={"black"}
			justifyContent={"space-between"}
			alignItems={"center"}
			p={3}
		>
			<Flex>
				<PiListBold color="white" size={"25px"} />
			</Flex>
			<Flex
				onClick={() => setDropdownSearchList(true)}
				onBlur={() => (this.style.display = "none")}
				flexDir={"column"}
				justifyContent={"center"}
			>
				<Input
					type="text"
					size={"md"}
					width={"550px"}
					color={"white"}
					_focus={{ border: "2px solid white" }}
					borderRadius={"20px"}
					colorScheme={"white"}
					border={"2px solid white"}
					placeholder={"Search"}
					cursor={"pointer"}
					fontSize={"18px"}
					maxLength={50}
					onChange={(e) => setValue(e.target.value)}
					_placeholder={{ color: "white" }}
				/>
				{dropdownSearchList && value !== "" && (
					<DropdownSearch topicList={topicList} value={value}/>
				)}
			</Flex>
			<Flex>
				<Link to={"/users/profile"}>
					<Avatar
						icon={<AiOutlineUser size={"10px"} />}
						color={"white"}
						size={"sm"}
					/>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Topbar;
