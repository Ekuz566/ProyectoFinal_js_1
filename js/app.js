import { Ingreso } from './Ingreso.js';
import { Egreso } from './Egreso.js';

// Arreglos de prueba para que las funciones tengan algo que sumar
const ingresos = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400)
];

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

//Función cargar cabecero

let cargarCabecero = () => {
    //1. Crea la variable presupuesto y asígnale la resta
    let presupuesto = totalIngresos() - totalEgresos();
    //2. Variable porcentaje egreso
    let porcentajeEgreso = totalEgresos() / totalIngresos;
}