angular
  .module('FootballClubManager')
  .controller("FixturesNewController", FixturesNewController);

FixturesNewController.$inject = ["Fixture", "$state", "Ground"];
function FixturesNewController(Fixture, $state, Ground) {
  this.new = {};

  this.grounds = Ground.query();

  this.create = function() {
    Fixture.save(this.new, function() {
      $state.go('fixturesIndex');
    });
  }
}