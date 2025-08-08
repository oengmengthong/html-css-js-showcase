const lux = document.getElementById('lux');

if ('AmbientLightSensor' in window) {
  try {
    const sensor = new AmbientLightSensor();
    sensor.addEventListener('reading', () => {
      lux.textContent = `Lux: ${sensor.illuminance}`;
    });
    sensor.addEventListener('error', event => {
      lux.textContent = `Error: ${event.error.name}`;
    });
    sensor.start();
  } catch (err) {
    lux.textContent = `Sensor error: ${err.message}`;
  }
} else {
  lux.textContent = 'Ambient Light Sensor not supported.';
}
