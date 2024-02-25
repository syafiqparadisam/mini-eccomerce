const pesananController = require("../controller/pesananController");

function checkQuery(req, res) {
	const day = req.query.day;
	const product = req.query.product;
    let query;
	if (day) {
        query = day
		pesananController.getPesananByDay
	}
    if (product) {
        query = product
		pesananController.getDetailPesanan
	} 
}

module.exports = checkQuery;
