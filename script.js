// Buscamos todos los elementos del menú principal
const itemsMenu = document.querySelectorAll('.menu-item');

// Escuchamos cuando el usuario hace clic en alguno de ellos
itemsMenu.forEach(item => {
  item.addEventListener('click', function(e) {
    // Si el clic se realiza dentro de un submenú, dejamos que el navegador siga el enlace
    if (e.target.closest('.sub-menu')) {
      return;
    }

    // Evitamos que la página se recargue al hacer clic en el menú principal
    e.preventDefault(); 
    
    // Si haces clic en uno, quitamos la clase 'activo' de los demás (para cerrar otros menús)
    itemsMenu.forEach(otroItem => {
      if (otroItem !== item) otroItem.classList.remove('activo');
    });

    // Ponemos o quitamos la clase 'activo' en el menú donde se hizo clic
    this.classList.toggle('activo');
  });
});
    