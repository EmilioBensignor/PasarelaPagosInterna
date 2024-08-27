// Constantes
const formPagos = document.getElementById('formPagos');
const radios = document.querySelectorAll('input[name="pago"]');
const monto = document.getElementById('monto');
const pais = document.getElementById('pais');
const errorMonto = document.getElementById('errorMonto');
const errorPais = document.getElementById('errorPais');
const opcionesPagosContainer = document.querySelector('.opcionesPagosContainer');
const errorOpcionesPago = opcionesPagosContainer.querySelector('.error');
const generarLink = document.getElementById('generarLink');
const copiarContainer = document.getElementById('copiarContainer');
const btnCopiar = document.getElementById('btnCopiar');
const textoCopiar = document.getElementById('textoCopiar');

radios.forEach((radio) => radio.addEventListener('change', validarFormulario));
monto.addEventListener('input', validarFormulario);
pais.addEventListener('change', validarFormulario);

// Manejar el evento de envío del formulario
formPagos.addEventListener('submit', function (event) {
  event.preventDefault();

  validarFormulario();

  // Verificar si el formulario es válido
  if (!generarLink.disabled) {
    console.log('Formulario enviado correctamente');
    copiarContainer.style.display = 'flex';
  }
});

// Función para validar el formulario
function validarFormulario() {
  let pagoSeleccionado = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      pagoSeleccionado = true;
    }
  });

  const montoValido = monto.value !== '' && monto.value > 0;
  const paisValido = pais.value !== '';

  if (!pagoSeleccionado) {
    errorOpcionesPago.classList.remove('oculto');
  } else {
    errorOpcionesPago.classList.add('oculto');
  }

  if (!montoValido) {
    errorMonto.classList.remove('oculto');
  } else {
    errorMonto.classList.add('oculto');
  }

  if (!paisValido) {
    errorPais.classList.remove('oculto');
  } else {
    errorPais.classList.add('oculto');
  }

  // Habilitar o deshabilitar el botón de envío según la validación
  if (pagoSeleccionado && montoValido && paisValido) {
    generarLink.removeAttribute("disabled");
  } else {
    generarLink.setAttribute("disabled", "true");
  }
}

// Función para copiar el link al portapapeles
btnCopiar.addEventListener('click', function () {
  textoCopiar.select();
  textoCopiar.setSelectionRange(0, 99999);

  document.execCommand("copy");
  console.log('Link copiado al portapapeles');
});
