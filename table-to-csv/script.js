document.getElementById('download').addEventListener('click', () => {
  const rows = Array.from(document.querySelectorAll('table tr'));
  const csv = rows.map(row => {
    const cells = Array.from(row.querySelectorAll('th, td'));
    return cells.map(cell => `"${cell.textContent}"`).join(',');
  }).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'table.csv';
  a.click();
  URL.revokeObjectURL(a.href);
});
