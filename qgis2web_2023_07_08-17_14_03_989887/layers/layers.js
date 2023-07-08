var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_yougotthis_1 = new ol.format.GeoJSON();
var features_yougotthis_1 = format_yougotthis_1.readFeatures(json_yougotthis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yougotthis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yougotthis_1.addFeatures(features_yougotthis_1);
var lyr_yougotthis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yougotthis_1, 
                style: style_yougotthis_1,
                interactive: true,
                title: '<img src="styles/legend/yougotthis_1.png" /> you got this'
            });

lyr_OSMStandard_0.setVisible(true);lyr_yougotthis_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_yougotthis_1];
lyr_yougotthis_1.set('fieldAliases', {'id': 'id', 'TEXT': 'TEXT', });
lyr_yougotthis_1.set('fieldImages', {'id': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_yougotthis_1.set('fieldLabels', {'id': 'no label', 'TEXT': 'inline label', });
lyr_yougotthis_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});