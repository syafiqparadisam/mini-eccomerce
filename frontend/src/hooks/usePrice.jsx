import { useState } from "react";

const usePrice = (harga) => {
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(harga);
	function upPrice() {
		setQuantity((p) => p + 1);
		setPrice((price) => price + harga);
	}
	function changeQuantityWithKey(e) {
		const value = parseInt(e.target.value);
		if (
			(e.key === "Enter" || e.keyCode === 13 || e.ta) &&
			!isNaN(value) &&
			value >= 1 
			) {
			e.preventDefault()
			console.log(value)
			setQuantity(value);
			setPrice(harga * value);
		}
	}
	
	function downPrice() {
		setQuantity((p) => p - 1);
		setPrice((price) => price - harga);
		if (quantity <= 1 && price <= harga) {
			setQuantity(1);
			setPrice(harga);
		}
	}
	function resetPrice() {
		setQuantity(1);
		setPrice(harga);
	}
	return {
		upPrice,
		downPrice,
		resetPrice,
		changeQuantityWithKey,
		price,
		quantity,
	};
};

export default usePrice;
