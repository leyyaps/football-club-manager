angular
  .module('FootballClubManager')
  .factory('Ground', Ground);

Ground.$inject = ["$resource", "API_URL"];
function Ground($resource, API_URL) {
  return $resource(API_URL + "/grounds", { id: '@_id' }, {
    update: { method: "PUT" }
  });
}