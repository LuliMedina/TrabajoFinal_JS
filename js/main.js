//Selectores-----------------------------
let nombreParticipante = document.querySelector("#nombre");
const submitButton = document.querySelector("#submit");
const testContenedor = document.querySelector("#test");
const preguntasTest = [
	{
		pregunta: "1· Tu piel al tacto, es...",
		respuestas: {
			a: "Gruesa y untuosa.",
			b: "Brillante en la zona central, más seca en las mejillas.",
			c: "Fina y suave.",
		},
	},
	{
		pregunta: "2· ¿Tenes la piel brillante?",
		respuestas: {
			a: "Siempre.",
			b: "A veces, sobre todo en la frente, la nariz y la barbilla.",
			c: "Nunca.",
		},
	},
	{
		pregunta: "3· ¿Soles tener granitos e imperfecciones?",
		respuestas: {
			a: "Siempre.",
			b: "En ocasiones.",
			c: "Casi nunca.",
		},
	},
	{
		pregunta: "4· ¿Notas tirantez o sequedad?",
		respuestas: {
			a: "Nunca.",
			b: "A veces, más en invierno.",
			c: "Siempre.",
		},
	},
	{
		pregunta: "5· ¿Tenes poros abiertos?",
		respuestas: {
			a: "Sí, suelo tenerlos.",
			b: "A veces, en la nariz y la barbilla.",
			c: "Nunca.",
		},
	},
];

//El diseño y armado del Test-----------------------------
function armarTest() {
	const contenidoTest = [];

	preguntasTest.forEach((Preguntas, respuestaNumero) => {
		const respuestas = [];

		for (letter in Preguntas.respuestas) {
			respuestas.push(
				`<label>
              <input type="radio" name="pregunta${respuestaNumero}" value="${letter}">
              ${Preguntas.respuestas[letter]}
            </label>`
			);
		}

		contenidoTest.push(
			`<div class="pregunta"> ${Preguntas.pregunta} </div>
          <div class="respuesta"> ${respuestas.join("")} </div>`
		);
	});

	testContenedor.innerHTML = contenidoTest.join("");
}
armarTest();

/*Función para obtener resultados de la encuesta-----------------------------
Todavía no la apliqué al proyecto*/

//Función para mostrar resultados-----------------------------
submitButton.addEventListener("click", mostrarResultados);

function mostrarResultados(e) {
	e.preventDefault();
	const contenedorResultados = document.createElement("div");

	contenedorResultados.classList.add("contenedor");

	const p = document.createElement("p");
	p.textContent = `¡Hola, ${nombreParticipante.value}!`;
	contenedorResultados.appendChild(p);

	const h2 = document.createElement("h2");
	h2.textContent = "Tu Tipo de piel es GRASA";
	contenedorResultados.appendChild(h2);

	const ptexto = document.createElement("ptexto");
	ptexto.textContent =
		"El cuidado diario de la misma, es la base del éxito para lucirla sana, hidratada y luminosa, sin ese brillo de grasitud que suelen presentar este tipo de pieles. En la rutina cotidiana, como paso fundamental e indispensable, el primer puesto se lo lleva la limpieza facial con productos oíl-free, ya que, sin ésta nada de lo que apliquemos después dará resultados. Siempre debe realizarse como mínimo 2 veces al día (al levantarnos y antes de dormir).Las aguas micelares son una buena opción ya que además de tener propiedades desmaquillantes, arrastran la grasitud dejando la piel hidratada, éstas se pasan con una esponja o torunda de algodón y no se enjuagan.";
	contenedorResultados.appendChild(ptexto);

	document
		.querySelector("#seccionResultados")
		.appendChild(contenedorResultados);
}
