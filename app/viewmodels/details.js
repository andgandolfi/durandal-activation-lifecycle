define(function(require) {
	var router = require('plugins/router'),
		ko = require('knockout');

	var vm = {};

	vm.gotoBar = function() {
		router.navigate('#foo/1234/bar');
	};

	vm.activate = function() {
		alert('activate');
		console.log('********** ACTIVATE **********')
	};

	return vm;
})