(function (ng) {

    var mainApp = ng.module('mainApp', [
        //'ngCrudMock',
        'authModule',
        'appModule',
        'cartItemModule',
        'clientModule',
        'developerModule',
        'ngRoute',
        'ngCrud',
        'xeditable'
    ]);

    mainApp.config(['$routeProvider', 'CrudTemplateURL', 'CrudCtrlAlias', function ($routeProvider, tplUrl, alias) {
            $routeProvider
                .when('/client', {
                    templateUrl: tplUrl,
                    controller: 'clientCtrl',
                    controllerAs: alias
                }).when('/developer', {
                    templateUrl: tplUrl,
                    controller: 'developerCtrl',
                    controllerAs: alias
                }).when('/catalog', {
                        templateUrl: tplUrl,
                        controller: 'catalogCtrl',
                        controllerAs: alias
                }).when('/shoppingCart', {
                        templateUrl: 'src/modules/cartItem/shoppingCart.tpl.html',
                        controller: 'cartItemCtrl',
                        controllerAs: alias
                    })
                .otherwise('/catalog');
        }]);
    
    mainApp.config(['authServiceProvider', function (auth) {
            auth.setValues({
                apiUrl: 'users',
                successPath: '/catalog',
                loginPath: '/login',
                registerPath: '/register',
                logoutRedirect: '/login',
                loginURL: 'login',
                registerURL: 'register',
                logoutURL: 'logout',
                nameCookie: 'userCookie'
            });
            auth.setRoles({'user': 'Client', 'developer': 'Developer'});
        }]);

    mainApp.run(function (editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. For Xeditable plugin Angular
    });
})(window.angular);