// const order = require("../model/OrderSchema");

// const addOrderedProduct = (req, res) => {};

// const getAllOrdered = (req, res) => {
// 	const result = checkQuery(req, res);
// 	if (!result) res.sendStatus(404);
// 	if (result) {
// 		res.sendStatus(200);
// 	}
// };

// const getOrderedByDay = (req, res, day) => {
// 	res.send(day);
// 	console.log(req.query.day);
// };

// const getDetailOrdered = (req, res, order) => {
// 	res.send(req.query.product);
// 	console.log(req.query.product);
// };

// module.exports = {
// 	addOrderedProduct,
// 	getAllOrdered,
// 	getDetailOrdered,
// 	getOrderedByDay,
// };

// function checkQuery(req, res) {
// 	const day = req.query.day;
// 	const product = req.query.product;
// 	console.log(req.url);
// 	if (day) {
// 		getOrderByDay(req, res, day);
// 	} else if (product) {
// 		getDetailOrder(req, res, order);
// 	} else if (req.url === "/order") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
