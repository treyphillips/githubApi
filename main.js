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

    $.getJSON("https://api.github.com/users/treyphillips/repos").done(function(items) {
      var repoSort = _.sortBy(items, 'updated_at').reverse();
      _.each(repoSort, function(item) {
        renderTemplate('#repo','#test',item);

      });
    });


    $.getJSON("https://api.github.com/users/treyphillips").done(function(result) {
        renderTemplate('#sideBar','#sideInfo',result);
        // console.log(result);

    });

  });
})();
