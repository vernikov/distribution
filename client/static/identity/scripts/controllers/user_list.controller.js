app.controller('UserList', function (userAPI, $upload, $mdToast, $mdSidenav) {
	var viewModel = this

	viewModel.list = function () {
		userAPI
			.list()
			.then(function (promise) {
				if (promise.users) {
					viewModel.users = promise.users
				} else {
					$mdToast.showSimple(promise.error)
				}
			}, function (error) {
				$mdToast.showSimple('Something went wrong')
			})
	}

	viewModel.delete = function (user) {
		userAPI
			.delete(user)
			.then(function (promise) {
				if (promise.user) {
					$mdToast.showSimple('User is deleted')
					viewModel.list()
				} else {
					$mdToast.showSimple(promise.error)
				}
			}, function (error) {
				$mdToast.showSimple('Something went wrong')
			})
	}

	viewModel.list()
})
