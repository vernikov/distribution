app.controller('User', function (userAPI, $upload, $mdToast) {
	var viewModel = this

	var success = function (promise) {
		if (promise.user) {
			viewModel.user = promise.user
		} else {
			$mdToast.showSimple(promise.error)
		}
	}

	var error = function (error) {
		$mdToast.showSimple('Something went wrong')
	}

	viewModel.upload = function (files) {
		if (files && files.length) {
			$upload.upload({
				url: '/api/upload',
				file: files
			})
				.then(success, error)
		}
	}

	viewModel.create = function (user) {
		userAPI.create(user)
			.then(success, error)
	}

	viewModel.read = function (user) {
		userAPI.read(user)
			.then(success, error)
	}

	viewModel.update = function (user) {
		userAPI.update(user)
			.then(success, error)
	}

	viewModel.delete = function (user) {
		userAPI.delete(user)
			.then(success, error)
	}
})
