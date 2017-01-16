app.factory('books', function ($resource) {

	var Resource = $resource('api/books/:id', {id: '@id'}, {
		update : {method: 'PUT'}
	});

	return{
		get : function(){
			return Resource.query();
		},

		find : function(id){
			return Resource.get({ id: id});
		},

		delete : function(id){
			Resource.delete({id: id});
		},

        update : function(){
            return new Resource();
		},

		add : function(){
			return new Resource();
		}
	}

});