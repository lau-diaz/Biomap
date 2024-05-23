
  function showInfo(id) {
    // Ocultar todos los contenedores de información
    document.querySelectorAll('.info-container').forEach(container => {
      container.style.display = 'none';
      container.classList.remove('show');
    });

    // Mostrar el contenedor de información seleccionado
    const selectedInfo = document.getElementById('info' + id);
    selectedInfo.style.display = 'block';
    setTimeout(() => {
      selectedInfo.classList.add('show');
    }, 10);
}