app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl : "view/view.html",
			controller: 'viewCtrl'
		})
		.when("/add", {
			templateUrl : "view/add.html",
			controller: 'addCtrl'
		})
		.when("/book/:id", {
			templateUrl : "view/book.html",
			controller: 'bookCtrl'
		})
		.when("/edit/:id", {
			templateUrl : "view/add.html",
			controller: 'editCtrl'
		})
		.when("/about", {
			templateUrl : "view/about.html"
		})
		.otherwise({redirectTo:'/404'});
});