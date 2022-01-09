const d = document,
  $formulario = d.getElementById("formulario"),
  $inputsRadio = d.querySelectorAll("#formulario input[type='radio']"),
  $inputsUl = d.querySelectorAll('#formulario input[name="UL"]'),
  $inputsCargaF = d.querySelectorAll('#formulario input[name="cargaF"]'),
  $inputsEscolaridad = d.querySelectorAll(
    '#formulario input[name="escolaridad"]'
  ),
  $inputsGarantia = d.querySelectorAll('#formulario input[name="garantia"]'),
  $experiencia = d.querySelector("#experiencia"),
  $caPago = d.querySelector("#capacpag"),
  $otrosIng = d.querySelector("#otrosIng"),
  $b = -1.042,
  $c = 0.548,
  $e = -0.297,
  $g = -0.237,
  $i = 0.718,
  $k = -0.002,
  $m = 0.508,
  $o = -0.689,
  $q = 0.803,
  $tasa = d.querySelector("#tasa");
// $button = document.querySelector(".btn-calcular");

var campos = {
  ubicacion: false,
  experiencia: false,
  caPago: false,
  resFamiliar: false,
  otrosIngresos: false,
  escolaridad: false,
  tasa: false,
  garantia: false,
};

for (let i = 0; i < $inputsUl.length; i++) {
  $inputsUl[i].addEventListener("change", () => {
    d.querySelector(".ubicacion").classList.add("campo-correcto");
    d.querySelector(".ubicacion").classList.remove("campo-incorrecto");
    d.querySelector(".ubicacion .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
  });
}
for (let i = 0; i < $inputsCargaF.length; i++) {
  $inputsCargaF[i].addEventListener("change", () => {
    d.querySelector(".resFamiliar").classList.add("campo-correcto");
    d.querySelector(".resFamiliar").classList.remove("campo-incorrecto");
    d.querySelector(".resFamiliar .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
  });
}
for (let i = 0; i < $inputsEscolaridad.length; i++) {
  $inputsEscolaridad[i].addEventListener("change", () => {
    d.querySelector(".escolaridad").classList.add("campo-correcto");
    d.querySelector(".escolaridad").classList.remove("campo-incorrecto");
    d.querySelector(".escolaridad .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
  });
}
for (let i = 0; i < $inputsGarantia.length; i++) {
  $inputsGarantia[i].addEventListener("change", () => {
    d.querySelector(".garantia").classList.add("campo-correcto");
    d.querySelector(".garantia").classList.remove("campo-incorrecto");
    d.querySelector(".garantia .formulario__input-error").classList.remove(
      "formulario__input-error-activo"
    );
  });
}

$experiencia.addEventListener("keyup", () => {
  // d.querySelector(".experiencia").classList.add("campo-correcto");
  // d.querySelector(".experiencia").classList.remove("campo-incorrecto");
  d.querySelector(".experiencia .formulario__input-error").classList.remove(
    "formulario__input-error-activo"
  );
});

$caPago.addEventListener("keyup", () => {
  // d.querySelector(".capago").classList.add("campo-correcto");
  // d.querySelector(".capago").classList.remove("campo-incorrecto");
  d.querySelector(".capago .formulario__input-error").classList.remove(
    "formulario__input-error-activo"
  );
});
$otrosIng.addEventListener("keyup", () => {
  // d.querySelector(".otrosingresos").classList.add("campo-correcto");
  // d.querySelector(".otrosingresos").classList.remove("campo-incorrecto");
  d.querySelector(".otrosingresos .formulario__input-error").classList.remove(
    "formulario__input-error-activo"
  );
});
$tasa.addEventListener("keyup", () => {
  // d.querySelector(".tasa").classList.add("campo-correcto");
  // d.querySelector(".tasa").classList.remove("campo-incorrecto");
  d.querySelector(".tasa .formulario__input-error").classList.remove(
    "formulario__input-error-activo"
  );
});

const validarCampoRadio = () => {
  if ($inputsUl[0].checked || $inputsUl[1].checked) {
    campos.ubicacion = true;
  } else {
    // d.querySelector(".ubicacion").classList.add("campo-incorrecto");
    d.querySelector(".ubicacion .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsCargaF[0].checked || $inputsCargaF[1].checked) {
    campos.resFamiliar = true;
  } else {
    // d.querySelector(".resFamiliar").classList.add("campo-incorrecto");
    d.querySelector(".resFamiliar .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsEscolaridad[0].checked || $inputsEscolaridad[1].checked) {
    campos.escolaridad = true;
  } else {
    // d.querySelector(".escolaridad").classList.add("campo-incorrecto");
    d.querySelector(".escolaridad .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($inputsGarantia[0].checked || $inputsGarantia[1].checked) {
    campos.garantia = true;
  } else {
    // d.querySelector(".garantia").classList.add("campo-incorrecto");
    d.querySelector(".garantia .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
};

const validarCampoNumbers = () => {
  if ($experiencia.value !== "" && $experiencia.value !== null) {
    campos.experiencia = true;
  } else {
    // d.querySelector(".experiencia").classList.add("campo-incorrecto");
    d.querySelector(".experiencia .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($caPago.value !== "" && $caPago.value !== null) {
    campos.caPago = true;
  } else {
    // d.querySelector(".capago").classList.add("campo-incorrecto");
    d.querySelector(".capago .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($otrosIng.value !== "" && $otrosIng.value !== null) {
    campos.otrosIngresos = true;
  } else {
    // d.querySelector(".otrosingresos").classList.add("campo-incorrecto");
    d.querySelector(".otrosingresos .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
  if ($tasa.value !== "" && $tasa.value !== null) {
    campos.tasa = true;
  } else {
    // d.querySelector(".tasa").classList.add("campo-incorrecto");
    d.querySelector(".tasa .formulario__input-error").classList.add(
      "formulario__input-error-activo"
    );
  }
};

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCampoRadio();
  validarCampoNumbers();

  if (
    campos.ubicacion &&
    campos.resFamiliar &&
    campos.escolaridad &&
    campos.garantia &&
    campos.experiencia &&
    campos.caPago &&
    campos.otrosIngresos &&
    campos.tasa
  ) {
    let ubicacion, cargaF, escolaridad, garantia;

    $inputsUl.forEach((input) => {
      if (input.checked) {
        ubicacion = input.value;
      }
    });
    $inputsCargaF.forEach((input) => {
      if (input.checked) {
        cargaF = input.value;
      }
    });
    $inputsEscolaridad.forEach((input) => {
      if (input.checked) {
        escolaridad = input.value;
      }
    });
    $inputsGarantia.forEach((input) => {
      if (input.checked) {
        garantia = input.value;
      }
    });

    let result =
      $b +
      $c * ubicacion -
      $e * $experiencia.value -
      $g * $caPago.value +
      $i * cargaF -
      $k * $otrosIng.value +
      $m * escolaridad -
      $o * $tasa.value +
      $q * garantia;
    let total = 1 / Math.pow(result, 10) + 1;
    if (ubicacion == 0) {
      d.querySelector(".resultado__ubicacion").nextElementSibling.textContent =
        "Centro";
    }
    if (ubicacion == 1) {
      d.querySelector(".resultado__ubicacion").nextElementSibling.textContent =
        "Contornos";
    }

    if (cargaF == 0) {
      d.querySelector(".resultado__resp").nextElementSibling.textContent =
        "0 a 2 personas";
    }
    if (cargaF == 1) {
      d.querySelector(".resultado__resp").nextElementSibling.textContent =
        "3 o mas personas";
    }
    if (escolaridad == 0) {
      d.querySelector(".resultado__escol").nextElementSibling.textContent =
        "No nivel superior";
    }
    if (escolaridad == 1) {
      d.querySelector(".resultado__escol").nextElementSibling.textContent =
        "Nivel superior";
    }
    if (garantia == 0) {
      d.querySelector(".resultado__garantia").nextElementSibling.textContent =
        "Garantia reales";
    }
    if (garantia == 1) {
      d.querySelector(".resultado__garantia").nextElementSibling.textContent =
        "Respaldo colateral";
    }

    d.querySelector(
      ".resultado__experiencia"
    ).nextElementSibling.textContent = `${$experiencia.value}`;
    d.querySelector(
      ".resultado__capa"
    ).nextElementSibling.textContent = `${$caPago.value}`;
    d.querySelector(
      ".resultado__ing"
    ).nextElementSibling.textContent = `${$otrosIng.value} pesos`;
    d.querySelector(
      ".resultado__tasa"
    ).nextElementSibling.textContent = `${$tasa.value} `;
    d.querySelector(
      ".probabilidad-impago > p"
    ).innerHTML = `Prob de impago de :<b>${total}</b>`;

    // console.log("calculando")
    // console.log(ubicacion)
    // console.log(cargaF)
    // console.log(escolaridad)
    // console.log(garantia)
    campos.ubicacion = false;
    campos.resFamiliar = false;
    campos.escolaridad = false;
    campos.garantia = false;
    campos.experiencia = false;
    campos.caPago = false;
    campos.otrosIngresos = false;
    campos.tasa = false;
    $formulario.reset();
    // d.querySelector(".ubicacion").classList.remove("campo-correcto");
    // d.querySelector(".resFamiliar").classList.remove("campo-correcto");
    // d.querySelector(".escolaridad").classList.remove("campo-correcto");
    // d.querySelector(".garantia").classList.remove("campo-correcto");
    // d.querySelector(".experiencia").classList.remove("campo-correcto");
    // d.querySelector(".capago").classList.remove("campo-correcto");
    // d.querySelector(".otrosingresos").classList.remove("campo-correcto");
    // d.querySelector(".tasa").classList.remove("campo-correcto");
  } else {
    // console.log("No calculando");
    d.querySelector(".resultado__ubicacion").nextElementSibling.textContent =
      "";
    d.querySelector(".resultado__experiencia").nextElementSibling.textContent =
      "";
    d.querySelector(".resultado__capa").nextElementSibling.textContent = "";
    d.querySelector(".resultado__resp").nextElementSibling.textContent = "";
    d.querySelector(".resultado__ing").nextElementSibling.textContent = "";
    d.querySelector(".resultado__escol").nextElementSibling.textContent = "";
    d.querySelector(".resultado__tasa").nextElementSibling.textContent = "";
    d.querySelector(".resultado__garantia").nextElementSibling.textContent = "";
    d.querySelector(".probabilidad-impago > p").textContent = "Sin resultados";
    return false;
  }
});
