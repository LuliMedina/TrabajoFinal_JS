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

const nombreParticipante = document.querySelector("#nombre").value;
const testContenedor = document.querySelector("#test");
const submitButton = document.querySelector("#submit");
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

armarTest();

/*
class Respuestas {
	constructor(
		preguntaTacto,
		preguntaBrillo,
		preguntaGranitos,
		preguntaSequedad,
		preguntaPoros
	) {
		this.tacto = preguntaTacto;
		this.brillo = preguntaBrillo;
		this.granitos = preguntaGranitos;
		this.sequedad = preguntaSequedad;
		this.poros = preguntaPoros;
	}

	respuesta() {
		if (
			this.tacto === "Tacto1" &&
			this.brillo === "Brillo1" &&
			this.granitos === "Granitos1" &&
			this.sequedad === "Sequedad1" &&
			this.poros === "Poros1"
		) {
			return "Tu Piel es Grasa";
		} else if (
			this.tacto === "Tacto2" &&
			this.brillo === "Brillo2" &&
			this.granitos === "Granitos2" &&
			this.sequedad === "Sequedad2" &&
			this.poros === "Poros2"
		) {
			return "Tu Piel es Seca";
		} else {
			return "Tu Piel es Mixta";
		}
	}
}


const respuesta1 = new Respuestas(
	"Tacto1",
	"Brillo1",
	"Granitos1",
	"Sequedad1",
	"Poros1"
);
const respuesta2 = new Respuestas(
	"Tacto2",
	"Brillo2",
	"Granitos2",
	"Sequedad2",
	"Poros2"
);
const respuesta3 = new Respuestas(
	"Tacto3",
	"Brillo2",
	"Granitos1",
	"Sequedad3",
	"Poros1"
);

console.log(respuesta3.respuesta());

const ArrayDeRespuestas = [respuesta1, respuesta2, respuesta3];

const respuesta4 = new Respuestas(
	"Tacto1",
	"Brillo1",
	"Granitos1",
	"Sequedad1",
	"Poros1"
);

ArrayDeRespuestas.push(respuesta4);

console.log(ArrayDeRespuestas);
*/
