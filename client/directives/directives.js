// DIRECTIVES
myApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: '/client/directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});