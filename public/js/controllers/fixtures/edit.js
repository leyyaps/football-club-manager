angular
  .module('FootballClubManager')
  .controller("FixturesEditController", FixturesEditController);

FixturesEditController.$inject = ["Fixture", "$state", "Ground"];
function FixturesEditController(Fixture, $state, Ground ) {
  this.selected = Fixture.get($state.params);
  this.grounds = Ground.query();
  
  this.save = function() {
    
    this.selected.$update(function() {

      $state.go('fixturesShow', $state.params);
    });
  }
}