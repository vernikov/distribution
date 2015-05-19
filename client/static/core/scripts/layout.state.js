app.config(function ($stateProvider) {
	$stateProvider.state('layout', {
		abstract: true,
		url: '',
		views: {
			'layout': {
				templateUrl: 'static/core/views/layout.html'
			}
		}
	})
})
