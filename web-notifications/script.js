const button = document.getElementById('notify');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  if (!('Notification' in window)) {
    status.textContent = 'Notifications are not supported in this browser.';
    return;
  }

  let permission = Notification.permission;
  if (permission === 'default') {
    try {
      permission = await Notification.requestPermission();
    } catch (err) {
      status.textContent = 'Permission request failed.';
      return;
    }
  }

  if (permission === 'granted') {
    const notification = new Notification('Hello from the Web!', {
      body: 'This is a sample notification body.',
      icon: 'https://www.example.com/icon.png'
    });
    notification.onclick = () => {
      window.focus();
      status.textContent = 'Notification clicked!';
    };
    status.textContent = 'Notification displayed.';
  } else {
    status.textContent = 'Notification permission denied.';
  }
});
