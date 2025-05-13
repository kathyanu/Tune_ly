const formulario = document.getElementById("formularioReseña");
const listaReseñas = document.getElementById("listaReseñas");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (nombre !== "" && comentario !== "") {
        const nuevaReseña = document.createElement("div");
        nuevaReseña.className = "col-md-6";

        const tarjeta = document.createElement("div");
        tarjeta.className = "card shadow-sm mb-3";

        const cuerpo = document.createElement("div");
        cuerpo.className = "card-body";

        const titulo = document.createElement("h5");
        titulo.className = "card-title";
        titulo.textContent = nombre;

        const texto = document.createElement("p");
        texto.className = "card-text";
        texto.textContent = comentario;

        cuerpo.appendChild(titulo);
        cuerpo.appendChild(texto);
        tarjeta.appendChild(cuerpo);
        nuevaReseña.appendChild(tarjeta);

        listaReseñas.prepend(nuevaReseña);

        alert(`Reseña "${nombre}" agregada`);

        formulario.reset();
    }
});