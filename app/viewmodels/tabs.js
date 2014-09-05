define(function(require) {
    var router = require('plugins/router'),
        ko = require('knockout');

    var childRouter = router.createChildRouter()
    	.makeRelative({
    		fromParent: true,
    		dynamicHash: ':id'
    	}).map([
    		{ route: 'details', title: 'Details', moduleId: 'viewmodels/details', nav: true }
    	]).buildNavigationModel();

    return {
    	router: childRouter
    }
});