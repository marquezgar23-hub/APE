document.addEventListener("DOMContentLoaded", function() {
    
    const btnInicio = document.getElementById("inicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    const btnNoticias = document.getElementById("noticias");
    if (btnNoticias) {
        btnNoticias.addEventListener("click", function() {
            window.location.href = "noticias.html";
        });
    }
    const btnEncuesta = document.getElementById("encuesta");
    if (btnEncuesta) {
        btnEncuesta.addEventListener("click", function() {
            window.location.href = "encuesta.html";
        });
    }
    const form = document.getElementById('encuesta-form');
    if (btnContacto) {
        form.addEventListener('submit', e => {
            e.preventDefault(); 

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !correo || !mensaje) {
                alert("Por favor, completa todos los campos obligatorios antes de enviar.");
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbzqJ8UvstRen36YQdw7SeozSuETlC7HKmbcvr3FOxTtljU8wxs5-hxGFuz3ypKs7Dk/exec'; 
            T
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    
                    alert("¡Gracias! Tu mensaje ha sido enviado correctamente a la APE.");
                    submitBtn.textContent = "Enviar Mensaje";
                    submitBtn.disabled = false;
                    form.reset(); 
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Hubo un error al enviar los datos. Por favor, intenta de nuevo.");
                    submitBtn.textContent = "Enviar Mensaje";
                    submitBtn.disabled = false;
                });
        });
    }
});