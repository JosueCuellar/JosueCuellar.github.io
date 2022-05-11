var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_departamentos_1 = new ol.format.GeoJSON();
var jsonSource_departamentos_1 = new ol.source.Vector({
    url: function(extent) {
        return  'http://localhost:8080/geoserver/nuevo/ows?' +
                'service=WFS&' +
                'version=1.0.0&request=GetFeature&typeName=nuevo%3Adepartamentos&'+
                'outputFormat=application/json';
      },
   // url: 'https://raw.githubusercontent.com/JosueCuellar/JosueCuellar.github.io/main/xd.json',
    format: new ol.format.GeoJSON(),
    attributions: ' '
});
var lyr_departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departamentos_1, 
                style: style_departamentos_1,
                interactive: true,
                title: '<img src="styles/legend/departamentos_1.png" /> departamentos'
            });
var format_san_salvador_2 = new ol.format.GeoJSON();
var features_san_salvador_2 = format_san_salvador_2.readFeatures(json_san_salvador_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_san_salvador_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_san_salvador_2.addFeatures(features_san_salvador_2);
var lyr_san_salvador_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_san_salvador_2, 
                style: style_san_salvador_2,
                interactive: true,
                title: '<img src="styles/legend/san_salvador_2.png" /> san_salvador'
            });
var format_municipios_ss_3 = new ol.format.GeoJSON();
var features_municipios_ss_3 = format_municipios_ss_3.readFeatures(json_municipios_ss_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_ss_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_ss_3.addFeatures(features_municipios_ss_3);
var lyr_municipios_ss_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipios_ss_3, 
                style: style_municipios_ss_3,
                interactive: true,
                title: '<img src="styles/legend/municipios_ss_3.png" /> municipios_ss'
            });
var format_locales_centros_ginecologicos_4 = new ol.format.GeoJSON();
var features_locales_centros_ginecologicos_4 = format_locales_centros_ginecologicos_4.readFeatures(json_locales_centros_ginecologicos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locales_centros_ginecologicos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locales_centros_ginecologicos_4.addFeatures(features_locales_centros_ginecologicos_4);
var lyr_locales_centros_ginecologicos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_locales_centros_ginecologicos_4, 
                style: style_locales_centros_ginecologicos_4,
                interactive: true,
                title: '<img src="styles/legend/locales_centros_ginecologicos_4.png" /> locales_centros_ginecologicos'
            });
var format_puntos_de_referencia_5 = new ol.format.GeoJSON();
var features_puntos_de_referencia_5 = format_puntos_de_referencia_5.readFeatures(json_puntos_de_referencia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_de_referencia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_de_referencia_5.addFeatures(features_puntos_de_referencia_5);
var lyr_puntos_de_referencia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntos_de_referencia_5, 
                style: style_puntos_de_referencia_5,
                interactive: true,
                title: '<img src="styles/legend/puntos_de_referencia_5.png" /> puntos_de_referencia'
            });
var format_calles_6 = new ol.format.GeoJSON();
var features_calles_6 = format_calles_6.readFeatures(json_calles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calles_6.addFeatures(features_calles_6);
var lyr_calles_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_calles_6, 
                style: style_calles_6,
                interactive: true,
                title: '<img src="styles/legend/calles_6.png" /> calles'
            });
var format_centros_ginecologicos_7 = new ol.format.GeoJSON();
var features_centros_ginecologicos_7 = format_centros_ginecologicos_7.readFeatures(json_centros_ginecologicos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centros_ginecologicos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centros_ginecologicos_7.addFeatures(features_centros_ginecologicos_7);
var lyr_centros_ginecologicos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centros_ginecologicos_7, 
                style: style_centros_ginecologicos_7,
                interactive: true,
                title: '<img src="styles/legend/centros_ginecologicos_7.png" /> centros_ginecologicos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_departamentos_1.setVisible(true);lyr_san_salvador_2.setVisible(true);lyr_municipios_ss_3.setVisible(true);lyr_locales_centros_ginecologicos_4.setVisible(true);lyr_puntos_de_referencia_5.setVisible(true);lyr_calles_6.setVisible(true);lyr_centros_ginecologicos_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_departamentos_1,lyr_san_salvador_2,lyr_municipios_ss_3,lyr_locales_centros_ginecologicos_4,lyr_puntos_de_referencia_5,lyr_calles_6,lyr_centros_ginecologicos_7];
lyr_departamentos_1.set('fieldAliases', {'FCODE': 'FCODE', 'UID': 'UID', 'ASD': 'ASD', 'COD': 'COD', 'IC5': 'IC5', 'NA2': 'NA2', 'NA3': 'NA3', 'NAM': 'NAM', 'ACC': 'ACC', 'CCN': 'CCN', 'SDV': 'SDV', 'SDP': 'SDP', 'SRT': 'SRT', 'TXT': 'TXT', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_san_salvador_2.set('fieldAliases', {'id': 'id', });
lyr_municipios_ss_3.set('fieldAliases', {'nombre': 'nombre', });
lyr_locales_centros_ginecologicos_4.set('fieldAliases', {'nombre_lug': 'nombre_lug', });
lyr_puntos_de_referencia_5.set('fieldAliases', {'nombre_lug': 'nombre_lug', });
lyr_calles_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_centros_ginecologicos_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'Y': 'Y', 'X': 'X', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TELEFONO': 'TELEFONO', });
lyr_departamentos_1.set('fieldImages', {'FCODE': '', 'UID': '', 'ASD': '', 'COD': '', 'IC5': '', 'NA2': '', 'NA3': '', 'NAM': '', 'ACC': '', 'CCN': '', 'SDV': '', 'SDP': '', 'SRT': '', 'TXT': '', 'AREA_KM': '', 'PERIMETRO': '', });
lyr_san_salvador_2.set('fieldImages', {'id': '', });
lyr_municipios_ss_3.set('fieldImages', {'nombre': 'TextEdit', });
lyr_locales_centros_ginecologicos_4.set('fieldImages', {'nombre_lug': '', });
lyr_puntos_de_referencia_5.set('fieldImages', {'nombre_lug': '', });
lyr_calles_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_centros_ginecologicos_7.set('fieldImages', {'NOMBRE': '', 'Y': '', 'X': '', 'HORARIO': '', 'DIRECCION': '', 'TELEFONO': '', });
lyr_departamentos_1.set('fieldLabels', {'FCODE': 'no label', 'UID': 'no label', 'ASD': 'no label', 'COD': 'no label', 'IC5': 'no label', 'NA2': 'no label', 'NA3': 'no label', 'NAM': 'no label', 'ACC': 'no label', 'CCN': 'no label', 'SDV': 'no label', 'SDP': 'no label', 'SRT': 'no label', 'TXT': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_san_salvador_2.set('fieldLabels', {'id': 'no label', });
lyr_municipios_ss_3.set('fieldLabels', {'nombre': 'no label', });
lyr_locales_centros_ginecologicos_4.set('fieldLabels', {'nombre_lug': 'no label', });
lyr_puntos_de_referencia_5.set('fieldLabels', {'nombre_lug': 'no label', });
lyr_calles_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_centros_ginecologicos_7.set('fieldLabels', {'NOMBRE': 'no label', 'Y': 'no label', 'X': 'no label', 'HORARIO': 'no label', 'DIRECCION': 'no label', 'TELEFONO': 'no label', });
lyr_centros_ginecologicos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});