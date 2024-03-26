 mapboxgl.accessToken = 'pk.eyJ1Ijoic29yY2llcmV1cyIsImEiOiJjbHRudnZxemUwYnNkMmltc21pajR2YW0xIn0.oExUw7Ln5x9MkqmJXuN-Ow';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 14
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-71.092761, 42.357575])
      .addTo(map);

    const cafes = [
      { coordinates: [-71.096003, 42.359133], name: 'Cafe A' },
      { coordinates: [-71.101188, 42.362214], name: 'Cafe B' },
      { coordinates: [-71.110010, 42.367463], name: 'Cafe C' },
      { coordinates: [-71.117755, 42.373743], name: 'Cafe D' }
    ];

    cafes.forEach(cafe => {
      const el = document.createElement('div');
      el.className = 'cafe-marker';
      el.style.backgroundSize = 'cover';
      el.style.width = '30px';
      el.style.height = '30px';

      new mapboxgl.Marker(el)
        .setLngLat(cafe.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${cafe.name}</h3>`))
        .addTo(map);
    });

    const busStops = [
    [-71.093729, 42.359244], 
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];

    let counter = 0;
    const busEl = document.createElement('div');
    busEl.className = 'bus-icon';
    new mapboxgl.Marker(busEl)
      .setLngLat(busStops[0])
      .addTo(map);

    function move() {
      setInterval(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        map.panTo(busStops[counter]); // Center the map on the bus stop
        counter++;
      }, 1000);
    }