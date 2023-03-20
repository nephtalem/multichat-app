"use strict";

angular.module("blogList").component("blogList",
  {
    template: `<div>
        <h1>{title}</h1>
        <input type='text'>
    <div>`,
    controller: function($scope){
        $scope.title='chat box'
    }
  });
