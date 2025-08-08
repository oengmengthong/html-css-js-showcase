const level = document.getElementById('level');
const charging = document.getElementById('charging');

if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    function update() {
      level.textContent = `Level: ${(battery.level * 100).toFixed(0)}%`;
      charging.textContent = `Charging: ${battery.charging ? 'Yes' : 'No'}`;
    }
    update();
    battery.addEventListener('levelchange', update);
    battery.addEventListener('chargingchange', update);
  });
} else {
  level.textContent = 'Battery API not supported.';
}
