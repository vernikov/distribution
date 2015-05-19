app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.when('', '/partners')

	$stateProvider.state('layout.authentication.landing', {
		url: '/partners',
		views: {
			'content@layout': {
				templateUrl: 'static/landing/views/landing.html'
			},
			'contacts@layout': {
				templateUrl: 'static/core/views/contacts.html'
			}
		}
	})
})
