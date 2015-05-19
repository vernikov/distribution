app.controller('UserCreate', function (userAPI, $upload, $mdToast) {
	var viewModel = this

	viewModel.create = function (user) {
		userAPI
			.create(user)
			.then(function (promise) {
				$mdToast.showSimple('Promise success')
			},
			function (error) {
				$mdToast.showSimple('Promise error')
			})
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
})
