const status = document.getElementById('status');
const map = document.getElementById('map');

function success(position) {
  const { latitude, longitude } = position.coords;
  status.textContent = `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
  const iframe = document.createElement('iframe');
  iframe.src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = '0';
  map.innerHTML = '';
  map.appendChild(iframe);
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  status.textContent = 'Geolocation is not supported by your browser';
}
