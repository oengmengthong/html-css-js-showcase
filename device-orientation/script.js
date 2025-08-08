const orientationEl = document.getElementById('orientation');
const motionEl = document.getElementById('motion');

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', e => {
    orientationEl.textContent = `Alpha: ${e.alpha?.toFixed(1)}, Beta: ${e.beta?.toFixed(1)}, Gamma: ${e.gamma?.toFixed(1)}`;
  });
} else {
  orientationEl.textContent = 'DeviceOrientation not supported.';
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', e => {
    const { x, y, z } = e.acceleration || {};
    motionEl.textContent = `Acceleration X: ${x?.toFixed(1)}, Y: ${y?.toFixed(1)}, Z: ${z?.toFixed(1)}`;
  });
} else {
  motionEl.textContent = 'DeviceMotion not supported.';
}
