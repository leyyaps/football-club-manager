angular
  .module("FootballClubManager")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["User", "$state", "$rootScope"];
function RegisterController(User, $state, $rootScope) {

  this.user = {};

  this.submit = function() {
    console.log(this.user)
    User.register(this.user, function(res) {
      $rootScope.$broadcast("loggedIn");
      $state.go("fixturesIndex");
    });
  }

}