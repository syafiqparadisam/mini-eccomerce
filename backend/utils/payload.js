class LoginPayload {
	constructor(username, password) {
		(this.username = username), (this.password = password);
	}
}

module.exports = {
	LoginPayload,
};
