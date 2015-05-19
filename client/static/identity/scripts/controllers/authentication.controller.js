app.controller('Authentication', function (store, authenticationAPI, $mdBottomSheet, $mdSidenav) {
	var viewModel = this

	viewModel.authenticate = function (user) {
		authenticationAPI.authenticate(user)
			.then(function (promise) {
				if (promise.user && promise.token) {
					viewModel.user = promise.user
					store.set('jwt', promise.token)
				} else {
					$mdToast.showSimple(promise.error)
				}
			})
	}

	viewModel.register = function (user) {
		authenticationAPI.register(user)
			.then(function (promise) {
				if (promise.user && promise.token) {
					viewModel.user = promise.user
					store.set('jwt', promise.token)
				} else {
					$mdToast.showSimple(promise.error)
				}
			})
	}

	viewModel.toggleLeftSidenav = function () {
		console.log('hey')
		$mdSidenav('sidenav-left').toggle()
	}

	// viewModel.unauthenticate = function () {
	// 	authenticationAPI.unauthenticate($scope.currentUser)
	// 		.then(function (promise) {
	// 			$scope.currentUser = promise.user
	// 		})
	// }
})
