var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'функція<br />\
    <img src="styles/legend/_1_0.png" /> лікарня<br />\
    <img src="styles/legend/_1_1.png" /> школа<br />\
    <img src="styles/legend/_1_2.png" /> вища освіта<br />\
    <img src="styles/legend/_1_3.png" /> спортивні майданчики<br />\
    <img src="styles/legend/_1_4.png" /> ринок <br />\
    <img src="styles/legend/_1_5.png" /> ринок <br />\
    <img src="styles/legend/_1_6.png" /> центр міста<br />\
    <img src="styles/legend/_1_7.png" /> дитячий садок<br />\
    <img src="styles/legend/_1_8.png" /> центр міста<br />\
    <img src="styles/legend/_1_9.png" /> промисловість<br />\
    <img src="styles/legend/_1_10.png" /> багатоквартирне житло<br />'
        });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                interactive: true,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'межа<br />\
    <img src="styles/legend/_3_0.png" /> Гай-Мошенка<br />\
    <img src="styles/legend/_3_1.png" /> Мошенка<br />\
    <img src="styles/legend/_3_2.png" /> Охтирська міська громада<br />\
    <img src="styles/legend/_3_3.png" /> Охтирський район<br />\
    <img src="styles/legend/_3_4.png" /> Підлозіївка<br />\
    <img src="styles/legend/_3_5.png" /> <br />\
    <img src="styles/legend/_3_6.png" /> Чернеччинська сільська громада<br />\
    <img src="styles/legend/_3_7.png" /> Україна<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr__1.setVisible(true);lyr_Building_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr__1,lyr_Building_2,lyr__3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'amenity': 'функція', 'landuse': 'landuse', 'phone': 'phone', 'official_name': 'official_name', 'name': 'назва', 'building': 'building', });
lyr_Building_2.set('fieldAliases', {'fid': 'fid', 'building': 'тип будинку', 'type': 'type', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'name': 'назва', 'shop': 'shop', 'building_l': 'building_l', 'roof_level': 'roof_level', 'height': 'height', 'addr_postc': 'addr_postc', 'amenity': 'amenity', 'denominati': 'denominati', 'religion': 'religion', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'addr_city': 'addr_city', 'layer': 'layer', 'office': 'office', 'brand': 'brand', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'opening_ho': 'opening_ho', 'operator': 'operator', 'outdoor_se': 'outdoor_se', 'email': 'email', 'phone': 'phone', 'website': 'website', 'craft': 'craft', 'tourism': 'tourism', 'museum': 'museum', 'power': 'power', 'substation': 'substation', 'fuel_cng': 'fuel_cng', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'landuse': 'landuse', 'population': 'населення', 'place': 'тип', 'name': 'назва', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'amenity': 'TextEdit', 'landuse': 'TextEdit', 'phone': 'TextEdit', 'official_name': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'fid': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'building_l': 'TextEdit', 'roof_level': 'TextEdit', 'height': 'TextEdit', 'addr_postc': 'TextEdit', 'amenity': 'TextEdit', 'denominati': 'TextEdit', 'religion': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'office': 'TextEdit', 'brand': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'outdoor_se': 'TextEdit', 'email': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'craft': 'TextEdit', 'tourism': 'TextEdit', 'museum': 'TextEdit', 'power': 'TextEdit', 'substation': 'TextEdit', 'fuel_cng': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'landuse': 'TextEdit', 'population': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'amenity': 'no label', 'landuse': 'no label', 'phone': 'no label', 'official_name': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_Building_2.set('fieldLabels', {'fid': 'no label', 'building': 'no label', 'type': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'name': 'no label', 'shop': 'no label', 'building_l': 'no label', 'roof_level': 'no label', 'height': 'no label', 'addr_postc': 'no label', 'amenity': 'no label', 'denominati': 'no label', 'religion': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'wikimedia_': 'no label', 'addr_city': 'no label', 'layer': 'no label', 'office': 'no label', 'brand': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'outdoor_se': 'no label', 'email': 'no label', 'phone': 'no label', 'website': 'no label', 'craft': 'no label', 'tourism': 'no label', 'museum': 'no label', 'power': 'no label', 'substation': 'no label', 'fuel_cng': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'landuse': 'no label', 'population': 'no label', 'place': 'no label', 'name': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});