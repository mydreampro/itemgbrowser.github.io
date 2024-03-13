var map_9574fab06ea8626536bf4a3dccfeee84 = L.map(
    "map_9574fab06ea8626536bf4a3dccfeee84",
    {
        center: [31.02658392810344, 30.71751479553128],
        crs: L.CRS.EPSG3857,
        zoom: 9,
        zoomControl: true,
        preferCanvas: false,
    }
);





var tile_layer_c66762e8b465f90225ac914ba8648678 = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_9574fab06ea8626536bf4a3dccfeee84);


var marker_4a2ab886453c3f26e4b501c30220367b = L.marker(
    [31.02658392810344, 30.71751479553128],
    {}
).addTo(map_9574fab06ea8626536bf4a3dccfeee84);


var popup_2b46b699d2ecc1d272bbcf9405126bd5 = L.popup({"maxWidth": "100%"});



    var html_490f1f6666f842945a87cac065e9323e = $(`<div id="html_490f1f6666f842945a87cac065e9323e" style="width: 100.0%; height: 100.0%;">Egypt</div>`)[0];
    popup_2b46b699d2ecc1d272bbcf9405126bd5.setContent(html_490f1f6666f842945a87cac065e9323e);



marker_4a2ab886453c3f26e4b501c30220367b.bindPopup(popup_2b46b699d2ecc1d272bbcf9405126bd5)
;