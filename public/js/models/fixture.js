angular
  .module('FootballClubManager')
  .factory('Fixture', Fixture);

Fixture.$inject = ["$resource"];
function Fixture($resource) {
  return $resource('/api/fixtures/:id', { id: '@_id' },  {
    update: {
      method: "PUT",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform
    },
    save: {
      method: "POST",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform
    }
  });
}