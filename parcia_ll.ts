import promptSync from "prompt-sync";

const prompt = promptSync();

interface Reservacion {
  id: number;
  cliente: string;
  personas: number;
  zona: string;
}

// 1. Arreglo inicial con cuatro reservaciones
const reservaciones: Reservacion[] = [
  { id: 1, cliente: "Ana López", personas: 2, zona: "Interior" },
  { id: 2, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },
  { id: 3, cliente: "María Gómez", personas: 4, zona: "Interior" },
  { id: 4, cliente: "Luis Martínez", personas: 5, zona: "Terraza" }
];

// 5. Función tipada para registrar una reservación
function registrarReservacion(
  lista: Reservacion[],
  nueva: Reservacion,
  prioritaria: boolean
): void {
  if (prioritaria) {
    lista.unshift(nueva);
    console.log("Reservación prioritaria registrada al inicio.");
  } else {
    lista.push(nueva);
    console.log("Reservación normal registrada al final.");
  }
}

// 5. Función tipada para atender la primera reservación
function atenderReservacion(lista: Reservacion[]): void {
  const atendida: Reservacion | undefined = lista.shift();

  if (atendida !== undefined) {
    console.log(
      `Cliente atendido: ${atendida.cliente} | Personas: ${atendida.personas}`
    );
  } else {
    console.log("No hay reservaciones pendientes.");
  }
}

// 5. Función tipada para buscar por id
function buscarReservacion(lista: Reservacion[], idBuscado: number): void {
  const encontrada: Reservacion | undefined = lista.find(
    (reservacion: Reservacion): boolean => reservacion.id === idBuscado
  );

  if (encontrada !== undefined) {
    console.log("Reservación encontrada:");
    console.log(encontrada);
  } else {
    console.log(`No existe una reservación con el id ${idBuscado}.`);
  }
}

// 2. Registrar una reservación normal con datos ingresados
console.log("Registrar reservación normal:");

const idNormal: number = Number(prompt("Escribe el id: "));
const clienteNormal: string = prompt("Escribe el nombre del cliente: ");
const personasNormal: number = Number(prompt("Escribe la cantidad de personas: "));
const zonaNormal: string = prompt("Escribe la zona (Interior o Terraza): ");

const reservacionNormal: Reservacion = {
  id: idNormal,
  cliente: clienteNormal,
  personas: personasNormal,
  zona: zonaNormal
};

registrarReservacion(reservaciones, reservacionNormal, false);

// 2. Registrar una reservación prioritaria con datos ingresados
console.log("\nRegistrar reservación prioritaria:");

const idPrioritaria: number = Number(prompt("Escribe el id: "));
const clientePrioritaria: string = prompt("Escribe el nombre del cliente: ");
const personasPrioritaria: number = Number(prompt("Escribe la cantidad de personas: "));
const zonaPrioritaria: string = prompt("Escribe la zona (Interior o Terraza): ");

const reservacionPrioritaria: Reservacion = {
  id: idPrioritaria,
  cliente: clientePrioritaria,
  personas: personasPrioritaria,
  zona: zonaPrioritaria
};

registrarReservacion(reservaciones, reservacionPrioritaria, true);

// Mostrar lista antes de atender
console.log("\nReservaciones antes de atender:");
console.log(reservaciones);

// 3. Atender la primera reservación
console.log("\nAtendiendo reservación:");
atenderReservacion(reservaciones);

// 4. Buscar por id existente
console.log("\nBúsqueda de reservación existente:");
const idExistente: number = Number(prompt("Escribe un id existente: "));
buscarReservacion(reservaciones, idExistente);

// 4. Buscar por id inexistente
console.log("\nBúsqueda de reservación inexistente:");
const idInexistente: number = Number(prompt("Escribe un id que no exista: "));
buscarReservacion(reservaciones, idInexistente);

// 4. Filtro con dos condiciones
const cantidadAntesDelFiltro: number = reservaciones.length;

const gruposGrandesTerraza: Reservacion[] = reservaciones.filter(
  (reservacion: Reservacion): boolean =>
    reservacion.zona === "Terraza" && reservacion.personas >= 5
);

console.log("\nReservaciones de Terraza con 5 o más personas:");
console.log(gruposGrandesTerraza);

if (gruposGrandesTerraza.length === 0) {
  console.log("No hay reservaciones que cumplan ambas condiciones.");
}

// 6. Estado final
console.log("\nReservaciones pendientes:");
console.log(reservaciones);
console.log(`Cantidad de reservaciones pendientes: ${reservaciones.length}`);

console.log(
  `Cantidad de coincidencias del filtro: ${gruposGrandesTerraza.length}`
);

console.log(
  `Cantidad antes del filtro: ${cantidadAntesDelFiltro} | Cantidad después del filtro: ${reservaciones.length}`
);

if (cantidadAntesDelFiltro === reservaciones.length) {
  console.log("El filtro no eliminó registros del arreglo original.");
} else {
  console.log("El filtro modificó el arreglo original.");
}