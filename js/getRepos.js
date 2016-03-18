var apiKey = require('./../.env').apiKey;

exports.getRepos = function(searchedUser){
  $.get('https://api.github.com/users/' + searchedUser + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(i=0; i<response.length; i++){
      var name = response[i].name;
      var description = response[i].description;
    $('#showInfo').append("<li>Github Username: " + name + "</li>" + "<li>Description: " + description + "</li>");
  };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
// });
