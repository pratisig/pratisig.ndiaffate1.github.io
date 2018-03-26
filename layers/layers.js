var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ZonagesdelaCommunedeNdiaffate_0 = new ol.format.GeoJSON();
var features_ZonagesdelaCommunedeNdiaffate_0 = format_ZonagesdelaCommunedeNdiaffate_0.readFeatures(json_ZonagesdelaCommunedeNdiaffate_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonagesdelaCommunedeNdiaffate_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZonagesdelaCommunedeNdiaffate_0.addFeatures(features_ZonagesdelaCommunedeNdiaffate_0);var lyr_ZonagesdelaCommunedeNdiaffate_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonagesdelaCommunedeNdiaffate_0, 
                style: style_ZonagesdelaCommunedeNdiaffate_0,
    title: 'Zonages de la Commune de Ndiaffate<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_0.png" /> KEUR LANSANA<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_1.png" /> KEUR WALY NDIAYE<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_2.png" /> KOSSY<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_3.png" /> KOUTAL<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_4.png" /> NDIAFFATE<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_5.png" /> THIAKHO<br />\
    <img src="styles/legend/ZonagesdelaCommunedeNdiaffate_0_6.png" /> THIOFFIOR<br />'
        });var format_estuaire_1 = new ol.format.GeoJSON();
var features_estuaire_1 = format_estuaire_1.readFeatures(json_estuaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estuaire_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_estuaire_1.addFeatures(features_estuaire_1);var lyr_estuaire_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estuaire_1, 
                style: style_estuaire_1,
    title: 'estuaire<br />\
    <img src="styles/legend/estuaire_1_0.png" /> Fleuve Saloum<br />\
    <img src="styles/legend/estuaire_1_1.png" /> Usine NSSS<br />'
        });var format_foret_2 = new ol.format.GeoJSON();
var features_foret_2 = format_foret_2.readFeatures(json_foret_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_foret_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_foret_2.addFeatures(features_foret_2);var lyr_foret_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_foret_2, 
                style: style_foret_2,
                title: '<img src="styles/legend/foret_2.png" /> foret'
            });var format_reseau_de_route_3 = new ol.format.GeoJSON();
var features_reseau_de_route_3 = format_reseau_de_route_3.readFeatures(json_reseau_de_route_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reseau_de_route_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reseau_de_route_3.addFeatures(features_reseau_de_route_3);var lyr_reseau_de_route_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reseau_de_route_3, 
                style: style_reseau_de_route_3,
                title: '<img src="styles/legend/reseau_de_route_3.png" /> reseau_de_route'
            });var format_Localits_4 = new ol.format.GeoJSON();
var features_Localits_4 = format_Localits_4.readFeatures(json_Localits_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Localits_4.addFeatures(features_Localits_4);cluster_Localits_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Localits_4
});var lyr_Localits_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Localits_4, 
                style: style_Localits_4,
                title: '<img src="styles/legend/Localits_4.png" /> Localités'
            });var format_Coursdeauxtemporaires_5 = new ol.format.GeoJSON();
var features_Coursdeauxtemporaires_5 = format_Coursdeauxtemporaires_5.readFeatures(json_Coursdeauxtemporaires_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeauxtemporaires_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coursdeauxtemporaires_5.addFeatures(features_Coursdeauxtemporaires_5);var lyr_Coursdeauxtemporaires_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coursdeauxtemporaires_5, 
                style: style_Coursdeauxtemporaires_5,
                title: '<img src="styles/legend/Coursdeauxtemporaires_5.png" /> Cours d\'eaux temporaires'
            });var format_chef_lieu_zone_6 = new ol.format.GeoJSON();
var features_chef_lieu_zone_6 = format_chef_lieu_zone_6.readFeatures(json_chef_lieu_zone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chef_lieu_zone_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_chef_lieu_zone_6.addFeatures(features_chef_lieu_zone_6);cluster_chef_lieu_zone_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_chef_lieu_zone_6
});var lyr_chef_lieu_zone_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_chef_lieu_zone_6, 
                style: style_chef_lieu_zone_6,
                title: '<img src="styles/legend/chef_lieu_zone_6.png" /> chef_lieu_zone'
            });

