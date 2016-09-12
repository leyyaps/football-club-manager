angular
  .module('FootballClubManager')
  .controller("FixturesEditController", FixturesEditController);

FixturesEditController.$inject = ["Fixture", "$state"];
function FixturesEditController(Fixture, $state ) {
  this.selected = Fixture.get($state.params);

  this.save = function() {
    this.selected.$update(function() {
      $state.go('fixturesShow', $state.params);
    });
  }
}