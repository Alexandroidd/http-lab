angular.module("criminalApp", [])
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];


function CriminalsController($http){
	var context = this;
	context.all = [];
	context.addCriminal = addCriminal;
	context.newCriminal = {};
	context.getCriminals = getCriminals;
	context.deleteCriminals = deleteCriminals;


		getCriminals();
		function getCriminals(){
			$http
			.get('http://localhost:3000/criminals')
			.then(function(response){
				context.all = response.data;
				console.log(context.all);
			});
		}

		
		function addCriminal(){
			$http
			.post('http://localhost:3000/criminals', context.newCriminal)
			.then(function(response){
				getCriminals();
			});
		context.newCriminal = {};
		}

		
		function deleteCriminals(id){
			console.log(id);
			$http
			.delete('http://localhost:3000/criminals/' + id)
			.then(function(response){
				var index = context.all.indexOf(criminals);
				context.all.splice(index,1);
			});
		}


}