angular
  .module('FootballClubManager')
  .controller("FixturesEditController", FixturesEditController);

FixturesEditController.$inject = ["Fixture", "$state"];
function FixturesEditController(Fixture, $state ) {
  this.selected = Fixture.get($state.params);
  var self = this;
  self.save = function() {
    
    self.selected.$update(function() {

      $state.go('fixturesShow', $state.params);
    });
  }
}