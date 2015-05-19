app.controller('Users', function (userAPI, $upload, $mdToast, $mdSidenav) {
	var viewModel = this

	var success = function (promise) {
		if (promise.users) {
			viewModel.users = promise.users
			console.log(viewModel.users)
		} else {
			$mdToast.showSimple(promise.error)
		}
	}

	var error = function (error) {
		$mdToast.showSimple('Something went wrong')
	}


	viewModel.list = function () {
		userAPI.list()
			.then(success, error)
	}

	// $mdSidenav('sidenav-left').toggle()
	viewModel.list()
})
