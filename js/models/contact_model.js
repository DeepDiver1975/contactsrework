app.factory('Contact', [ '$filter', function($filter) {
	return function Contact(vCard) {
		angular.extend(this, {

			data: {},
			props: {},

			uid: function(value) {
				if (angular.isDefined(value)) {
					// setter
					return this.setProperty('uid', { value: value });
				} else {
					// getter
					return this.getProperty('uid').value;
				}
			},

			fullName: function(value) {
				if (angular.isDefined(value)) {
					// setter
					return this.setProperty('fn', { value: value });
				} else {
					// getter
					var property = this.getProperty('fn');
					if(property) {
						return property.value;
					} else {
						return undefined;
					}
				}
			},

			email: function(value) {
				return this.gettersetter('email', value);
			},
			nickname: function(value) {
				return this.gettersetter('nickname', value);
			},
			title: function(value) {
				return this.gettersetter('title', value);
			},

			categories: function(value) {
				if (angular.isDefined(value)) {
					// setter
					return this.setProperty('categories', { value: value });
				} else {
					// getter
					var property = this.getProperty('categories');
					if(property) {
						return property.value.split(',');
					} else {
						return [];
					}
				}
			},

			getProperty: function(name) {
				if (this.props[name]) {
					return this.props[name][0];
				} else {
					return undefined;
				}
			},

			setProperty: function(name, data) {
				if(!this.props[name]) {
					this.props[name] = [];
				}
				this.props[name][0] = data;

				// keep vCard in sync
				this.data.addressData = $filter('JSON2vCard')(this.props);
			},

			delete: function() {
				console.log('deleting...');
			},

			setETag: function(etag) {
				this.data.etag = etag;
			},

			setUrl: function(addressBook, uid) {
				this.data.url = addressBook.url + uid + ".vcf";
			},

			gettersetter: function (name, value) {
				if (angular.isDefined(value)) {
					// setter
					return this.setProperty(name, { value: value });
				} else {
					// getter
					var property = this.getProperty(name);
					if(property) {
						return property.value;
					} else {
						return undefined;
					}
				}

			}

			/*getPropertyValue: function(property) {
				if(property.value instanceof Array) {
					return property.value.join(' ');
				} else {
					return property.value;
				}
			},

			setPropertyValue: function(property, propertyValue) {
				property[3] = propertyValue;
				this.update();
			},

			update: function() {
				ContactService.update(this.jCard);
			}*/

		});

		console.log('create');

		if(angular.isDefined(vCard)) {
			angular.extend(this.data, vCard);
			angular.extend(this.props, $filter('vCard2JSON')(this.data.addressData));
		} else {
			angular.extend(this.props, {
				version: [{value: "4.0"}],
				fn: [{value: "Max Mustermann"}]
			});
			this.data.addressData = $filter('JSON2vCard')(this.props);
		}
	};
}]);
