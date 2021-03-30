class Nombre {
	constructor(nombre) {
		this.nombre = nombre;
	}
	saludar() {
		console.log(`¡Hola, ${this.nombre}!`);
	}
}

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

const nombre1 = new Nombre(prompt("Ingresa tu nombre"));
nombre1.saludar();

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
