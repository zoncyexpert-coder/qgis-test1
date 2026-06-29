var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: '[https://mt1.google.com/vt/lyrs=y&x=](https://mt1.google.com/vt/lyrs=y&x=){x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ORIGINAL_Community_Boundaries_2 = new ol.format.GeoJSON();
var features_ORIGINAL_Community_Boundaries_2 = format_ORIGINAL_Community_Boundaries_2.readFeatures(json_ORIGINAL_Community_Boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORIGINAL_Community_Boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORIGINAL_Community_Boundaries_2.addFeatures(features_ORIGINAL_Community_Boundaries_2);
var lyr_ORIGINAL_Community_Boundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORIGINAL_Community_Boundaries_2, 
                style: style_ORIGINAL_Community_Boundaries_2,
                popuplayertitle: 'ORIGINAL_Όρια Τοπικών Αρχών — Community_Boundaries',
                interactive: true,
                title: 'ORIGINAL_Όρια Τοπικών Αρχών — Community_Boundaries'
            });
var format___2020CY_PLNZ_3 = new ol.format.GeoJSON();
var features___2020CY_PLNZ_3 = format___2020CY_PLNZ_3.readFeatures(json___2020CY_PLNZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2020CY_PLNZ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2020CY_PLNZ_3.addFeatures(features___2020CY_PLNZ_3);
var lyr___2020CY_PLNZ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2020CY_PLNZ_3, 
                style: style___2020CY_PLNZ_3,
                popuplayertitle: 'Όρια_Πολεοδομικών_Ζωνών - Νοέμβριος 2020 — CY_PLNZ',
                interactive: true,
                title: 'Όρια_Πολεοδομικών_Ζωνών - Νοέμβριος 2020 — CY_PLNZ'
            });
var format____4 = new ol.format.GeoJSON();
var features____4 = format____4.readFeatures(json____4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____4.addFeatures(features____4);
var lyr____4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____4, 
                style: style____4,
                popuplayertitle: 'Όρια_Πολεοδομικών_Ζωνών',
                interactive: true,
                title: '<img src="styles/legend/___4.png" /> Όρια_Πολεοδομικών_Ζωνών'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Άξονες Δραστηριότητας',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Άξονες Δραστηριότητας'
            });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Πολεοδομικές Ζώνες'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ORIGINAL_Community_Boundaries_2.setVisible(true);lyr___2020CY_PLNZ_3.setVisible(true);lyr____4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ORIGINAL_Community_Boundaries_2,lyr___2020CY_PLNZ_3,lyr____4,lyr__5];
lyr_ORIGINAL_Community_Boundaries_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr___2020CY_PLNZ_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr____4.set('fieldAliases', {'DIST_CODE': 'DIST_CODE', 'DEVP_CODE': 'DEVP_CODE', 'DEVT_CODE': 'DEVT_CODE', 'DEVP_NBR': 'DEVP_NBR', 'PLNZNT_COD': 'PLNZNT_COD', 'PLNZNCAT_C': 'PLNZNCAT_C', 'PLNZNT_NAM': 'PLNZNT_NAM', 'DLOF_ID_NO': 'DLOF_ID_NO', 'CREATE_USE': 'CREATE_USE', 'CREATE_DAT': 'CREATE_DAT', 'DEVP_CCD': 'DEVP_CCD', });
lyr__5.set('fieldAliases', {'fid': 'fid', });
lyr_ORIGINAL_Community_Boundaries_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr___2020CY_PLNZ_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr____4.set('fieldImages', {'DIST_CODE': '', 'DEVP_CODE': '', 'DEVT_CODE': '', 'DEVP_NBR': '', 'PLNZNT_COD': '', 'PLNZNCAT_C': '', 'PLNZNT_NAM': '', 'DLOF_ID_NO': '', 'CREATE_USE': '', 'CREATE_DAT': '', 'DEVP_CCD': '', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', });
lyr_ORIGINAL_Community_Boundaries_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr___2020CY_PLNZ_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr____4.set('fieldLabels', {'DIST_CODE': 'no label', 'DEVP_CODE': 'no label', 'DEVT_CODE': 'no label', 'DEVP_NBR': 'no label', 'PLNZNT_COD': 'no label', 'PLNZNCAT_C': 'no label', 'PLNZNT_NAM': 'no label', 'DLOF_ID_NO': 'no label', 'CREATE_USE': 'no label', 'CREATE_DAT': 'no label', 'DEVP_CCD': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});