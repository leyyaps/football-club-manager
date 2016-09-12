angular
  .module('FootballClubManager')
  .factory('Fixture', Fixture);

Fixture.$inject = ["$resource", "formData"];
function Fixture($resource, formData) {
  return $resource('/api/films/:id', { id: '@_id' },  {
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