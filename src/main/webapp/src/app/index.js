var app=angular.module("app", ['nvd3','ui.bootstrap','RecursionHelper']);

var pages=[];

app.controller("main",['$scope','$http', function ($scope,$http)
{

  $scope.data=[
    { "label" : "A" , "value" : 0 },
    { "label" : "B" , "value" : 0 },
    { "label" : "C" , "value" : 0 },
    { "label" : "D" , "value" : 0 },
    { "label" : "E" , "value" : 0 }
  ];

  $scope.dataFieldName=fillFieldName($scope.data);
  $scope.limit_col=3;
  $scope.limit_line=50;

  $scope.chart = {};
  $scope.chart.chart_options = {
    chart: {
      type: 'discreteBarChart',
      x: function(d){ return d.label; },
      y: function(d){ return d.value; },
      showValues: true,
      valueFormat: function(d){
        return d3.format(',.4f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
      }
    }
  };


  $scope.load= function(request) {
    var body={};
    body.request=request;
    $http.get('/api/v1/temperature/5982/byweek',body)
      .success(function (data) {
        $scope.dataFieldName=[];
        $scope.data=eval(data);
        $scope.dataFieldName=fillFieldName($scope.data);
          refreshGraph();
      })
      .error(function (resp) {
        console.log("Error");
      });
  };

  $scope.chart.chart_config = {
    visible: true, // default: true
      extended: false, // default: false
    disabled: false, // default: false
    autorefresh: true, // default: true
    refreshDataOnly: false // default: false
  };

  var refreshGraph= function() {

    convertDataToDataChart($scope.data,$scope.dataFieldName,$scope.chart);

  };
  refreshGraph();

}]);



var fillFieldName =function(data) {
  var dataFieldName=[];
  angular.forEach(Object.keys(data[0]), function(value) {
    dataFieldName.push(value);
  });
  return dataFieldName
}


var convertDataToDataChart=function(data,dataFieldName,target) {
  target.chart_data = [];
  target.chart_data.push({key: 'label', values: []});
  angular.forEach(data, function(line) {
    var value = {};
    angular.forEach(dataFieldName, function (fieldname, index) {
      var result = fieldNameConverter(line, fieldname);
        if (index == 0) {
          value.label = result;
        }
        if (index == 1) {
          value.value = result;
        }
    });

    target.chart_data[0].values.push(value);

  });
}




var fieldNameConverter=function (object, name) {
  return object[name];
};

app.filter("fieldName", function () {
  return function (object, name) {
    return fieldNameConverter(object, name);
  };
});






