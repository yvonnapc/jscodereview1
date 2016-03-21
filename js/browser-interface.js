var getRepos = require("./../js/getRepos.js").getRepos;
var getUserInfo = require("./../js/getRepos.js").getUserInfo;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchedUser = $('#searchedUser').val();
    getRepos(searchedUser);
    getUserInfo(searchedUser);
  });
});
