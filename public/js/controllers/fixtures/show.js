angular
  .module('FootballClubManager')
  .controller("FixturesShowController", FixturesShowController);

FixturesShowController.$inject = ["Fixture", "$state"];
function FixturesShowController(Fixture, $state) {
  this.selected = Fixture.get($state.params);

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("fixturesIndex");
    });
  }
}