import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

const TabsOrderInfo = ({ children }) => {
	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Cart</Tab>
					<Tab>Order</Tab>
					<Tab>Success</Tab>
				</TabList>
				<TabPanels>
					{children}
				</TabPanels>
			</Tabs>
		</>
	);
};

export default TabsOrderInfo;
