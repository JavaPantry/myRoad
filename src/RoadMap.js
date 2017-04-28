var RoadMap = require('./core/core.js')();

require('./core/core.helpers')(RoadMap);
//require('./platforms/platform.js')(RoadMap);
require('./core/core.canvasHelpers')(RoadMap);
require('./core/core.element')(RoadMap);

/*
require('./core/core.plugin.js')(RoadMap);
require('./core/core.animation')(RoadMap);*/
require('./core/core.controller')(RoadMap);
/*require('./core/core.datasetController')(RoadMap);
require('./core/core.layoutService')(RoadMap);
require('./core/core.scaleService')(RoadMap);
require('./core/core.ticks.js')(RoadMap);
require('./core/core.scale')(RoadMap);
require('./core/core.interaction')(RoadMap);
require('./core/core.tooltip')(RoadMap);
*/

require('./elements/element.arc')(RoadMap);
require('./elements/element.line')(RoadMap);
require('./elements/element.point')(RoadMap);
require('./elements/element.rectangle')(RoadMap);

/*
require('./scales/scale.linearbase.js')(RoadMap);
require('./scales/scale.category')(RoadMap);
require('./scales/scale.linear')(RoadMap);
require('./scales/scale.logarithmic')(RoadMap);
require('./scales/scale.radialLinear')(RoadMap);
require('./scales/scale.time')(RoadMap);

// Controllers must be loaded after elements
// See RoadMap.core.datasetController.dataElementType
require('./controllers/controller.bar')(RoadMap);
require('./controllers/controller.bubble')(RoadMap);
require('./controllers/controller.doughnut')(RoadMap);
require('./controllers/controller.line')(RoadMap);
require('./controllers/controller.polarArea')(RoadMap);
require('./controllers/controller.radar')(RoadMap);

require('./charts/RoadMap.Bar')(RoadMap);
require('./charts/RoadMap.Bubble')(RoadMap);
require('./charts/RoadMap.Doughnut')(RoadMap);
require('./charts/RoadMap.Line')(RoadMap);
require('./charts/RoadMap.PolarArea')(RoadMap);
require('./charts/RoadMap.Radar')(RoadMap);
require('./charts/RoadMap.Scatter')(RoadMap);
*/


module.exports = RoadMap;
if (typeof window !== 'undefined') {
    window.RoadMap = RoadMap;
}

