angular
  .module('FootballClubManager')
  .controller("FixturesShowController", FixturesShowController);

FixturesShowController.$inject = ["Fixture", "$state", "TokenService", "$rootScope"];
function FixturesShowController(Fixture, $state, TokenService, $rootScope) {
  var self = this;

  Fixture.get($state.params, function(fixture) {
    self.mapCenter = { lat: fixture.ground.lat, lng: fixture.ground.lng };
    self.selected = fixture;
    self.isPlaying = function() {
      return self.selected.players.filter(function(player) {
        return player._id == self.currentUser._id;
      }).length === 1;
    }
  });
  
  this.currentUser = TokenService.decodeToken();
  
  this.available = function(){
    this.selected.players.push(this.currentUser)
    this.selected.$update(function(fixture){
      $rootScope.$applyAsync(function() {
        
        self.selected = fixture;
      });
    });
  }

  this.remove = function(){
    var index = self.selected.players.findIndex(function(player) {
      return player._id === self.selected._id;
    });
   
    if(index >= -1) {
      self.selected.players.splice(index, 1);
      this.selected.$update(function(fixture){
        $rootScope.$applyAsync(function() {
          self.selected = fixture;
        });
      });
    }
  }

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("fixturesIndex");
    });
  }
}


