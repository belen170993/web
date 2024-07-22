function showCategory(category, event) {
    // Ocultar todas las secciones de contenido de categorías
    var contents = document.getElementsByClassName('category-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    // Mostrar la sección de contenido seleccionada
    document.getElementById(category).classList.add('active');
    
    // Desactivar todas las categorías
    var items = document.querySelectorAll('.list-group-item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    // Activar la categoría seleccionada
    event.target.classList.add('active');
}
