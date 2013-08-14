'use strict';

var directives = angular.module('monaca.directives'); // no [] -> referencing existing module

directives.directive('monacaListItem', function(MONACA_CONSTANTS) {
	return {
		restrict: 'E',
		replace: false,
		transclude: true,
		templateUrl: MONACA_CONSTANTS.DIRECTIVE_TEMPLATE_URL + '/list_item.html'
	};
});