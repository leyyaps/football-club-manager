angular
  .module("FootballClubManager", ['ui.router', 'ngResource', 'angular-jwt'])
  .constant("API_URL", "/api")
  .config(setupInterceptor)
  .config(Router)
  .config(function() {
    Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  });

setupInterceptor.$inject = ["$httpProvider"];
function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
}

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/home.html"
    })
    .state("register", {
      url: "/register",
      templateUrl: "/templates/register.html",
      controller: "RegisterController as register"
    })
    .state("login", {
      url: "/login",
      templateUrl: "/templates/login.html",
      controller: "LoginController as login"
    })
    .state("users", {
      url: "/users",
      templateUrl: "/templates/users.html",
      controller: "UsersController as users"
    })
    .state("fixturesIndex", {
      url: "/fixtures",
      templateUrl: "/templates/fixtures/index.html",
      controller: "FixturesIndexController as fixturesIndex"
    })
    .state("fixturesNew", {
      url: "/fixtures/new",
      templateUrl: "/templates/fixtures/new.html",
      controller: "FixturesNewController as fixturesNew"
    })
    .state("fixturesShow", {
      url: "/fixtures/:id",
      templateUrl: "/templates/fixtures/show.html",
      controller: "FixturesShowController as fixturesShow"
    })
    .state("fixturesEdit", {
      url: "/fixtures/:id/edit",
      templateUrl: "/templates/fixtures/edit.html",
      controller: "FixturesEditController as fixturesEdit"
    });

  $urlRouterProvider.otherwise("/");
}


