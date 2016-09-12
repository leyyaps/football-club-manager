angular
  .module('FootballClubManager')
  .controller("FixturesNewController", FixturesNewController);

FixturesNewController.$inject = ["Fixture", "$state"];
function FixturesNewController(Fixture, $state) {
  this.new = {};

  this.create = function() {
    Fixture.save(this.new, function() {
      $state.go('fixturesIndex');
    });
  }
}