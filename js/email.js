// Selecciona todos los elementos de formulario con la clase 'needs-validation'
const forms = document.querySelectorAll('.needs-validation');

// Obtiene el botón de envío del formulario
const btn = document.getElementById('button');

// Función para borrar los campos del formulario
// function resetForm() {
//   Array.from(forms).forEach(form => {
//     form.reset();
//   });
// }
// Agrega un controlador de eventos al envío del formulario
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    // Verifica la validez del formulario
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Si el formulario es válido, envíalo al correo electrónico
      event.preventDefault();
      btn.value = 'Enviando...';
      const serviceID = 'default_service';
      const templateID = 'template_ukie835';
      emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
          btn.value = 'Enviar Email';
          alert('¡Su mensaje ha sido enviado con éxito!');
          // Actualiza la pagina despues del envio
          window.location ="";
          // resetForm();
        })
        .catch(err => {
          btn.value = 'Enviar Email';
          alert(JSON.stringify(err));
        });
    }
    // Agrega la clase 'was-validated' para mostrar los estilos de validación de Bootstrap
    form.classList.add('was-validated');
  }, false);
});


// Codigo un poco roto


// // seleciona todo lo de form
// const forms = document.querySelectorAll('.needs-validation')
// // valida el botton para el envio de la api
// const btn = document.getElementById('button');
  
//    // Example starter JavaScript for disabling form submissions if there are invalid fields
//    // Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
  
  
  
//     // Loop over them and prevent submission, Aqui se ejecuta la validacion y el envio
//     // Bucle sobre ellos y prevenga el envío, Aqui se ejecuta la validacion y el envio
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()

//           // si la validacion esta bien ejecutame el envio al Email
//  }else{
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_ukie835';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
      
//       btn.value = 'Send Email';
//       alert('Su Mensaje a sido Enviado con Exito!');



//     })
//     .catch(err => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });

// }
          
       
//         // de lo contrario no te mande
//         form.classList.add('was-validated')
//       }, false)
//     });




 
