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

// Manejar el evento de envío del formulario
formPagos.addEventListener('submit', function (event) {
  event.preventDefault();
  validarFormulario();
});

// Función para validar el formulario
function validarFormulario() {
  let pagoSeleccionado = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      pagoSeleccionado = true;
      pagoValue = radio.value;
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

  if (pagoSeleccionado && montoValido && paisValido) {
    enviarFormulario(pagoValue, monto.value, pais.value);
  }
}

function enviarFormulario (pago, monto, pais) {
  console.log('Información del formulario:');
  console.log('Plataforma de pago:', pago);
  console.log('Monto:', monto);
  console.log('País:', pais);
  formPagos.reset();
}

// Función para copiar el link al portapapeles
btnCopiar.addEventListener('click', function () {
  textoCopiar.select();
  textoCopiar.setSelectionRange(0, 99999);

  document.execCommand("copy");
  console.log('Link copiado al portapapeles');
});