lyr_ZonagesdelaCommunedeNdiaffate_0.setVisible(true);lyr_estuaire_1.setVisible(true);lyr_foret_2.setVisible(true);lyr_reseau_de_route_3.setVisible(true);lyr_Localits_4.setVisible(true);lyr_Coursdeauxtemporaires_5.setVisible(true);lyr_chef_lieu_zone_6.setVisible(true);
var layersList = [baseLayer,lyr_ZonagesdelaCommunedeNdiaffate_0,lyr_estuaire_1,lyr_foret_2,lyr_reseau_de_route_3,lyr_Localits_4,lyr_Coursdeauxtemporaires_5,lyr_chef_lieu_zone_6];
lyr_ZonagesdelaCommunedeNdiaffate_0.set('fieldAliases', {'ID': 'ID', 'ZONE': 'ZONE', 'SURFACE': 'SURFACE', 'NBR_DE_VIL': 'NBR_DE_VIL', 'POPULATION': 'POPULATION', 'NBR_CONS': 'NBR_CONS', 'NBR_MéNAGE': 'NBR_MéNAGE', });
lyr_estuaire_1.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'NOM': 'NOM', });
lyr_foret_2.set('fieldAliases', {'LAYER': 'LAYER', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FORET2_': 'FORET2_', 'TOPONYMIE': 'TOPONYMIE', 'TYPES': 'TYPES', 'STATUT': 'STATUT', });
lyr_reseau_de_route_3.set('fieldAliases', {'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'CODE': 'CODE', 'FONCTION': 'FONCTION', 'i': 'i', 'j': 'j', });
lyr_Localits_4.set('fieldAliases', {'NøENRG_': 'NøENRG_', 'NO_VILLAGE': 'NO_VILLAGE', 'NO_ADMIN': 'NO_ADMIN', 'TOPONYMIE': 'TOPONYMIE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'CODE': 'CODE', 'X_COORD_1': 'X_COORD_1', 'Y_COORD_1': 'Y_COORD_1', 'ZONE': 'ZONE', 'ACCES_SANT': 'ACCES_SANT', });
lyr_Coursdeauxtemporaires_5.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', });
lyr_chef_lieu_zone_6.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NBR_DE_VIL': 'NBR_DE_VIL', });
lyr_ZonagesdelaCommunedeNdiaffate_0.set('fieldImages', {'ID': 'TextEdit', 'ZONE': 'TextEdit', 'SURFACE': 'TextEdit', 'NBR_DE_VIL': 'TextEdit', 'POPULATION': 'TextEdit', 'NBR_CONS': 'TextEdit', 'NBR_MéNAGE': 'TextEdit', });
lyr_estuaire_1.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'NOM': 'TextEdit', });
lyr_foret_2.set('fieldImages', {'LAYER': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FORET2_': 'TextEdit', 'TOPONYMIE': 'TextEdit', 'TYPES': 'TextEdit', 'STATUT': 'TextEdit', });
lyr_reseau_de_route_3.set('fieldImages', {'LAYER': 'TextEdit', 'LENGTH': 'TextEdit', 'CODE': 'TextEdit', 'FONCTION': 'TextEdit', 'i': 'TextEdit', 'j': 'TextEdit', });
lyr_Localits_4.set('fieldImages', {'NøENRG_': 'TextEdit', 'NO_VILLAGE': 'TextEdit', 'NO_ADMIN': 'TextEdit', 'TOPONYMIE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'CODE': 'TextEdit', 'X_COORD_1': 'TextEdit', 'Y_COORD_1': 'TextEdit', 'ZONE': 'TextEdit', 'ACCES_SANT': 'TextEdit', });
lyr_Coursdeauxtemporaires_5.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', });
lyr_chef_lieu_zone_6.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NBR_DE_VIL': 'TextEdit', });
lyr_ZonagesdelaCommunedeNdiaffate_0.set('fieldLabels', {'ID': 'no label', 'ZONE': 'header label', 'SURFACE': 'no label', 'NBR_DE_VIL': 'inline label', 'POPULATION': 'inline label', 'NBR_CONS': 'inline label', 'NBR_MéNAGE': 'inline label', });
lyr_estuaire_1.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'NOM': 'inline label', });
lyr_foret_2.set('fieldLabels', {'LAYER': 'no label', 'AREA': 'no label', 'PERIMETER': 'inline label', 'FORET2_': 'no label', 'TOPONYMIE': 'header label', 'TYPES': 'inline label', 'STATUT': 'inline label', });
lyr_reseau_de_route_3.set('fieldLabels', {'LAYER': 'no label', 'LENGTH': 'no label', 'CODE': 'no label', 'FONCTION': 'no label', 'i': 'no label', 'j': 'no label', });
lyr_Localits_4.set('fieldLabels', {'NøENRG_': 'no label', 'NO_VILLAGE': 'no label', 'NO_ADMIN': 'no label', 'TOPONYMIE': 'header label', 'X_COORD': 'inline label', 'Y_COORD': 'inline label', 'CODE': 'no label', 'X_COORD_1': 'no label', 'Y_COORD_1': 'no label', 'ZONE': 'inline label', 'ACCES_SANT': 'no label', });
lyr_Coursdeauxtemporaires_5.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', });
lyr_chef_lieu_zone_6.set('fieldLabels', {'ID': 'no label', 'NOM': 'header label', 'NBR_DE_VIL': 'inline label', });
lyr_chef_lieu_zone_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});