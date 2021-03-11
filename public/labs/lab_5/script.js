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
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const data = await request.json();

  form.addEventListener('submit', async (event) => {
    targetList.innerText = '';

    event.preventDefault();
    console.log('submit fired', search.value);

    function findMatches(wordToMatch, data) {
      console.log('find matches');
      return data.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.zip.match(regex) || place.name.match(regex);
      });
    }

    function displayMatches(event) {
      console.log('display');
      const matchArray = findMatches(event.target.value, data);
      const html = matchArray.map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        const restName = place.name;
        const address1 = place.address_line_1;

        return `
              <div class="box1 is-size-6">${restName}</div>
              <div>${address1}</div>
              `;
      }).join('');
      suggestions.innerHTML = html;
    }
  });

  const searchInput = document.querySelector('.userform');
  const suggestions = document.querySelector('.suggestions');
  searchInput.addEventListener('change', displayMatches);

}


async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;