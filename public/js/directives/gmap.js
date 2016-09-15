angular
  .module("FootballClubManager")
  .directive("gMap", gMap);

function gMap() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="g-map"></div>',
    scope: {
      center: '='
    },
    link: function(scope, element) {

      var map;

      scope.$watch('center.lat', createMap);
      scope.$watch('center.lng', createMap);

      function createMap() {

        if(!map && scope.center && scope.center.lat && scope.center.lng) {
          map = new google.maps.Map(element[0], {
            center: scope.center,
            zoom: 14
          });

          new google.maps.Marker({
            map: map,
            position: map.getCenter(),
            animation: google.maps.Animation.DROP
          });
        }
      }

    }
  }
}










