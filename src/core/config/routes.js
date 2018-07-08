const appUrl = require("../assets/partials/app.html");
const pageUrl = require("../assets/partials/page.html");

export default function routes(
  $urlRouterProvider,
  $stateProvider,
  $locationProvider
) {
  $urlRouterProvider.otherwise("/page/login/");
  $locationProvider.html5Mode(process.env.HTML_MODE);

  $urlRouterProvider.rule(($injector, $location) => {
    const path = $location.url();

    // check to see if the path already has a slash where it should be
    if (path[path.length - 1] === "/" || path.indexOf("/?") > -1) {
      return;
    }

    if (path.indexOf("?") > -1) {
      return path.replace("?", "/?");
    }

    return path + "/";
  });

  $stateProvider
    .state("app", {
      url: "/app",
      abstract: true,
      templateUrl: appUrl
    })
    .state("page", {
      url: "/page",
      abstract: true,
      templateUrl: pageUrl
    });
}

routes.$inject = ["$urlRouterProvider", "$stateProvider", "$locationProvider"];
