import { Ingreso } from './Ingreso.js';
import { Egreso } from './Egreso.js';

const ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
    
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0; 
    for (let egreso of egresos) {
        totalEgreso += egreso.valor; 
    }
    return totalEgreso; 
}

//Función cargar cabecero

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 2
    });

}

const cargarCabecero = () => {
    //1. Crea la variable presupuesto y asígnale la resta
    const presupuesto = totalIngresos() - totalEgresos();
    //2. Variable porcentaje egreso
    const porcentajeEgreso = totalEgresos() / totalIngresos();      

    console.log("--- RESULTADOS FORMATEADOS ---");
    console.log("Presupuesto: " + formatoMoneda(presupuesto));
    console.log("Porcentaje de Egreso: " + formatoPorcentaje(porcentajeEgreso));
    
    // También puedes ver los totales
    console.log("Total Ingresos: " + formatoMoneda(totalIngresos()));
    console.log("Total Egresos: " + formatoMoneda(totalEgresos()));
}

const cargarApp = () => {
    cargarCabecero();
}

// Llama a la aplicación al cargar el archivo
cargarApp();








