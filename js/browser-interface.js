var getRepos = require("./../js/getRepos.js").getRepos;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchedUser = $('#searchedUser').val();
    getRepos(searchedUser);
  });
});
