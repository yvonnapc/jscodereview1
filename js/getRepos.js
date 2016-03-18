var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $('#search').click(function(){
      $.get('https://api.github.com/users/yvonnapc?access_token=' + apiKey).then(function(response)
      {
        $('.showInfo').text("The github user is");
      }).fail(function(error){
        $('.showError').append("ERROR");
    });
    };
});
