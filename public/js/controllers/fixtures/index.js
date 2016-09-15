angular
  .module('FootballClubManager')
  .controller("FixturesIndexController", FixturesIndexController);

FixturesIndexController.$inject = ["Fixture", "TokenService"];
function FixturesIndexController(Fixture, TokenService) {
  this.all = Fixture.query();

  this.currentUser = TokenService.decodeToken();
  console.log("User: ", this.currentUser);

}


