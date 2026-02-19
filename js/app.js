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

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
}

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso); 
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML; 
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                        onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += cargarEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const cargarEgresoHTML = (egreso) => {
    let porcentajeEgreso = egreso.valor / totalIngresos();

    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(porcentajeEgreso)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                        onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarEgresos();
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const agregarDato = () => {
    let forma = document.forms['forma'];

    let tipo = forma['tipo'].value;
    let descripcion = forma['descripcion'].value;
    let valor = forma['valor'].value;

    if (descripcion !== '' && valor !== '') {
        if (tipo === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, +valor));
            cargarCabecero();
            cargarIngresos();
        } 
        else if (tipo === 'egreso') {
            egresos.push(new Egreso(descripcion, +valor));
            cargarCabecero();
            cargarEgresos();
        }
        forma.reset();
    }
}

window.cargarApp = cargarApp;
window.agregarDato = agregarDato;
window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;









