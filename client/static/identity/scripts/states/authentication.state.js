app.config(function ($stateProvider) {
	$stateProvider.state('layout.authentication', {
		abstract: true,
		url: '',
		data: {
			'user': null
		},
		views: {
			'upper-toolbar@layout': {
				templateUrl: 'static/identity/views/user_data.html',
				controller: 'Authentication as controller'
			}
		}
	})
})
