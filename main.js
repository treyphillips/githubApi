(function() {
  'use strict';

// var repoTemplate = _.template($('.repoTemplate').text());
var myGitHubAddress=  "https://api.github.com/users/treyphillips/repos"
var githubUrl = myGitHubAddress + "?access+token=" + window.token;

$.ajax({
  url: "https://api.github.com/users/treyphillips/repos",
})

.done(function(data) {
  console.log(data);
});










})();
