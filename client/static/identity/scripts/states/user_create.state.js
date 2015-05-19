app.config(function ($stateProvider) {
	$stateProvider.state('layout.authentication.user_create', {
		url: '/user',
		views: {
			'lower-toolbar@layout': {
				templateUrl: 'static/identity/views/user_details_toolbar.html'
			},
			'sidenav-content@layout': {
				templateUrl: 'static/identity/views/user_type_list.html'
			},
			'content@layout': {
				templateUrl: 'static/identity/views/user_details.html',
				controller: 'UserCreate as controller'
			}
		}
	})
})
