import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const BuyAlert = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const {id} = useParams()
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Apakah kamu yakin ingin membeli produk ini?
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Barang Yang Sudah Dibeli Tidak Bisa Dikembalikan Lagi
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="red" onClick={onClose}>
							Tidak
						</Button>
						<Button colorScheme="green" ml={2} onClick={() => navigate(`/ordering?productId=${id}`)}>
							Beli
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default BuyAlert;
