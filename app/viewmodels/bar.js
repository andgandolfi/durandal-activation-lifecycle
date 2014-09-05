define(function(require) {
	var router = require('plugins/router'),
		ko = require('knockout');

	var vm = {};

	vm.gotoFooDetails = function() {
		router.navigate('#foo/1234/tab/details');
	};

	vm.activate = function() {
		alert('activate')
		console.log('********** ACTIVATE **********')
	};

	return vm;
})