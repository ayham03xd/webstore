
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registered:', reg.scope))
    .catch(err => console.error('Service Worker registration failed:', err));
}

function toggleDescription(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function addToList(productName) {
  const list = document.getElementById('userList');
  const item = document.createElement('li');
  item.textContent = productName;
  list.appendChild(item);
}
