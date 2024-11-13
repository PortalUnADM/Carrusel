// Arreglo con las rutas de las imágenes y sus descripciones
const imagenes = [
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOtYND0tF2j3I-Oy-DhC0D8Z9zmlaeYqNIQ&s.jpg", descripcion: "Portal UnADM"},
    {src: "https://encuentratubeca.mx/wp-content/uploads/2022/07/Encuentra-tu-beca-UnaDM-Convocatoria-2022-825x510.jpg", descripcion: " Convocatoria 2024-2025"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlXHe29kgHyWbtpWWF5RqDQpiJqEhzPx-2g&s.jpg", descripcion: "Atención aspirante"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw-neKOdjAjeHIlBjQ4OG6isT_6qO2DkM6w&s.jpg", descripcion: "Participa para ser parte de la UnADM"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp-DsoDj8sEWBdeJs5moj8b76ov2Hb6ZKnw&s.jpg", descripcion: "Accede a las becas UnADM"}
];

// Variables de control para el carrusel
let indiceActual = 0;

// Función que oculta el texto descriptivo al cargar la página
function ocultarTextoDescriptivo() {
    document.getElementById("descripcion-imagen").style.display = "none";
    iniciarCarrusel();
}

// Función que inicia el carrusel y cambia de imagen cada 3 segundos
function iniciarCarrusel() {
    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        actualizarImagen();
    }, 3000);
}

// Función que actualiza la imagen y oculta el texto descriptivo
function actualizarImagen() {
    const imgElement = document.getElementById("imagen-carrusel");
    const descripcionElement = document.getElementById("descripcion-imagen");

    imgElement.src = imagenes[indiceActual].src;
    descripcionElement.textContent = imagenes[indiceActual].descripcion;
    descripcionElement.style.display = "none"; // Oculta la descripción al cambiar de imagen
}

// Función que agranda la imagen al situar el cursor sobre ella
function agrandarImagen() {
    const imgElement = document.getElementById("imagen-carrusel");
    imgElement.style.transform = "scale(2)";
    imgElement.style.transition = "transform 0.3s"; // Suaviza el efecto
}

// Función que reduce la imagen a su tamaño original al retirar el cursor
function reducirImagen() {
    const imgElement = document.getElementById("imagen-carrusel");
    imgElement.style.transform = "scale(1)";
}

// Función que muestra el texto descriptivo de la imagen al hacer clic
function mostrarTextoDescriptivo() {
    const descripcionElement = document.getElementById("descripcion-imagen");
    descripcionElement.style.display = "block";
}
