var apiKey = require('./../.env').apiKey;

exports.getRepos = function(searchedUser){
  $.get('https://api.github.com/users/' + searchedUser + '/repos?access_token=951200f3cbf0e274fdff574adedcac54ab406973&per_page=1000').then(function(response){
    console.log(response);
    $('#showInfo').empty();
    for(i=0; i<response.length; i++){
      var name = response[i].name;
      var description = response[i].description;
      var date = moment(response[i].created_at).format('MMMM Do YYYY, hh:mm:ss:a');
      if(response[i].description === ""){
        var description = "N/A";
      }
      $('#showInfo').prepend("<li>Repository name: " + name + "</li>" +
                            "<ul><li>Description: " + description + "</li></ul>"+
                            "<ul><li>Created At: " + date + "</li></ul>"+
                             "<br>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getUserInfo = function(searchedUser){
  $.get('https://api.github.com/users/' + searchedUser + '?access_token=951200f3cbf0e274fdff574adedcac54ab406973').then(function(response){
    console.log(response);
    var image = response.avatar_url;
    $('#userInfo').append("<li><img src=" + image + "></li>");
  });
};
