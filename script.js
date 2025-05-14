// Funções para controlar a exibição dos modais
function showFriends() {
  document.getElementById('description').style.display = 'block';
}

function showDescription() {
  window.open("http://www.xat.com/fade", "_blank");
}

function showGallery() {
  document.getElementById('gallery').style.display = 'block';
}

// Função para fechar modais
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
