app.controller('UserUpdate', function (userAPI, $upload, $mdToast, $stateParams) {
	var viewModel = this

	viewModel.read = function (user) {
		userAPI
			.read(user)
			.then(function (promise) {
				if (promise.user) {
					viewModel.user = promise.user
				} else {
					$mdToast.showSimple(promise.error)
				}
			}, function (error) {
				$mdToast.showSimple('Unexpected error')
			})
	}

	viewModel.update = function (user) {
		userAPI
			.update(user)
			.then(success, error)
	}

	viewModel.upload = function (files) {
		if (files && files.length) {
			$upload.upload({
				url: '/api/upload',
				file: files,
				fields: {'user': viewModel.user.id}
			})
				.then(success, error)
		}
	}

	viewModel.user = {}
	viewModel.user.id = $stateParams.id
	viewModel.read(viewModel.user)
})
