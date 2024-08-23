const formPagos = document.getElementById('formPagos');
const radios = document.querySelectorAll('input[name="pago"]');
const monto = document.getElementById('monto');
const pais = document.getElementById('pais');
const errorMonto = document.getElementById('errorMonto');
const errorPais = document.getElementById('errorPais');
const opcionesPagosContainer = document.querySelector('.opcionesPagosContainer');
const errorOpcionesPago = opcionesPagosContainer.querySelector('.error');
const btnCopiar = document.getElementById('btnCopiar');
const textoCopiar = document.getElementById('textoCopiar');

formPagos.addEventListener('submit', function (event) {
  event.preventDefault();

  let valid = true;


  // Validar opción de pago
  let pagoSeleccionado = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      pagoSeleccionado = true;
    }
  });

  if (!pagoSeleccionado) {
    errorOpcionesPago.classList.remove('oculto');
    valid = false;
  } else {
    errorOpcionesPago.classList.add('oculto');
  }

  // Validar monto
  if (monto.value === '' || monto.value <= 0) {
    if (errorMonto) {
      errorMonto.classList.remove('oculto');
    }
    valid = false;
  } else {
    if (errorMonto) {
      errorMonto.classList.add('oculto');
    }
  }

  // Validar país
  if (pais.value === '') {
    if (errorPais) {
      errorPais.classList.remove('oculto');
    }
    valid = false;
  } else {
    if (errorPais) {
      errorPais.classList.add('oculto');
    }
  }

  if (valid) {
    console.log('Formulario enviado correctamente');
  }
});

btnCopiar.addEventListener('click', function() {
  textoCopiar.select();
  textoCopiar.setSelectionRange(0, 99999);

  document.execCommand("copy");
})