
(() => {
    const zoomLevel = 15;

    const location1 = {
        center: [43.6436335419844, -79.58027952962343],
        zoom: zoomLevel
    };
    const location2 = {
        center: [-30.329435869112118, 149.7880389574583],
        zoom: zoomLevel
    };
    const location3 = {
        center: [53.708807877198325, -1.3395424376136305],
        zoom: zoomLevel
    };

    const map1 = L.map('map_1', location1);
    const map2 = L.map('map_2', location2);
    const map3 = L.map('map_3', location3);

    // const map3 = L.map('map_2',{
    //     center: [-25.329435869112118, 149.7880389574583],
    //     zoom: 15
    //     });

    let maps = [map1, map2, map3]
    
    const options = {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsMG1xbDUyZDB4ZDgza28zanU5d2F6cW8ifQ.5qUhExqcxtxwJf3qdDASew'
    }
    
    maps.forEach(map => L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', options).addTo(map))

})()