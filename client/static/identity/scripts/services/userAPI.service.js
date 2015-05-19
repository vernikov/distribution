app.service('userAPI', function ($http, $upload) {
	var success = function (promise) {return promise.data}
	var error = function (error) {return error.data}

	this.create = function (user) {
		return $http.post("/api/user", { data: user })
			.then(success, error)
	}

	this.read = function (user) {
		return $http.get("/api/user/" + user.id)
			.then(success, error)
	}

	this.update = function (user) {
		return $http.patch("/api/user/" + user.id, { data: user })
			.then(success, error)
	}

	this.delete = function (user) {
		return $http.delete("/api/user/" + user.id)
			.then(success, error)
	}

	this.list = function () {
		return $http .get("/api/user")
			.then(success, error)
	}
})
