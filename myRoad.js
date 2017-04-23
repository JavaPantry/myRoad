/**
 * Created by ptitchkin on 4/23/2017.
 */
var counter = (function () {
    var i = 0;
    return {
        setDiv: function (path) {
            //var node = $.getElementById(path);
            var node = $(path);//.append("<h1>hello I'll be here</h1>");
            var svg = node.append("<svg style='position: absolute;width: 100%;height: 500px;border: 1px lightgray solid;'>" +
                '<g>'+
                '<circle cy="100" cx="200" r="30"/>' +
                '<rect class="active" x="210" y="200" width="100" height="50" />' +
                '</g>'+
                "</svg>");
            return svg;
        },
        addCode: function(code){
            var svg = $(svg);
            svg.append(code);
        },
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
}());