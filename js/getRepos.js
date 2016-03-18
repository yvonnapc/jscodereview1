var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#showLogin').append("Github Username: " + response.login);
    $('#showName').append("Name: " + response.name);
    $('#showRepos').append("Public Repositories: " +  response.public_repos);
    $('#showCompany').append("Company: " +  response.company);
    $('#showLocation').append("Location: " +  response.location);
  }).fail(function(error){
  $('.showError').append("ERROR");
  });
};
// });
