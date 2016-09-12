angular
  .module("FootballClubManager", ['ui.router', 'ngResource', 'angular-jwt'])
  .constant("API_URL", "http://localhost:8000/api")
  .config(setupInterceptor)
  .config(Router);

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
    .state("fixtures", {
      url: "/fixtures",
      templateUrl: "/templates/fixtures.html",
      controller: "FixturesIndexController as fixturesIndex"
    })
    .state("fixturesNew", {
      url: "/fixtures/new",
      templateUrl: "/templates/fixtures/new.html",
      controller: "FixturesNewController as fixturesNew"
    })
    .state("fixturesShow", {
      url: "/fixtures/show",
      templateUrl: "/templates/fixtures/show.html",
      controller: "FixturesShowController as fixturesShow"
    });
    .state("fixturesEdit", {
      url: "/fixtures/edit",
      templateUrl: "/templates/fixtures/edit.html",
      controller: "FixturesEditController as fixturesEdit"
    });

  $urlRouterProvider.otherwise("/");
}


