(function() {
  'use strict';

  $(document).ready(function() {
    if (typeof token != 'undefined') {
      $.ajaxSetup({
        headers: {'Authorization': 'token ' + token}
      });
    };

    function renderTemplate(templateId, location, model) {
      var templateString = $(templateId).text();
      var templateFunction = _.template(templateString);
      var renderedTemplate = templateFunction(model);
      $(location).append(renderedTemplate);
    }

    var baseUrl = "https://api.github.com/users/treyphillips/";
    var myGitHubAddress = "https://api.github.com/users/treyphillips/repos";
    var githubUrl = myGitHubAddress + "?access+token=" + window.token;



    $.ajax({
      url: "https://api.github.com/users/treyphillips/repos",
    })

    .done(function(data) {
      
    });

    $.getJSON("https://api.github.com/users/treyphillips/repos").done(function(item) {
      var repoSort = _.sortBy(item, 'updated_at').reverse();
      _.each(repoSort, function(item) {
        var repoData = {
          name: item.name,
          updated: moment(item.updated_at).fromNow(),
          language: item.language,
          stargazers: item.stargazers_count,
          forks: item.forks,
          repoUrl: item.html_url,
          fullName: item.full_name
        };


        renderTemplate('#repo','#test',repoData);

      });
    });
  });
})();
