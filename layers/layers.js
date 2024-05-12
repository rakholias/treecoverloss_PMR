var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Perth_Metro_Region_1 = new ol.format.GeoJSON();
var features_Perth_Metro_Region_1 = format_Perth_Metro_Region_1.readFeatures(json_Perth_Metro_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perth_Metro_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perth_Metro_Region_1.addFeatures(features_Perth_Metro_Region_1);
var lyr_Perth_Metro_Region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perth_Metro_Region_1, 
                style: style_Perth_Metro_Region_1,
                popuplayertitle: "Perth_Metro_Region",
                interactive: true,
                title: '<img src="styles/legend/Perth_Metro_Region_1.png" /> Perth_Metro_Region'
            });
var lyr_tree_cover_loss_50_2000_2023_Perth_Extent_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "tree_cover_loss_50_2000_2023_Perth_Extent",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tree_cover_loss_50_2000_2023_Perth_Extent_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12844741.657211, -3825244.049522, 12959281.657211, -3691965.375340]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Perth_Metro_Region_1.setVisible(true);lyr_tree_cover_loss_50_2000_2023_Perth_Extent_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Perth_Metro_Region_1,lyr_tree_cover_loss_50_2000_2023_Perth_Extent_2];
lyr_Perth_Metro_Region_1.set('fieldAliases', {'boundary_i': 'boundary_i', 'type_code': 'type_code', 'type_descr': 'type_descr', 'feature_nu': 'feature_nu', 'name': 'name', 'abs_lga_nu': 'abs_lga_nu', 'postcode': 'postcode', 'land_area': 'land_area', 'area_deriv': 'area_deriv', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', 'Name2': 'Name2', });
lyr_Perth_Metro_Region_1.set('fieldImages', {'boundary_i': 'Range', 'type_code': 'Range', 'type_descr': 'TextEdit', 'feature_nu': 'Range', 'name': 'TextEdit', 'abs_lga_nu': 'Range', 'postcode': 'TextEdit', 'land_area': 'TextEdit', 'area_deriv': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', 'Name2': 'TextEdit', });
lyr_Perth_Metro_Region_1.set('fieldLabels', {'boundary_i': 'no label', 'type_code': 'no label', 'type_descr': 'no label', 'feature_nu': 'no label', 'name': 'no label', 'abs_lga_nu': 'no label', 'postcode': 'header label - visible with data', 'land_area': 'no label', 'area_deriv': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', 'Name2': 'header label - always visible', });
lyr_Perth_Metro_Region_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});