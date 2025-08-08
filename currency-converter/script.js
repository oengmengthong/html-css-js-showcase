const from = document.getElementById('from');
const to = document.getElementById('to');
let rates;
async function load() {
  const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await res.json();
  rates = data.rates;
  Object.keys(rates).forEach(cur => {
    from.appendChild(new Option(cur, cur));
    to.appendChild(new Option(cur, cur));
  });
  from.value = 'USD';
  to.value = 'EUR';
  convert();
}
load();
function convert() {
  if (!rates) return;
  const amount = parseFloat(document.getElementById('amount').value);
  const usd = amount / rates[from.value];
  const converted = (usd * rates[to.value]).toFixed(2);
  document.getElementById('result').textContent = converted;
}
document.getElementById('amount').addEventListener('input', convert);
from.addEventListener('change', convert);
to.addEventListener('change', convert);
