var Q = require('Q');

var countData = {};

var counts = [
	{
		id: 'abc123',
		org_id: 'SABA',
		start: '2015-11-01T18:00:00.000Z',
		end: '2015-11-01T20:00:00.000Z',
		name: 'Freeport and Vallejo',
		NS_Street: 'Freeport Blvd.',
		EW_Street: 'Vallejo Way',
		latitude: 38.5513534,
		longitude: -121.4889744,
		travelers: [
			{
				id: 1,
				name: 'BikeFemale',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.png',
				order: 1
			},
			{
				id: 2,
				name: 'BikeMale',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeMale.png',
				order: 2
			},
			{
				id: 3,
				name: 'BikeFemaleWalk',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeFemaleWalk.png',
				order: 3
			},
			{
				id: 4,
				name: 'BikeMaleWalk',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeMaleWalk.png',
				order: 4
			}
		]
	},
	{
		id: 'abc456',
		org_id: 'SABA',
		start: '2015-11-01T18:00:00.000Z',
		end: '2015-11-01T20:00:00.000Z',
		name: 'Something and Somewhere',
		NS_Street: 'Freeport Blvd.',
		EW_Street: 'Vallejo Way',
		latitude: 38.5513534,
		longitude: -121.4889744,
		travelers: [
			{
				id: 1,
				name: 'BikeFemale',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.png',
				order: 1
			},
			{
				id: 2,
				name: 'BikeMale',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeMale.png',
				order: 2
			},
			{
				id: 3,
				name: 'BikeFemaleWalk',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeFemaleWalk.png',
				order: 3
			},
			{
				id: 4,
				name: 'BikeMaleWalk',
				icon_url: 'http://bikeandwalk.org/v2.1/images/BikeFemale.pngimages/BikeMaleWalk.png',
				order: 4
			}
		]
	},
];

countData.get = function (id) {
	
	var deferred = Q.defer();
	
	setTimeout(function () {
		
		var count = null;

		try {
			counts.forEach(function (item) {

				if (item.id === id) {

					count = item;
				}
			});
			
			deferred.resolve(count);
		} catch (ex) {
			deferred.reject(ex);
		}
		
	}, 100);
	
	return deferred.promise;
};

module.exports = countData;