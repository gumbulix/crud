app.controller('viewCtrl', function(books, $scope, $location){

	$scope.books = books.get();

	// $http.get('api/books').then(function(response){
	// 	$scope.books = response.data;
	// 	console.log($scope.books)
	// });

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
});
