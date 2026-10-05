let map = L.map("map", {center: [36.77, -108.17], zoom: 15});
L.tileLayer.provider("USGS.USImagery").addTo(map);
let sjcpoint = L.marker([36.770558, -108.170073]).addTo(map);
sjcpoint.bindPopup("This is San Juan College. I earned my Associate's degree here.");
let phbline = L.polyline(
    [[36.773656, -108.188635], [36.775168, -108.181759], [36.776763, -108.177639], [36.776863, -108.163528], [36.774563, -108.158482]],
    {color: "purple", weight: 10}
).addTo(map);
phbline.bindPopup("This is Piñon Hills Boulevard.");
let point1 = { "SJC": sjcpoint };
let line2 = { "PHB": phbline };
L.control.layers(point1, line2).addTo(map);
L.control.scale({metric: true, imperial: false}).addTo(map);