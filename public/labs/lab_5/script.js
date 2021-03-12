function mapInit() {
  const mymap = L.map('mapid').setView([38.989697, -76.937759], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWVuZ2lkYSIsImEiOiJja200ZzdyeHUwNDg0MnVwYmNqam9la3g4In0.6egv3aP_xpf0d40bO9rsSw'
  }).addTo(mymap);
  console.log('mymap', mymap);

  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const suggestions = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('submitted')
    const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    console.log('filtered')
    const getSeven = filtered.slice(0, 7);
    
    console.table(getSeven);


    getSeven.forEach((item) => {
      const longLat = item.geocoded_column_1.coordinates;
      console.log('markerLongLat', longLat[0], longLat[1]);
      const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);
      mapObjectFromFunction.panTo([longLat[1], longLat[0]]);
      

      const appendItem = document.createElement('li');
      appendItem.classList.add('block');
      appendItem.classList.add('list-item');
      appendItem.innerHTML = `<div class="list-header is-size-4">${item.name}</div>
      <address class="is-size-5">${item.address_line_1}</address>`;
      suggestions.append(appendItem);

    });
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;