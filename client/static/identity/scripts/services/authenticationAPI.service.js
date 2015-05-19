app.service('authenticationAPI', function ($http) {
	this.authenticate = function (user) {
		return $http
			.post("/api/user/authentication", { data: user })
			.then(function (promise) {
				return promise.data
			})
			.catch(function (error) {
				return error.data
			})
	}

	this.register = function (user) {
		return $http
			.post("/api/user/registration", { data: user })
			.then(function (promise) {
				return promise.data
			})
			.catch(function (error) {
				return error.data
			})
	}
})
