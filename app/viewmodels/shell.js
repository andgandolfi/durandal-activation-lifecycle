define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'First', moduleId: 'viewmodels/first', nav: true },
                { route: 'foo/:id/tab*details', title: 'Foo', moduleId: 'viewmodels/tabs', nav: false},
                { route: 'foo/:id/bar', title: 'Bar', moduleId: 'viewmodels/bar', nav: false}
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});