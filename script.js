function filtrar(tipo) {
  const itens = document.querySelectorAll('.item');

  itens.forEach(item => {
    if (tipo === 'todos') {
      item.style.display = 'inline';
    } else {
      item.style.display = item.classList.contains(tipo) ? 'inline' : 'none';
    }
  });
}
