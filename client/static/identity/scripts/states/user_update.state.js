app.config(function ($stateProvider) {
	$stateProvider.state('layout.authentication.user_update', {
		url: '/user/:id',
		views: {
			'lower-toolbar@layout': {
				templateUrl: 'static/identity/views/user_details_toolbar.html'
			},
			'sidenav-content@layout': {
				templateUrl: 'static/identity/views/user_type_list.html'
			},
			'content@layout': {
				templateUrl: 'static/identity/views/user_details.html',
				controller: 'UserUpdate as controller'
			}
		}
	})
})
