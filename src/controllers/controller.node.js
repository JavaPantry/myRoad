'use strict';

module.exports = function(RoadMap) {

	var helpers = RoadMap.helpers;

    RoadMap.defaults.node = {
        hover: {
            mode: 'label'
        }


    };

	RoadMap.controllers.node = RoadMap.DatasetController.extend({

        dataElementType: null,// here we should define low level element class RoadMap.elements.Rectangle,

		initialize: function() {
			RoadMap.DatasetController.prototype.initialize.apply(me, arguments);
		},

		update: function(reset) {
			var me = this;
			var elements = me.getMeta().data;
			var i, ilen;

			for (i = 0, ilen = elements.length; i < ilen; ++i) {
				me.updateElement(elements[i], i, reset);
			}
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var dataset = me.getDataset();
			rectangle.pivot();
		},

		draw: function() {
			var me = this;
			var chart = me.chart;
			var elements = me.getMeta().data;
			var dataset = me.getDataset();
			var ilen = elements.length;
			var i = 0;
			var d;

			//helpers.canvas.clipArea(chart.ctx, chart.chartArea);
			for (; i<ilen; ++i) {
				d = dataset.data[i];
				if (d !== null && d !== undefined && !isNaN(d)) {
					elements[i].draw();
				}
			}
			//helpers.canvas.unclipArea(chart.ctx);
		}
	});
};
