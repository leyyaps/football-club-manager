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

    self.selected.players.splice(index, 1);
    this.selected.$update(function(fixture){
      $rootScope.$applyAsync(function() {
        self.selected = fixture;
      });
    });
  }

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("fixturesIndex");
    });
  }
}





// function availabilityController(Fixture, $state){

//   this.selected = Fixture.get($state.params);

//   var self = this;

//   self.addPlayer = addPlayer;
//   self.removePlayer = removePlayer;
//   self.playersAvailable = playersAvailable;
//   self.notResponded = notResponded;


//   function addPlayer(){
//     self.players.push({task: self.text, done: false});
//     self.text = null;
//   }

//   function removePlayer($index){
//     self.players.splice($index, 1);
//   }

//   function playersAvailable(){
//     return self.players.filter(function(x){ return x.done == true; })
//   }

//   function notResponded(){
//     return self.players.filter(function(x){ return x.done == false; })
//   }

// }