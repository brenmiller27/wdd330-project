leticonCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
listProductsHtml = document.querySelector('.listProducts');


let listProducts = [];


let body = document.querySelector('body')


iconCart.addEventListner('click', () => {
    body.classList.toggle('showCart')

})

closeCart.addEventListner('click', () => {
    body.classList.toggle('showCart')

})



export async function init() {
  await customElements.whenDefined('gmp-map');

  const map = document.querySelector('gmp-map');
  const marker = document.querySelector('gmp-advanced-marker');
  const placePicker = document.querySelector('gmpx-place-picker');
  const infowindow = new google.maps.InfoWindow();

  map.innerMap.setOptions({
    mapTypeControl: false
  });

  placePicker.addEventListener('gmpx-placechange', () => {
    const place = placePicker.value;

    if (!place.location) {
      window.alert(
        "No details available for input: '" + place.name + "'"
      );
      infowindow.close();
      marker.position = null;
      return;
    }

    if (place.viewport) {
      map.innerMap.fitBounds(place.viewport);
    } else {
      map.center = place.location;
      map.zoom = 17;
    }

    marker.position = place.location;
    infowindow.setContent(
      `<strong>${place.displayName}</strong><br>
       <span>${place.formattedAddress}</span>
    `);
    infowindow.open(map.innerMap, marker);
  });
}

document.addEventListener('DOMContentLoaded', init);


// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDI9QlF1853kRIP9JDbPpGph7lmwdwBqLP7cd80k0Gq3DFP45eAnQw_tk1FEuTInQr50dncF7mdprqEISJRQaHsNGCyrs1IL7TtqZY1X0wE9l0OyfNlfwPumjMGSdhsPcDMxANgw25kcq1ZeapJTUfF51-opt0aBHum90dMZWAUlv3yVEEuq1YEC4yXAqmiSHcxMWxIHDJ4RM3ki3g8jPI92zwS1T8PVi8hFDRp8uCpz5RF-QY_xxudEem3kSW0UI0RCHdeMGoxSrgA5EdmvDrSOMlQslzFW_29Uq7szW3m3c6zdFZt9xGsehQ9iglq';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

export async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);


async function getProfile(accessToken) {
  let accessToken = localStorage.getItem('access_token');

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
}

