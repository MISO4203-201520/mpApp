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
        'xeditable',
        'commentModule',
        'paymentCardsModule',        
        'adminModule',
        'forgotModule'
    ]);

    mainApp.config(['$routeProvider', 'CrudTemplateURL', 'CrudCtrlAlias', function ($routeProvider, tplUrl, alias) {
            $routeProvider.when('/client', {
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
            }).when('/app', {
                templateUrl: tplUrl,
                controller: 'appCtrl',
                controllerAs: alias
            }).when('/comment', {
                templateUrl: tplUrl,
                controller: 'commentCtrl',
                controllerAs: alias
            }).when('/paymentCard', {
                templateUrl: tplUrl,
                controller: 'paymentCtrl',
                controllerAs: alias 
             }).when('/admin/clients', {
                templateUrl: 'src/modules/admin/users.tpl.html',
                controller: 'adminClientCtrl',
                controllerAs: alias 
             }).when('/forgot', {
                templateUrl: 'src/modules/forgotPass/forgot.tpl.html',
                controller: 'forgotCtrl',
                controllerAs: alias 
             }).when('/verify', {
                templateUrl: 'src/modules/forgotPass/verify.tpl.html',
                controller: 'verifyCtrl',
                controllerAs: alias 
             }).when('/change', {
                templateUrl: 'src/modules/forgotPass/change.tpl.html',
                controller: 'forgotCtrl',
                controllerAs: alias 
             }).when('/admin/developers', {
                templateUrl: 'src/modules/admin/users.tpl.html',
                controller: 'adminDevCtrl',
                controllerAs: alias 
            }).otherwise('/catalog');
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
