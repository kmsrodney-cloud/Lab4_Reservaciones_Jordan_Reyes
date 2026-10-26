"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// 1. Arreglo inicial con cuatro reservaciones
const reservaciones = [
    { id: 1, cliente: "Ana López", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "María Gómez", personas: 4, zona: "Interior" },
    { id: 4, cliente: "Luis Martínez", personas: 5, zona: "Terraza" }
];
// 5. Función tipada para registrar una reservación
function registrarReservacion(lista, nueva, prioritaria) {
    if (prioritaria) {
        lista.unshift(nueva);
        console.log("Reservación prioritaria registrada al inicio.");
    }
    else {
        lista.push(nueva);
        console.log("Reservación normal registrada al final.");
    }
}
// 5. Función tipada para atender la primera reservación
function atenderReservacion(lista) {
    const atendida = lista.shift();
    if (atendida !== undefined) {
        console.log(`Cliente atendido: ${atendida.cliente} | Personas: ${atendida.personas}`);
    }
    else {
        console.log("No hay reservaciones pendientes.");
    }
}
// 5. Función tipada para buscar por id
function buscarReservacion(lista, idBuscado) {
    const encontrada = lista.find((reservacion) => reservacion.id === idBuscado);
    if (encontrada !== undefined) {
        console.log("Reservación encontrada:");
        console.log(encontrada);
    }
    else {
        console.log(`No existe una reservación con el id ${idBuscado}.`);
    }
}
// 2. Registrar una reservación normal con datos ingresados
console.log("Registrar reservación normal:");
const idNormal = Number(prompt("Escribe el id: "));
const clienteNormal = prompt("Escribe el nombre del cliente: ");
const personasNormal = Number(prompt("Escribe la cantidad de personas: "));
const zonaNormal = prompt("Escribe la zona (Interior o Terraza): ");
const reservacionNormal = {
    id: idNormal,
    cliente: clienteNormal,
    personas: personasNormal,
    zona: zonaNormal
};
registrarReservacion(reservaciones, reservacionNormal, false);
// 2. Registrar una reservación prioritaria con datos ingresados
console.log("\nRegistrar reservación prioritaria:");
const idPrioritaria = Number(prompt("Escribe el id: "));
const clientePrioritaria = prompt("Escribe el nombre del cliente: ");
const personasPrioritaria = Number(prompt("Escribe la cantidad de personas: "));
const zonaPrioritaria = prompt("Escribe la zona (Interior o Terraza): ");
const reservacionPrioritaria = {
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
const idExistente = Number(prompt("Escribe un id existente: "));
buscarReservacion(reservaciones, idExistente);
// 4. Buscar por id inexistente
console.log("\nBúsqueda de reservación inexistente:");
const idInexistente = Number(prompt("Escribe un id que no exista: "));
buscarReservacion(reservaciones, idInexistente);
// 4. Filtro con dos condiciones
const cantidadAntesDelFiltro = reservaciones.length;
const gruposGrandesTerraza = reservaciones.filter((reservacion) => reservacion.zona === "Terraza" && reservacion.personas >= 5);
console.log("\nReservaciones de Terraza con 5 o más personas:");
console.log(gruposGrandesTerraza);
if (gruposGrandesTerraza.length === 0) {
    console.log("No hay reservaciones que cumplan ambas condiciones.");
}
// 6. Estado final
console.log("\nReservaciones pendientes:");
console.log(reservaciones);
console.log(`Cantidad de reservaciones pendientes: ${reservaciones.length}`);
console.log(`Cantidad de coincidencias del filtro: ${gruposGrandesTerraza.length}`);
console.log(`Cantidad antes del filtro: ${cantidadAntesDelFiltro} | Cantidad después del filtro: ${reservaciones.length}`);
if (cantidadAntesDelFiltro === reservaciones.length) {
    console.log("El filtro no eliminó registros del arreglo original.");
}
else {
    console.log("El filtro modificó el arreglo original.");
}
