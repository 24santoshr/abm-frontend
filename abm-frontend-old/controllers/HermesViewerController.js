angular.module('de.fraunhofer.abm').controller('hermesViewerController', function($uibModalInstance, $rootScope, $scope, $http, $cookies, $location, $timeout,
		Notification, hermesViewerService) {
	var $ctrl = this;
	$ctrl.version = hermesViewerService.version;
	$ctrl.collection = hermesViewerService.collection;
	$scope.loading = false;
	$scope.resultList = [];
	$scope.queriesList = [];
	
	
	
	$ctrl.loadResults = function(){
		$rootScope.loading = true;
		$http.get('/rest/hermesResults/'+ hermesViewerService.version.id).then(
		  function success(d){
			  $scope.resultList = d.data;
			    		     
		  }, function failure(d){
				 Notification.error('Failed with ['+d.status+ '] '+ d.statusText);
			 })['finally'](function(){
				 $rootScope.loading = false;
			 })	;	
		}
	
$ctrl.loadHeaders = function(){
		
		$rootScope.loading = true;
		$http.get('/rest/resultHeader/'+ hermesViewerService.version.id).then(
		  function success(d){
			  $scope.queriesList = d.data;		  
			  		    
		  }, function failure(d){
				 Notification.error('Failed with ['+d.status+ '] '+ d.statusText);
			 })['finally'](function(){
				 $rootScope.loading = false;
			 })	;	
	}
	
	
	$ctrl.download = function(){
		$http({
			method: 'GET',
			url: '/rest/instance/'+ hermesViewerService.version.id
			}).then(
				function success(d) {
					self.hermesResult = d.data;
					if(self.hermesResult.status == 'RUNNING'){
						Notification.error('Hermes is in progress, try again later');
					} else {
					location.href = '/downloadHermes/' + self.hermesResult.id;}
				}, function failure(d){
					Notification.error('Failed with ['+ d.status + '] '+ d.statusText);
				})['finally'](function (){
					self.downloading = false;
				});
	}
	
	$ctrl.close = function() {
	    
		$uibModalInstance.close();
	};
	
	$ctrl.loadHeaders();
	$ctrl.loadResults();	
	
});