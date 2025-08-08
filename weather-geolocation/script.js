navigator.geolocation.getCurrentPosition(async pos => {
  const { latitude, longitude } = pos.coords;
  document.getElementById('status').textContent = `Lat:${latitude.toFixed(2)}, Lon:${longitude.toFixed(2)}`;
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const data = await res.json();
  const w = data.current_weather;
  document.getElementById('weather').textContent = `${w.temperature}°C`;
}, () => {
  document.getElementById('status').textContent = 'Geolocation failed';
});
