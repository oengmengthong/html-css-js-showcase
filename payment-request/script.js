const button = document.getElementById('pay');
const status = document.getElementById('status');

button.addEventListener('click', async () => {
  if (!window.PaymentRequest) {
    status.textContent = 'Payment Request API not supported.';
    return;
  }
  try {
    const methodData = [{ supportedMethods: 'basic-card' }];
    const details = { total: { label: 'Demo', amount: { currency: 'USD', value: '1.00' } } };
    const request = new PaymentRequest(methodData, details);
    const result = await request.show();
    await result.complete('success');
    status.textContent = 'Payment successful';
  } catch (err) {
    status.textContent = `Payment failed: ${err.message}`;
  }
});
