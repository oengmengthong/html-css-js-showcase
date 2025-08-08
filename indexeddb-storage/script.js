const request = indexedDB.open('demo', 1);
let db;
request.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore('notes', { autoIncrement: true });
};
request.onsuccess = e => {
  db = e.target.result;
  displayNotes();
};
function displayNotes() {
  const tx = db.transaction('notes', 'readonly');
  const store = tx.objectStore('notes');
  const req = store.getAll();
  req.onsuccess = () => {
    const list = document.getElementById('notes');
    list.innerHTML = '';
    req.result.forEach(n => {
      const li = document.createElement('li');
      li.textContent = n;
      list.appendChild(li);
    });
  };
}
document.getElementById('note-form').addEventListener('submit', e => {
  e.preventDefault();
  const value = document.getElementById('note').value;
  const tx = db.transaction('notes', 'readwrite');
  tx.objectStore('notes').add(value);
  tx.oncomplete = () => {
    e.target.reset();
    displayNotes();
  };
});
