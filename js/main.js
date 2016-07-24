/**
 * ownCloud - contacts
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Hendrik Leppelsack <hendrik@leppelsack.de>
 * @copyright Hendrik Leppelsack 2015
 */

angular.module('contactsApp', ['uuid4', 'angular-cache', 'ngRoute', 'ui.bootstrap', 'ui.select', 'ngSanitize'])
.config(function($routeProvider) {

	$routeProvider.when('/:gid', {
		template: '<contactdetails></contactdetails>'
	});

	$routeProvider.when('/:gid/:uid', {
		template: '<contactdetails></contactdetails>'
	});

	$routeProvider.otherwise('/' + t('contacts', 'All contacts'));

});

angular.module('contactsApp')
.run(['$document', '$rootScope',
	function ($document, $rootScope) {
		'use strict';

		$document.click(function (event) {
			$rootScope.$broadcast('documentClicked', event);
		});
	}
]);