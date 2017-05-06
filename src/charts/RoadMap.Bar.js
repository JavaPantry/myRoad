'use strict';

module.exports = function(RoadMap) {

    RoadMap.Bar = function(context, config) {
		config.type = 'bar';

		return new RoadMap(context, config);
	};

};
