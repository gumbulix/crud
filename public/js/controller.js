app.controller('viewCtrl', function(books, $scope, $location){

	$scope.books = books.get();

	$scope.showBook = function(bookID){
		$location.url('/book/' + bookID)
	}

	$scope.editBook = function(bookID){
		$location.url('/edit/' + bookID);
	}

})

.controller('bookCtrl', function ($scope, $routeParams, books, $location) {

	$scope.book = books.find($routeParams.id);

	$scope.removeBook = function(){
		books.delete($routeParams.id);
		$location.url('/');
	}

	$scope.editBook = function(){
		$location.url('/edit/' + $routeParams.id);		
	}
})

.controller('addCtrl', function($scope, $location, books){

	$scope.newBook = books.add();

	$scope.save = function(){
        $scope.newBook.$save().then(function(response){
            $location.url('/book/' + response.id);
        });
	}
})

.controller('editCtrl', function($scope, books, $routeParams, $location){

    $scope.newBook = books.update();
	$scope.newBook = books.find($routeParams.id);

	$scope.save = function(){
	    $scope.newBook.$update();
		$location.url('/book/' + $routeParams.id);
	}
})

.controller('navCtrl', function($scope, $location){
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.navItems = [{
        "name": "Home",
        "patch": "/"
    },{
        "name": "About",
        "patch": "/about"
    },{
        "name": "Example 1",
        "patch": "/#"
    },{
        "name": "Example 2",
        "patch": "/#"
    },{
        "name": "Contact",
        "patch": "/#"
    }];
});
