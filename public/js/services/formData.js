angular
  .module('FootballClubManager')
  .factory('formData', formData);

function formData() {
  return {
    transform: function(data) {
      var formData = new FormData();
      angular.forEach(data, function(value, key) {

        if(!value) return false;

        if(value._id) value = value._id;
        if(!key.match(/^\$/)) formData.append(key, value);
      });

      return formData;
    }
  }
}