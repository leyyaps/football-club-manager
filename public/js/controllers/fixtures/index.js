angular
  .module('FootballClubManager')
  .controller("FixturesIndexController", FixturesIndexController);

FixturesIndexController.$inject = ["Fixture"];
function FixturesIndexController(Fixture) {
  this.all = Fixture.query();
}


