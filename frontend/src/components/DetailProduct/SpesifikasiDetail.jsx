import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Flex,
    Text
} from '@chakra-ui/react'

const SpesifikasiDetail = ({deskripsi}) => {
  return (
		<>
			<Tabs mt={3} width={'100%'}>
				<TabList color={'green.400'}>
					<Tab color={'green'}>Detail</Tab>
					<Tab color={'green'}>Panduan</Tab>
					<Tab color={'green'}>Tentang Toko</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Flex>
							<Text>{deskripsi}</Text>
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
}

export default SpesifikasiDetail