app.config(function (jwtInterceptorProvider, $httpProvider){
	jwtInterceptorProvider.tokenGetter = function (store) {
		return store.get('jwt')
	}

	$httpProvider.interceptors.push('jwtInterceptor')
})
