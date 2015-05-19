app.config(function ($stateProvider) {
	$stateProvider.state('layout.authentication.user_list', {
		url: '/users',
		views: {
			'lower-sidenav-toolbar@layout': {
				templateUrl: 'static/identity/views/user_type_list_toolbar.html'
			},
			'sidenav-content@layout': {
				templateUrl: 'static/identity/views/user_type_list.html'
			},
			'lower-toolbar@layout': {
				templateUrl: 'static/identity/views/user_list_toolbar.html'
			},
			'content@layout': {
				templateUrl: 'static/identity/views/user_list.html',
				controller: 'UserList as controller'
			}
		}
	})
})
